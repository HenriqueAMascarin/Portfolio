import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { HorizontalPadding } from "../GlobalStyle";

export const WorkStyle = styled.section`
  text-align: center;
  background-color: ${Variables.white};

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
    margin: 40px auto 0;

    button {
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
      font-size: 1.4em;

      &::placeholder {
        color: ${Variables.white};
      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth}) {
    ${HorizontalPadding} {
      display: flex;
      align-items: center;
      justify-content: center;

      form {
        margin: 0 0 0 100px;
        display: flex;
        flex-flow: row wrap;
        max-width: 700px;

        input {
          &[name="name"],
          &[name="email"] {
            width: 48%;
          }
        }
      }

      h2 {
        position: relative;
        margin: 0;
        max-width: 360px;

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
