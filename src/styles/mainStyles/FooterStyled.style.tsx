import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const FooterStyled = styled.footer`
  background-color: ${Variables.black};
  text-align: center;
  padding: 40px 0 10px;

  .flexFooter{
    display: flex;
    flex-direction: column;
    gap: 30px;

    .socialLinks {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      a:hover path {
        fill: ${Variables.red};
      }
      a{
        width: 48px;
        height: 48px;
      }
    }

    a {
      text-decoration: none;
      color: ${Variables.white};
      font-weight: bold;

      &:hover {
        color: ${Variables.red};
      }
    }

    .MakeLink {
      &::before {
        width: 100%;
        height: 3px;
        background-color: ${Variables.white};
        max-width: 400px;
      }

      a {
        max-width: 250px;
        font-size: 1.1rem;
        display: inline-block;
        margin: 0 auto;
      }
    }

    a path,
    a {
      transition: 0.2s ease-in-out;
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    padding: 20px 0;

    .flexFooter {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;

      .socialLinks {
        margin-left: 40px;
      }

      .MakeLink {
        max-width: 220px;
        position: relative;
        display: flex;
        align-items: center;

        &::before {
          position: relative;
          margin: auto 0;
          left: calc(100% + 30px);
          width: 4px;
          height: 100px;
        }
      }
    }
  }
`;
