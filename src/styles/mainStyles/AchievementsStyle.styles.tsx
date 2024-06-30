import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const ArticleAchievement = styled.article<{ achievementBG?: string }>`

  scroll-margin-top: -120px;

  height: fit-content;
  max-width: 360px;
  color: ${Variables.white};

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  
  &.isOpenAbout {

    .containerHeight {
      grid-template-rows: 1fr;
    }

    .containerDivImg .svgsIconExpand path {
      fill: ${Variables.black};
    }

    .divImg::after{
      background-color: rgba(213, 52, 84, 0.286);
    }
  }

  &:not(.isOpenAbout) .aboutDiv{
    opacity: 0 !important;
    outline: 2px transparent solid !important;
  }

  .divImg{
    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;

    &:after{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transition: all .2s ease-in-out;

    }
  }

  .containerDivImg, .divImg{
    min-height: 230px;
    max-width: 360px;
    min-width: 100%;
    display: block;
  }

  .containerDivImg{
    position: relative;
    cursor: pointer;
  }

  .svgsIconExpand{
    position: absolute;
    z-index: 1;
    right: 8px;
    bottom: 8px;
    filter: drop-shadow(0 0 1px black);

    path{
      transition: all .2s ease-in-out;
    }
  }

  .containerHeight{
    display: grid !important;
    grid-template-rows: 0fr;
    transition: all .3s ease-in-out;
  }

  .containerAbout{
    flex-grow: 1;  
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;

    .aboutDiv{
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      background-color: ${Variables.black};

      overflow-y: hidden;

      height: 100%;
      width: 100%;

      .infoFlex{
        display: flex;
        flex-direction: column;
        padding: 30px 20px;
        gap: 30px;
        height: 100%;    


        .infoDivImage{
          position: relative;
          cursor: pointer;

          .infoImage{
            background: url(${props => props.achievementBG}) left center no-repeat;
            background-size: cover;
            min-height: 200px;
            width: 100%;
            display: inline-block;
            height: 100%;
            border-radius: 14px;
          }
        }
        
        .textAbout{
          display: flex;
          flex-direction: column;
          gap: 50px;
          width: fit-content;

          h4{
            margin-bottom: 10px;
          }

          p{
            font-size: 1.1rem;
          }

          a{
            text-decoration: none;
            color: ${Variables.black};
            font-size: 1.2rem;
            background-color: ${Variables.white};
            font-weight: bold;

            margin-top: auto;
            width: fit-content;
            padding: 2px 10px;
            border-radius: 10px;

            transition: all ease-in-out .2s;

            &:hover{
              color: ${Variables.white};
              background-color: ${Variables.red};
            }
          }
        }
      }

     
    }
  }  
    
`;

export const AchievementsStyle = styled.section`
  background-color: ${Variables.white};

  .outlineAchievements{
    outline: ${Variables.red} 2px solid;
    outline-offset: -1px;
  }

  h2 {
    text-align: center;
    color: ${Variables.black};
    margin-bottom: 60px;

    &::after {
      background-color: ${Variables.black};
    }
  }

  .containerAchievements{
    position: relative;
    max-width: 1080px; 
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .modal{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.552);
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    
    .containerModal{
      position: relative;
      max-height: 500px;
      max-width: 100%;
      height: 100%;

      .cancelIcon{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 48px;
        height: 48px;
        z-index: 1;
        cursor: pointer;
      }

      .containerImageModal{
        position: relative;
        border-radius: 10px;
        overflow: auto;
        width: 100%;
        height: 100%;
        max-height: 100%;
        display: flex;
        justify-content: start;

        &::-webkit-scrollbar-track, &::-webkit-scrollbar-corner{
          border-radius: 10px;
        }

        outline: ${Variables.red} 3px solid;
        outline-offset: -1px;

        .imageInfo{
          max-width: 1000px;
          min-width: fit-content;
          height: 500px;
          max-height: 500px;
        }
      }
    }
  }

  @media screen and (min-width: 730px){
    .containerAchievements{
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 360px));
      grid-template-rows: auto;
      width: fit-content;
    }
    
    ${ArticleAchievement} {
      scroll-margin-top: 0px;

      .containerHeight {
        max-height: 0px;
        display: flex;
      }

      &.isOpenAbout .containerHeight {
        max-height: 330px !important;
      }

      .containerAbout{
        height: 330px;
        
        .aboutDiv{
          position: absolute !important;
          left: 0 !important;

          .infoFlex{
            flex-direction: row;

            .textAbout{
              gap: 20px;
            }

            .infoDivImage .infoImage{
              min-height: 100%;
              max-height: 100%;
              max-width: 360px;
              min-width: 320px;
              height: 270px;
            }
          }
        }

      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){
    .containerAchievements{
      grid-template-columns: repeat(3, minmax(0px, 360px));

      .containerAbout .aboutDiv .infoFlex .infoDivImage .infoImage{
        min-width: 360px;
      }
    }
  }
`;
