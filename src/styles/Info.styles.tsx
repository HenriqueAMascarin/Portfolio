import styled from "styled-components";
import { Variables } from "./Colors";

export const Info = styled.section`
    background-color: ${Variables.black};
    text-align: center;
`;

export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${Variables.white};
    padding: ${Variables.padding};

    img{
        width: 210px;
        height: 205.45px;
        border-radius: 140px;
    }

    h2::after{
        background-color: ${Variables.white};
    }

    p{
        font-size: 1.9em;
        margin-bottom: 40px;
        max-width: 360px;
    }

    a{
        color: ${Variables.black};
        background-color: ${Variables.white};
        font-size: 1.7em;
        text-decoration: none;
        border-radius: 10px;
        padding: 5px;
        font-weight: bold;
        margin-top: 30px;
        transition: 0.2s ease-in-out;
    }
    
    .infoResume{
        &:hover{
            color: ${Variables.white};
            background-color: ${Variables.red};
        }
    }
`;

export const InfoIcons = styled.div`
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
    
`;