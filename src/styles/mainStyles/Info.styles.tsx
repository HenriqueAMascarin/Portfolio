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
    }

    h2::after {
      background-color: ${Variables.white};
    }

    p {
      max-width: 500px;
    }

    .infoAction {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
    }

    a {
      color: ${Variables.black};
      background-color: ${Variables.white};
      font-size: 1.7rem;
      text-decoration: none;
      border-radius: 10px;
      padding: 5px;
      font-weight: bold;
      transition: 0.2s ease-in-out;
    }

    .infoIcons {
      display: flex;
      gap: 40px;

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
      &:hover {
        color: ${Variables.white};
        background-color: ${Variables.red};
      }
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
        position: sticky;
        top: calc(${Variables.headerHeight} + 10px) ;
      }

      .infoAction {
        flex-direction: row;
        gap: 30px;
      }
    }
  }
`;
