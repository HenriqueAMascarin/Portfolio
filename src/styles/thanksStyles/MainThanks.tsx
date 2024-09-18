import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { VerticalPadding } from "../GlobalStyle";

export const MainThanks = styled.main`
  section {
    background-color: ${Variables.white};

    ${VerticalPadding} {
      padding: 90px 0;
    }

    .contentsMain {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      h1 {
        color: ${Variables.black};
        max-width: 400px;
        font-size: 4.6rem;

        &::after {
          content: "";
          display: block;
          position: relative;
          left: 0;
          right: 0;
          width: 70%;
          max-width: 300px;
          height: 6px;
          background-color: ${Variables.black};
          margin: 10px auto 20px;
        }
      }

       p:nth-of-type(1) {
        display: inline;
        background-color: ${Variables.black};
        font-size: 1.7rem;
        max-width: 300px;
        font-weight: bolder;
        color: ${Variables.white};
      }

      p:nth-of-type(2) {
        display: inline;
        margin-top: 10px;
        font-size: 1rem;

        a{
          color: ${Variables.red};
          font-size: inherit;
          font-weight: 600;

          transition: .3s all ease-in-out;

          &:hover{
            color: #ff839c;
          }
        }
      }
    }
  }
`;
