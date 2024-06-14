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
    align-items: center;
    width: 100%;
    max-width: 1200px; 
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(0px, 360px));
  }
`;

export const ArticleAchievement = styled.article<{ achievementBG?: string }>`

  height: 100%;
  position: relative;
  background-color: ${Variables.black};
  color: ${Variables.white};

  .outlineArticle{ 
    outline: ${Variables.red} 2px solid;
    outline-offset: -2px;
  }

  .divImg{
    height: 230px;
    width: 100%;
    display: block;
    overflow: hidden;
    background: url(${props => props.achievementBG}) center no-repeat;
    background-size: cover;
  }

  .aboutDiv{
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    padding: 15px 10px;
    position: relative;
    

    p{
      font-size: 1.1rem;
    }
  }  
    
`;
