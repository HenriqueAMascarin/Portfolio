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
      row-gap: 30px;
      column-gap: 70px;
      grid-template-columns: repeat(auto-fill, 80px);
      max-width: calc(120px * 8);
      width: 100%;
      align-items: center;
      justify-items: center;
      justify-content: center;

      img{
        transition: all .5s ease-in-out;
        height: 100px;
        width: 120px;
        filter: drop-shadow(${Variables.customDropShadow});
      }
      img:hover{
        transform: scale(1.05);
      }
    }
  }
`;
