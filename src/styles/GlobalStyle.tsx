import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import fontLight from "../assets/fonts/Inter-Light.ttf";
import fontBold from "../assets/fonts/Inter-Bold.ttf";
import { Variables } from "./CustomVariables";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: inter;
        src: url(${fontLight});
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: inter;
        src: url(${fontBold});
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    *, *::before, *::after{
        box-sizing: border-box;
    }
    *{
        margin: 0;
        padding: 0;
        font-family: inter, sans-serif;
    }

    *:focus{
        outline-color: ${Variables.red};
        
    }
    body, html{
        min-height: 100vh;
    }

    img, picture, svg, video{
        display: block;
        max-width: 100%;
    }

    h2{
        font-size: clamp(2.6rem, 7vw, 4rem);
    }

    h2::after, .MakeLink::before{
        content: "";
        display: block;
        position: relative;
        left: 0;
        right: 0;
        width: 138px;
        height: 6px;
        background-color: ${Variables.black};
        margin: 0 auto 20px;
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: ${Variables.black};
    }
    ::-webkit-scrollbar-thumb {
        background: ${Variables.red};
        border-radius: 10px;
    }

    @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){
        h2::after, .MakeLink::before{
            width: 200px;
        }
    }

`;

export const HorizontalPadding = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;

export const LinesFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    flex-direction: row;
    gap: 110px;
  }
`;

export const MaxWidthCapsule = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
`;

export const VerticalPadding = styled.div`
  padding: 70px 0;

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    padding: 120px 0;
  }
`;
