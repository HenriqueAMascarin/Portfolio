import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const FooterStyled = styled.footer`
  background-color: ${Variables.black};
  text-align: center;
  padding: 40px 0 30px;
  margin-top: auto;

  .flexFooter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .lineFooter{
      width: 100%;
      height: 3px;
      background-color: ${Variables.white};
      max-width: 300px;
    }

    .socialLinks {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      a:hover path {
        fill: ${Variables.red};
      }
      svg{
        width: 42px;
        height: 42px;
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

    .createBy {
        max-width: 250px;
        font-size: 1.1rem;
        display: inline-block;

    }

    a path,
    a {
      transition: 0.2s ease-in-out;
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    padding: 20px 0;

    .flexFooter {
      flex-direction: row;
      position: relative;
      gap: 24px;

      .socialLinks{
        width: 220px;
        padding-left: 10px;
        justify-content: start;
      }

     
      .createBy {
        width: 220px;
        display: flex;
        align-items: center;
        order: -2;
      }

      .lineFooter{
        order: -1;
        width: 3px;
        height: 100px;
      }
    }
  }
`;
