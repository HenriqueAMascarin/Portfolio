import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const SectionPrincipal = styled.section`
  background-color: ${Variables.white};

  .principalDiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    font-weight: bold;
    padding: 60px 0 0;

    @keyframes arrow {
      0%,
      100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(5px);
      }
    }

    a {
      margin: 84px 0 10px;

      svg {
        width: 50px;
        animation: 1.4s ease-in-out infinite arrow;
      }
    }



      .titleJob,
      h1 {
        text-shadow: 0px 1.5px 0px #FFFFFF, 0px -1.5px 0px #FFFFFF, 1.5px 0px 0px #FFFFFF, -1.5px 0px 0px #FFFFFF,
        0px -1.5px 2px rgba(0, 0, 0, 0.5), 0px 1.5px 2px rgba(0, 0, 0, 0.5), -1.5px 0px 2px rgba(0, 0, 0, 0.5), 1.5px 0px 2px rgba(0, 0, 0, 0.5);
      }

      h1 {
        color: ${Variables.red};
        font-size: clamp(3.7rem, 20vw, 8.6rem);

        > span {
          display: block;
          color: ${Variables.black};
        }
      }

      .titleJob {
        font-size: clamp(1.7rem, 7vw, 3rem);
        padding: 0 10px;
        color: ${Variables.black};

        span {
          color: ${Variables.red};
        }
      }
    
  }
`;
