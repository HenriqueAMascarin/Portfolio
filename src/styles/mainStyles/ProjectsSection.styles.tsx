import styled from "styled-components";
import { Variables } from "../CustomVariables";
import { HorizontalPadding, MaxWidthCapsule } from "../GlobalStyle";

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

      &:not(:last-child)::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: calc(0px - (var(--gap) / 2) - 4px);
        width: 100%;
        height: 6px;
        background: linear-gradient(
          to right,
          ${Variables.white},
          ${Variables.red}
        );
      }

      .cardsDiv {
        padding: 15px;
        border-radius: 10px;
        font-weight: bold;
        max-width: 400px;
        scroll-margin-top: 100px;
        position: relative;
        z-index: 0;
        background-color: ${Variables.white};
        margin: 0 auto;

        .divImg,
        .cardsImg {
          border-radius: 10px;
        }

        .divImg {
          width: 100%;
          height: auto;

          .statusProject {
            position: absolute;
            z-index: 2;
            top: 10px;
            left: 10px;
            padding: 2px 10px;
            border-radius: 14px;
            font-size: 16px;
            background-color: ${Variables.green};
            color: ${Variables.white};

            &.developmentStatusProject {
              background-color: ${Variables.orange};
            }
          }

          .statusProject,
          .cardsImg {
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
          }

          .cardsImg {
            width: 100%;
            height: 100%;
          }
        }

        .infoCard {
          width: 100%;

          h3 {
            margin-top: 25px;
          }

          h3,
          h4 {
            color: ${Variables.black};
          }

          > p {
            margin: 5px 0 20px;
          }

          > p,
          .cardsChallenges li {
            color: ${Variables.gray};
            text-align: justify;
          }

          .cardsChallenges {
            margin-bottom: 20px;

            ul {
              display: flex;
              flex-direction: column;
              gap: 4px;

              li {
                list-style-position: inside;
              }
            }
          }

          .cardsTech {
            display: flex;
            gap: 20px 34px;
            flex-grow: 1;
            flex-wrap: wrap;
            margin-bottom: 50px;

            div {
              width: 30px;
              padding: 1px;

              img {
                max-height: 30px;
              }

              p {
                font-size: 0.55rem;
              }
            }
          }

          .cardsLinks {
            a,
            path {
              transition: all ease-in-out 0.2s;
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

            .cardsLinksRight {
              display: flex;
              margin-left: auto;
              gap: 15px;
              align-items: center;
            }

            .figmaIcon,
            .githubIcon,
            .policyIcon {
              path {
                fill: ${Variables.black};
                transition: 0.2s ease -in -out;
              }

              svg {
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
          align-items: start;
          max-width: 100%;
          padding: 25px;
          background-color: ${Variables.white};
          gap: 35px;

          .divImg {
            .statusProject {
              top: 15px;
              left: 15px;
            }

            .cardsImg {
              width: 500px;
              height: 100%;
              position: relative;
              z-index: 1;
            }
          }

          .infoCard {
            display: flex;
            flex-direction: column;
            height: 96%;
            border-radius: 0 10px 10px 0;

            h3 {
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
