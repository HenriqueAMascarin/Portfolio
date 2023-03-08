import styled from "styled-components";
import { Variables } from "../Colors";

export const Info = styled.section`
    background-color: ${Variables.black};
    text-align: center;

    .infoDiv{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: ${Variables.white};

        img{
            width: 210px;
            height: 199.25px;
            border-radius: 100%;
        }

        h2::after{
            background-color: ${Variables.white};
        }

        p{
            font-size: clamp(1.6em, 7vw, 1.9em);
            margin-bottom: 40px;
            max-width: 360px;
        }

        .infoAction{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 30px;
        }

        a{
            color: ${Variables.black};
            background-color: ${Variables.white};
            font-size: 1.7em;
            text-decoration: none;
            border-radius: 10px;
            padding: 5px;
            font-weight: bold;
            transition: 0.2s ease-in-out;
        }

        .infoIcons{
            display: flex;
            gap: 40px;

            a{
                display: block;
                background-color: transparent;

                &:hover svg path{
                    fill: ${Variables.red};
                }
                
                svg{
                    width: 50px;
                    height: 48px;
                    fill: ${Variables.red};
                    
                    path{
                        transition: 0.2s ease-in-out;
                    }
                }
            }
        }
        
        .infoResume{
            &:hover{
                color: ${Variables.white};
                background-color: ${Variables.red};
            }
        }

    }

    @media screen and (min-width: ${Variables.mediaQueryWidth}){
        .infoDiv{
            flex-direction: row;
            justify-content: center;
            gap: 80px;
            
            img{
                width: 330px;
                height: 313.11px;
                border-radius: 100px;
            }

            .infoAction{
                flex-direction: row;
                gap: 30px;
            }
        }
    }
`;