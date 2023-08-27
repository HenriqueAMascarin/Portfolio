import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { LinesFlex } from "../GlobalStyle";

export const WorkStyle = styled.section`
  text-align: center;
  background-color: ${Variables.white};

  ${LinesFlex} {

    h2 {
      color: ${Variables.black};
      margin: 0 auto;
      max-width: 500px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 400px;

      .formNameEmailDiv {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      button {
        background-color: ${Variables.black};
        color: ${Variables.white};
        font-size: 1.8rem;
        font-weight: bold;
        padding: 0 10px;
        height: 49px;
        margin-left: auto;
        border: 0;
        border-radius: 10px;
        transition: 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          color: ${Variables.white};
          background-color: ${Variables.red};
        }
      }

      input {
        padding: 22px 10px;
      }

      textarea {
        padding: 14px 10px;
        resize: none;
        height: 250px;
      }

      input,
      textarea {
        width: 100%;
        border: 0;
        background-color: ${Variables.black};
        border-radius: 10px;
        color: ${Variables.white};
        font-weight: bold;
        font-size: 1.2rem;

        &::placeholder {
          color: ${Variables.white};
        }
      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    ${LinesFlex}{

      form {
        display: flex;
        max-width: 600px;

        .formNameEmailDiv {
          flex-direction: row;
        }
      }

      h2 {
        position: relative;
        margin: 0;
        max-width: 300px;

        &::after {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          left: 110%;
          width: 6px;
          height: 200px;
          display: block;
        }
      }
    }
  }
`;
