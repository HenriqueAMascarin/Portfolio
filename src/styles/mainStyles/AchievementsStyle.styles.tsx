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
    grid-template-columns: repeat(auto-fit, minmax(0px, 320px));

    .articleAchievement{
      width: 100%;
      height: 100%;

    .divImg{
      height: 210px;
      width: 100%;
      outline: ${Variables.red} 2px solid;

      img{
        width: 100%;
        height: 100%;
      }
    }
    
    }
  }
`;
