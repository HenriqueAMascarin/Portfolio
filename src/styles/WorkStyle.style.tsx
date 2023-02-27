import styled from "styled-components";
import { Variables } from "./Colors";

export const WorkStyle = styled.section`
    text-align: center;
    padding: ${Variables.padding};
    background-color: ${Variables.white};

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 400px;
        margin: 40px auto 0;

        button{
            background-color: ${Variables.black};
            color: ${Variables.white};
            font-size: 2em;
            font-weight: bold;
            padding: 0 10px;
            height: 49px;
            margin-left: auto;
            border: 0;
            border-radius: 10px;
            transition: 0.2s ease-in-out; 
            cursor: pointer;

            &:hover{
                color: ${Variables.white};
                background-color: ${Variables.red};
            }
        }

        input{
            padding: 22px 10px;
        }

        textarea{
            padding: 14px 10px;
            resize: none;
            height: 250px;
        }

        input, textarea{
            width: 100%;
            border: 0;
            background-color: ${Variables.black};
            border-radius: 10px;
            color: ${Variables.white};
            font-weight: bold;
            font-size: 1.4em;
        
            &::placeholder{
                color: ${Variables.white};
            }

            /* &[name="name"], &[name="email"]{
                width: 45%;
            } DESKTOP*/
        }

        
    }

    h2{
        color: ${Variables.black};
        margin: 0 auto;
        max-width: 500px;
    }
`;