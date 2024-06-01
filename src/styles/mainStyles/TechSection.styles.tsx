import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { HorizontalPadding, LinesFlex } from "../GlobalStyle";

export const TechSection = styled.section`
  background-color: ${Variables.white};
  color: ${Variables.black};
  text-align: center;

  ${HorizontalPadding} ${LinesFlex} {
    .techIcons {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, 5rem);
      max-width: calc(5rem * 7);
      width: 100%;
      align-items: center;
      justify-items: center;
      justify-content: center;

      img{
        transition: all .5s ease-in-out;
        filter: drop-shadow(${Variables.customDropShadow});
      }
      img:hover{
        transform: scale(1.05);
      }
    }
  }
`;
