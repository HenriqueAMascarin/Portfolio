import styled from "styled-components"
import { Variables } from "./Colors";
import { HorizontalPadding } from "./GlobalStyle";

export const TechSection = styled.section`
    background-color: ${Variables.white};
    color: ${Variables.black};
    text-align: center;
    
    ${HorizontalPadding} .techIcons{
        display: grid;
        gap: 20px 20px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
        justify-content: center;
        max-width: 500px;
        margin: 0 auto;

        img{
            width: 140px;
            justify-self: center;
            align-self: center;
        }
    }

    @media screen and (min-width: ${Variables.mediaQueryWidth}){
        ${HorizontalPadding}{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            h2{
                max-width: 260px;
                overflow-wrap: break-word;
                position: relative;

                &::after{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    left: 280px;
                    width: 6px;
                    height: 200px;
                    display: block;
                }
            }
            
            .techIcons{
                margin: 0 0 0 80px;
            }
        }
    }
`;