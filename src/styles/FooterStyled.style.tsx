import styled from "styled-components";
import { Variables } from "./Colors";
import { HorizontalPadding } from "./GlobalStyle";

export const FooterStyled = styled.footer`
    background-color: ${Variables.black};
    text-align: center;
    padding: 40px 0 10px;

    a{
        text-decoration: none;
        color: ${Variables.white};
        font-weight: bold;

        &:hover{
            color: ${Variables.red};
        }
    }

    ${HorizontalPadding}{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .MakeLink{

        &::before{
            width: 100%;
            height: 3px;
            background-color: ${Variables.white};
            max-width: 400px;
        }
        
        a{
            max-width: 250px;
            display: inline-block;
            margin: 0 auto;
        }
    }

    a path, a{transition: 0.2s ease-in-out;}
    

    .socialLinks{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        
        a:hover path{
            fill: ${Variables.red};
        }
    }
`;