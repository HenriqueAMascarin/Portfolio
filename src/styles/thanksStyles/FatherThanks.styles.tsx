import styled from "styled-components"
import { MainThanks } from "./MainThanks";

export const FatherThanks = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${MainThanks}{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        section{
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-grow: 1;
        }
    }
`;