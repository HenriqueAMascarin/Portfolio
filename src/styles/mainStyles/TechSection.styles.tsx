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
      gap: 20px 20px;
      grid-template-columns: auto auto auto;
      justify-content: center;
      max-width: 500px;
      filter: drop-shadow(${Variables.customDropShadow});

      img {
        justify-self: center;
        align-self: center;
      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth}) {
    ${HorizontalPadding} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      ${LinesFlex} {
        .techIcons {
          margin-left: auto;
        }
        h2 {
          max-width: 230px;
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
