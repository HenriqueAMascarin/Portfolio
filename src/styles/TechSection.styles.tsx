import styled from "styled-components"
import { Variables } from "./Colors";
import { MarginCapsule } from "./GlobalStyle";

export const TechSection = styled.section`
    background-color: ${Variables.white};
    color: ${Variables.black};
    text-align: center;
    padding: ${Variables.padding};

    h2:after{
        background-color: ${Variables.black};
    }

    ${MarginCapsule} div{
        display: grid;
        gap: 20px 20px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 140px));
        justify-content: center;
        max-width: 540px;
        margin: 0 auto;

        img{
            width: 140px;
            justify-self: center;
            align-self: center;
        }
    }
`;