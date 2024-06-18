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
    background-image: rgba(255, 255, 255, 0.5), url(${props => props.achievementBG}) !important;
  }

  &.isOpenAbout .containerAbout, &.isOpenAbout .aboutDiv {
    max-height: 300px !important;
  }

  .divImg{
    min-height: 230px;
    max-width: 360px;
    min-width: 100%;
    display: block;

    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;
  }

  .containerAbout{
    flex-grow: 1;  
    max-height: 0px;
    width: 100%;
    height: 300px;
    
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
      height: 300px;
      width: 100%;
      max-height: 0px;

      .infoFlex{
        display: flex;
        padding: 30px 20px;
        gap: 30px;
        height: 100%;

        .infoImage{
          display: none;
          background: url(${props => props.achievementBG}) center no-repeat;
          background-size: cover;
          min-height: 100%;
          min-width: 360px;
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

  @media screen and (min-width: 730px){
    .containerAchievements{
      display: grid;
      grid-template-columns: repeat(2, minmax(0px, 360px));
      grid-template-rows: auto;
      width: fit-content;
    }
    
    ${ArticleAchievement} {
      .containerAbout{
      background-color: red;
        
        .aboutDiv{
          position: absolute !important;
          left: 0 !important;

          .infoFlex .infoImage{
            display: inline-block;
            height: 100%;
            width: fit-content;
            border-radius: 14px;
          }
        }

      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){
    .containerAchievements{
      grid-template-columns: repeat(3, minmax(0px, 360px));
    }
  }
`;
