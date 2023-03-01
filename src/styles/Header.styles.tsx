import styled from "styled-components";
import { MarginCapsule } from "./GlobalStyle";
import { Variables } from "./Colors";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 70px;
    position: relative;
    z-index: 1;

    .fixedDiv{
        position: fixed;
        width: 100%;
        height: 70px;

        .backgroundDiv{
            width: 100%;
            height: 70px;
            position: absolute;
            z-index: 1;
            background-color: ${Variables.black};
        }

        ${MarginCapsule}{
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            max-width: 1024px;
            margin: 0 auto;

            .logoStyle{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 58px;
                height: 80%;
                flex-shrink: 0;
                border-radius: 100%;
                background-color: ${Variables.red};
                position: relative;
                z-index: 1;
                transition: all .4s ease-in-out;
                color: ${Variables.white};
                font-weight: bold;
                font-size: 3.3em;
                text-decoration: none;

                &:hover{
                    color: ${Variables.red};
                    background-color: ${Variables.white};
                }
            }

            .navHeader{
                position: absolute;
                left: 0;
                width: 100%;
                height: fit-content;
                transform: translateY(-110px);
                transition: all .4s ease-in-out;

                &.active{
                    transform: translateY(calc(100% - clamp(2.5em, 15vw, 3em) - 57px));
                }

                ul{
                    display: inline-block;
                    text-align: center;
                    list-style: none;
                    width: 100%;
                    height: fit-content;
                    background-color: ${Variables.black};
                    padding: 10px 0;
                    position: relative;

                    li{
                        font-weight: bold;
                        margin: 4px 0;
                    
                        
                        a{
                            font-size: clamp(2.5em, 15vw, 3em);
                            text-decoration: none;
                            color: ${Variables.white};
                            display: block;
                            width: 100%;
                            transition: all .2s ease-in-out;

                            &:hover{
                                color: ${Variables.red};
                            }
                        }

                        &:nth-child(1)::after, &:nth-child(2)::after, &:nth-child(3)::after{
                            content: "";
                            display: block;
                            position: absolute;
                            margin: 0 auto;
                            left: 0;
                            right: 0;
                            width: 90%;
                            max-width: 500px;
                            height: 3px;
                            background-color: ${Variables.white};
                        }
                    }
                }
            }

            .hamburguerMenu{
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-left: auto;
                cursor: pointer;
                position: relative;
                z-index: 1;
                border: 0;
                background-color: transparent;

                span{
                    background-color: ${Variables.white};
                    height: 7px;
                    width: 54px;
                    display: block;
                    border-radius: 10px;
                    transition: all .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

                    &:nth-child(1){
                        width: 30px;
                    }

                    &:nth-child(3){
                        width: 40px;
                    }
                }

                &.active{

                    span{
                        background-color: ${Variables.red};

                        &:nth-child(1){
                            transform-origin: top;
                            transform: rotate(45deg) translateX(10px);
                        }
                        &:nth-child(2){
                            transform-origin: top;
                            transform: rotate(-45deg);
                        }
                        &:nth-child(3){
                            transform-origin: bottom right;
                            width: 30px;
                            transform: rotate(45deg) translate(12px,-11px);
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px){
        .fixedDiv{
            ${MarginCapsule}{

                .hamburguerMenu{
                    display: none;
                }

                .navHeader{
                    position: relative;
                    display: block;
                    z-index: 1;
                    transform: none;

                    ul{
                        display: flex;
                        padding: 0;
                        justify-content: center;
                        
                        li{ 
                            margin: 0;

                            &:nth-child(1)::after, &:nth-child(2)::after, &:nth-child(3)::after{
                                display: none;
                            }

                            a{
                                font-size: clamp(2.9em, 4vw, 3em);
                                padding: 0 20px;
                            }
                        }
                        
                    }
                }
            }
        }
        
    }
`;