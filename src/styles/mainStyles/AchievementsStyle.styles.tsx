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


  .articleAchievement{
    img{
      height: 200px;
      width: 100%;
      object-fit: ;
    }
  }
  
  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    h2 {
      margin-bottom: 60px;
    }
    
  }
`;
