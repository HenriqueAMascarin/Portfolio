import styled from "styled-components";
import { HorizontalPadding } from "../GlobalStyle";

export const HeaderThanks = styled.header`
    width: 100%;
    height: 70px;
    position: relative;
    z-index: 2;

    ${HorizontalPadding}{
        justify-content: center;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        max-width: 1024px;
        margin: 0 auto;
    }
`;