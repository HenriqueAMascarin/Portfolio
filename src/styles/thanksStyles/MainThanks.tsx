import styled from "styled-components";
import { Variables } from "../Colors";
import { VerticalPadding } from "../GlobalStyle";

export const MainThanks = styled.main`
    section{
        background-color: ${Variables.white};

        ${VerticalPadding}{
            padding: 90px 0;
        }

        .contentsMain{
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;

            h1{
                color: ${Variables.black};
                max-width: 600px;
                font-size: clamp(3.6em, 20vw, 6em);

                &::after{
                    content: "";
                    display: block;
                    position: relative;
                    left: 0;
                    right: 0;
                    width: 70%;
                    max-width: 300px;
                    height: 6px;
                    background-color: ${Variables.black};
                    margin: 10px auto 20px;
                }
            }

            p{  
                display: inline;
                background-color: ${Variables.black};
                font-size: clamp(1.8em, 9vw, 2em);
                max-width: 320px;
                font-weight: bolder;
                color: ${Variables.white};
            }

            a{
                background-color: ${Variables.red};
                font-weight: bolder;
                font-size: clamp(2.4em, 9vw, 2.5em);
                color: ${Variables.white};
                padding: 0 15px;
                border-radius: 20px;
                text-decoration: none;
                margin-top: 20px;
                transition: all .4s ease-in-out;
                outline: 2px solid transparent;

                &:hover{
                    background-color: ${Variables.white};
                    color: ${Variables.red};
                    outline: 2px solid ${Variables.red};
                }
            }
        }
    }
`;