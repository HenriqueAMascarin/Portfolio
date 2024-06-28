import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import fontLight from "../assets/fonts/Inter-Light.ttf";
import fontRegular from "../assets/fonts/Inter-Regular.ttf";
import fontSemiBold from "../assets/fonts/Inter-SemiBold.ttf";
import fontBold from "../assets/fonts/Inter-Bold.ttf";
import { Variables } from "./CustomVariables";

export const GlobalStyle = createGlobalStyle`

    section{
        scroll-margin-top: 68px;
    }

    @font-face {
        font-family: inter;
        src: url(${fontLight});
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: inter;
        src: url(${fontRegular});
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }   

    @font-face {
        font-family: inter;
        src: url(${fontSemiBold});
        font-weight: 600;
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
        scroll-behavior: smooth;
        position: relative;
    }

    body:has(.modal){
        overflow: hidden;
    }

    img, picture, svg, video{
        display: block;
        max-width: 100%;
    }

    h2{
        font-size: clamp(2.8rem, 14vw, 3.3rem);
    }
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1.4rem;
    }
    p{
        font-size: 1.22rem;
    }
    a{
        font-size: 1.8rem;
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

    .fixedUpButton{
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100;
        background-color: ${Variables.red};
        cursor: pointer;
        padding: 15px 8px;
        border-radius: 20px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.806);   
        opacity: 0;
        transition: .2s all ease-in-out;
        pointer-events: none;

        img{
            height: 20px;
        }

        &.fixedUpShow{
            opacity: 100;
            pointer-events: all;
        }
    }

    @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){
        h2::after, .MakeLink::before{
            width: 200px;
        }
    }

`;

export const HorizontalPadding = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
`;

export const LinesFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MaxWidthCapsule = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
`;

export const VerticalPadding = styled.div`
  padding: 40px 0 80px 0;
`;
