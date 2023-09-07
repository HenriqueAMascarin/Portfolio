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
      gap: 20px;
      grid-template-columns: repeat(auto-fill, 4.5rem);
      max-width: calc(4.5rem * 7);
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

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    ${HorizontalPadding} {
      ${LinesFlex} {
        max-width: 800px;
        
        h2 {
          max-width: 170px;
          overflow-wrap: break-word;
          position: relative;

          &::after {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: calc(100% + 60px);
            width: 6px;
            height: 200px;
            display: block;
          }
        }
      }
    }
  }
`;
