import styled from "styled-components";
import { Variables } from "../Colors";
import { HorizontalPadding } from "../GlobalStyle";

export const Projects = styled.section`
    background-color: ${Variables.black};

    h2{
        text-align: center;
        color: ${Variables.white};

        &::after{
            background-color: ${Variables.white};
        }
    }

    .cards{
        --gap: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap);
        width: 100%;

        ${HorizontalPadding}{
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;

            &:not(:last-child)::after{
                content: "";
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: calc(0px - (var(--gap) / 2) - 4px);
                width: 100%;
                height: 6px;
                background: linear-gradient(to right, ${Variables.white}, ${Variables.red});
            }

            .cardsDiv{
                background-color: ${ Variables.white };
                padding: 15px;
                border-radius: 10px;
                font-weight: bold;
                max-width: 370px;

                .cardsImg{
                    width: 100%;
                    height: auto;
                    box-shadow: 0 0 8px black;
                    border-radius: 10px;
                }

                .infoCard{
                    width: 100%;
                    
                    h3{
                        color: ${Variables.black};
                        font-size: clamp(1.8em, 8vw, 2.1em);
                        margin-top: 25px;
                    }
                    p{
                        color: ${ Variables.gray };
                        font-size: clamp(1.4em, 8vw, 1.6em);
                        margin: 5px 0 20px;
                    }

                    .cardsTech{
                        display: flex;
                        gap: 20px;
                        overflow-x: auto;
                            
                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }

                    .cardsLinks{
                        display: flex;
                        align-items: center;
                        margin-top: 20px;

                        a:not(:has(svg)){
                            text-decoration: none;
                            color: ${ Variables.white };
                            padding: 5px 10px;
                            background-color: ${ Variables.black };
                            font-size: 1.6em;
                            border-radius: 10px;
                            transition: 0.2s ease -in -out; 

                                &:hover{
                                color: ${ Variables.white };
                                background-color: ${ Variables.red };
                            }
                        }

                        a:has(svg){
                            margin-left: auto;

                            path{
                                fill: ${ Variables.black };
                                transition: 0.2s ease -in -out;
                            }

                            &:hover path{
                                fill: ${ Variables.red };
                            }
                        }

                    }
                }
                
            }
        }
    }

    @media screen and (min-width: ${Variables.mediaQueryWidth}){
        h2{
            margin-bottom: 60px;
        }

        .cards{
            --gap: 100px;
            ${HorizontalPadding}{
                .cardsDiv{
                    max-width: 1000px;
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    background-color: transparent;

                    .cardsImg{
                        width: 540px;
                        position: relative;
                        z-index: 1;
                    }

                    .infoCard{
                        display: flex;
                        flex-direction: column;
                        padding: 15px 15px 15px 25px;
                        background-color: ${Variables.white};
                        height: 96%;
                        margin: auto 0;
                        border-radius: 0 10px 10px 0; 

                        h3{
                            margin-top: 10px;
                        }

                        .cardsLinks{
                            margin-top: auto;
                        }
                    }
                }
            }
        }
    }
`;