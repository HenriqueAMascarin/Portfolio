import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import fontLight from "../assets/fonts/Inter-Light.ttf";
import fontBold from "../assets/fonts/Inter-Bold.ttf";
import { Variables } from "./Colors";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: inter;
        src: url(${fontLight});
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: inter;
        src: url(${fontBold});
        font-weight: bold;
        font-style: normal;
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
    body{
        min-height: 100vh;
    }

    img, picture, svg, video{
        display: block;
        max-width: 100%;
    }

    h1{
        font-size: clamp(3.6em, 20vw, 8em);
    }
    h2{
        font-size: clamp(2.6em, 15vw, 4em);
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

    @media screen and (min-width: ${Variables.mediaQueryWidth}){
        h2{
            font-size: 5em;
        }

        h2::after, .MakeLink::before{
            width: 200px;
        }
    }

`;

export const HorizontalPadding = styled.div`
    padding: 0 10px;
`;

export const VerticalPadding = styled.div`
    padding: 70px 0;

    @media screen and (min-width: ${Variables.mediaQueryWidth}){
        padding: 120px 0;
    }
`;