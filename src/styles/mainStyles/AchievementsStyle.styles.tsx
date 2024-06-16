import styled from "styled-components";
import { Variables } from "../CustomVariables";

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
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: start;
  }
`;

export const ArticleAchievement = styled.article<{ achievementBG?: string }>`

  height: fit-content;
  max-width: 360px;
  color: ${Variables.white};

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  

  .divImg{
    min-height: 230px;
    min-width: 360px;
    width: 100%;
    display: block;
    overflow: hidden;
    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;
  }

  .isOpenAbout.aboutDiv {
    max-height: 100%;
    min-height: 230px;
  }

  .aboutDiv{
    flex-grow: 1;  
    max-height: 0px;
    min-width: 1080px;
    transition: all .1s ease-in-out;
    overflow: hidden;
    background-color: ${Variables.black};

    div{
      display: flex;
      justify-content: start;
      width: 100%;
      align-items: start;
      flex-direction: column;
      padding: 15px 10px;
      min-height: 300px;

      p{
        font-size: 1.1rem;
      }
    }
  }  
    
`;
