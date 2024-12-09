import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { HorizontalPadding } from "../GlobalStyle";

export const Projects = styled.section`
  background-color: ${Variables.black};

  h2 {
    text-align: center;
    color: ${Variables.white};

    &::after {
      background-color: ${Variables.white};
    }
  }

  .cards {
    --gap: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap);
    width: 100%;

    ${HorizontalPadding} {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;

      &:not(:last-child)::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(0px - (var(--gap) / 2) - 4px);
        width: 100%;
        height: 6px;
        background: linear-gradient(to right, ${Variables.white}, ${Variables.red});
      }

      .cardsDiv {
        background-color: ${Variables.white};
        padding: 15px;
        border-radius: 10px;
        font-weight: bold;
        max-width: 400px;
        scroll-margin-top: 100px;

        .cardsImg {
          width: 100%;
          height: auto;
          box-shadow: 0 0 8px black;
          border-radius: 10px;
        }

        .infoCard {
          width: 100%;

          h3 {
            color: ${Variables.black};
            margin-top: 25px;
          }

          > p {
            color: ${Variables.gray};
            margin: 5px 0 20px;
          }

          .cardsTech {
            display: flex;
            gap: 25px;
            flex-grow: 1;
            overflow-x: auto;

            div{
              width: 30px;

              img{
                max-height: 30px;
              }

              p{
                font-size: 0.55rem;
              }
            }
          }

          .cardsLinks {

            a, path{
              transition: all ease-in-out .2s;
            }

            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 70px;

            a:not(:has(svg)) {
              text-decoration: none;
              color: ${Variables.white};
              padding: 5px 10px;
              background-color: ${Variables.black};
              font-size: 1.2rem;
              border-radius: 10px;
              transition: 0.2s ease-in-out;

              &:hover {
                color: ${Variables.white};
                background-color: ${Variables.red};
              }
            }

            a:nth-of-type(2){
              margin-left: auto;
            }

            .figmaIcon, .githubIcon, .policyIcon{

              path {
                fill: ${Variables.black};
                transition: 0.2s ease -in -out;
              }

              svg{
                height: 38px;
              }

              path {
                transition: 0.2s ease -in -out;
              }

              &:hover path {
                fill: ${Variables.red};
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    h2 {
      margin-bottom: 60px;
    }

    .cards {
      --gap: 120px;
      
      ${HorizontalPadding} {
        .cardsDiv {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          max-width: 100%;
          height: 370px;
          background-color: transparent;

          .cardsImg {
            width: 500px;
            height: 100%;
            position: relative;
            z-index: 1;
          }

          .infoCard {
            display: flex;
            flex-direction: column;
            padding: 22px 28px 22px 28px;
            background-color: ${Variables.white};
            height: 96%;
            border-radius: 0 10px 10px 0;

            h3{
              margin: 0;
            }

            .cardsLinks {
              margin-top: auto;
            }
          }
        }
      }
    }
  }
`;
