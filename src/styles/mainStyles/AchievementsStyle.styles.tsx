import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const ArticleAchievement = styled.article<{ achievementBG?: string }>`

  height: fit-content;
  max-width: 360px;
  color: ${Variables.white};

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  
  &.isOpenAbout .divImg{
    background-image: linear-gradient(rgba(213, 52, 84, 0.334), rgba(213, 52, 84, 0.334)), url(${props => props.achievementBG}) !important;
  }

  &.isOpenAbout .containerAbout, &.isOpenAbout .aboutDiv {
    max-height: fit-content !important;
  }

  .divImg{
    min-height: 230px;
    max-width: 360px;
    min-width: 100%;
    display: block;

    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;
    transition: all 3s ease-in-out;
    cursor: pointer;
  }

  .containerAbout{
    flex-grow: 1;  
    max-height: 0px;
    width: 100%;
    height: 100%;
    
    transition: all .1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: start;

    .aboutDiv{
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      overflow-y: hidden;
      background-color: ${Variables.black};
      transition: all .1s ease-in-out;
      height: fit-content;
      width: 100%;
      max-height: 0px;

      .infoFlex{
        display: flex;
        flex-direction: column;
        padding: 30px 20px;
        gap: 30px;
        height: 100%;

        .infoImage{
          background: url(${props => props.achievementBG}) center no-repeat;
          background-size: cover;
          min-height: 200px;
          min-width: 300px;
          display: inline-block;
          height: 100%;
          border-radius: 14px;
          cursor: pointer;
        }

        p{
          font-size: 1.1rem;
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

      &.isOpenAbout .containerAbout, &.isOpenAbout .aboutDiv {
        max-height: 300px !important;
      }
  
      .containerAbout{
        height: 300px;
        
        .aboutDiv{
          height: 300px;
          position: absolute !important;
          left: 0 !important;

          .infoFlex{
            flex-direction: row;

            .infoImage{
              min-height: 100%;
            }
          }
        }

      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){
    .containerAchievements{
      grid-template-columns: repeat(3, minmax(0px, 360px));

      .containerAbout{
      
        .aboutDiv .infoFlex .infoImage{
          min-width: 360px;

        }
      }
    }
  }
`;
