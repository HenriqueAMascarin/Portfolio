import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const AchievementsStyle = styled.section`
  background-color: ${Variables.white};

  h2 {
    text-align: center;
    color: ${Variables.black};

    &::after {
      background-color: ${Variables.black};
    }
  }

  .containerAchievements{
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 340px);

    .articleAchievement{
      width: 100%;
      height: 100%;

    .divImg{
      height: 210px;
      width: 100%;

      img{
        width: 100%;
        height: 100%;
      }
    }
    
    }
  }
  
  
  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    h2 {
      margin-bottom: 60px;
    }
    
  }
`;
