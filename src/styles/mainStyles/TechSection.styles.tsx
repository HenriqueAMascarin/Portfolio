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
      gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      filter: drop-shadow(${Variables.customDropShadow});
      max-width: 550px;
      width: 100%;
      align-items: center;
      justify-items: center;
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    ${HorizontalPadding} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      ${LinesFlex} {
        h2 {
          max-width: 200px;
          overflow-wrap: break-word;
          position: relative;

          &::after {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 120%;
            width: 6px;
            height: 200px;
            display: block;
          }
        }
      }
    }
  }
`;
