import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const Info = styled.section`
  background-color: ${Variables.black};
  text-align: center;

  .infoDiv {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${Variables.white};
    text-align: start;

    .textInfo{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 30px;
      font-weight: 400,                                  
    }

    img {
      width: 210px;
      height: 199.25px;
      border-radius: 100%;
      margin-bottom: 14px;  
    }

    h2::after {
      background-color: ${Variables.white};
      margin-left: 0;
      width: 140px;
    }

    p {
      max-width: 500px;
      text-align: justify;
    }

    .infoAction {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: 30px;
    }

    a {
      color: ${Variables.black};
      background-color: ${Variables.white};
      font-size: 1.4rem;
      text-decoration: none;
      border-radius: 10px;
      padding: 5px;
      font-weight: bold;
      transition: 0.2s ease-in-out;
    }

    .infoIcons {
      display: flex;
      gap: 30px;

      a {
        display: block;
        background-color: transparent;

        &:hover svg path {
          fill: ${Variables.red};
        }

        svg {
          width: 50px;
          height: 48px;
          fill: ${Variables.red};

          path {
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .infoResume {
      display: inline-flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1.2rem;
      padding: 8px 14px;

      svg{
        display: inline-block;
        height: 28px;

        path{
          transition: 0.2s ease-in-out;
        }
      }
      

      &:hover {
        color: ${Variables.white};
        background-color: ${Variables.red};

        path{
         fill: ${Variables.white};
        }
      }
    }
  }

  @media screen and (min-width: 410px) {
    .infoDiv .infoAction {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    .infoDiv {
      flex-direction: row;
      justify-content: center;
      align-items: start;
      gap: 80px;
      position: relative;

      img {
        width: 330px;
        height: 313.11px;
        border-radius: 100px;
        margin: 0;
        position: sticky;
        top: calc(${Variables.headerHeight} + 10px) ;
      }
    }
  }
`;
