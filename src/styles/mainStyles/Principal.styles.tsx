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

    p,
    h1 {
      text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    }

    p {
      font-size: clamp(2.1em, 7vw, 2.8em);
      color: ${Variables.black};

      span {
        color: ${Variables.red};
      }
    }

    h1 {
      color: ${Variables.red};

      span {
        display: block;
        color: ${Variables.black};
      }
    }
  }
`;
