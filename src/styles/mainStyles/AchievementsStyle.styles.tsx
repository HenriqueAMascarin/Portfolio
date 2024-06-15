import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const AchievementsStyle = styled.section`
  background-color: ${Variables.white};

  h2 {
    text-align: center;
    color: ${Variables.black};
    margin-bottom: 60px;

    &::after {
      background-color: ${Variables.black};
    }
  }

  .containerAchievements{
    display: grid;
    justify-content: center;
    align-items: start;
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(0px, 360px));
  }
`;

export const ArticleAchievement = styled.article<{ achievementBG?: string }>`

  height: fit-content;
  position: relative;
  color: ${Variables.white};

  outline: ${Variables.red} 2px solid;
  outline-offset: -1px;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  

  .divImg{
    min-height: 230px;
    width: 100%;
    display: block;
    overflow: hidden;
    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;
  }

  .isOpenAbout.aboutDiv {
    max-height: 100%;
  }

  .aboutDiv{
    flex-grow: 1;  
    max-height: 0px;
    transition: all .1s ease-in-out;
    overflow: hidden;
    background-color: ${Variables.black};


    div{
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      padding: 15px 10px;
      position: relative;
      min-height: 300px;

      p{
        font-size: 1.1rem;
      }
    }
  }  
    
`;
