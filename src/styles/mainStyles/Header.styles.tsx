import styled from "styled-components";
import { HorizontalPadding } from "../GlobalStyle";
import { Variables } from "../CustomVariables";

export const FixedHeaderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: ${Variables.headerHeight};
`;

export const BackgroundHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${Variables.black};
`
export const LogoLink = styled.a`
  width: 58px;
  flex-shrink: 0;
  border-radius: 100%;
  text-decoration: none;

  circle,
  path {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    circle {
      fill: ${Variables.white};
    }
    path {
      fill: ${Variables.red};
    }
  }
`;

export const HeaderStyle = styled.header`
  --zIndexTop: 1;

  width: 100%;
  height: ${Variables.headerHeight};
  position: relative;
  z-index: 2;
  background-color: ${Variables.black};

  ${FixedHeaderDiv} {

    ${HorizontalPadding} {
      .flexHeader {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        .zIndexTop {
          z-index: var(--zIndexTop);
        }

        .navHeader {
          position: absolute;
          left: 0;
          width: 100%;
          height: fit-content;
          transform: translateY(-60%);
          transition: all 0.4s ease-in-out;
          background-color: ${Variables.black};

          &.active {
            transform: translateY(60%);
          }

          ul {
            display: inline-block;
            text-align: center;
            list-style: none;
            width: 100%;
            height: 100%;
            padding: 10px 0;
            position: relative;

            li {
              font-weight: bold;
              margin: 4px 0;

              a {
                text-decoration: none;
                color: ${Variables.white};
                display: block;
                width: 100%;
                padding: 10px 0;
                transition: all 0.2s ease-in-out;
                font-size: 1.31rem;

                &:hover {
                  color: ${Variables.red};
                }
              }

              &:not(:last-child)::after{
                content: "";
                display: block;
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                width: 90%;
                max-width: 500px;
                height: 3px;
                background-color: ${Variables.white};
              }
            }
          }
        }

        .hamburguerMenu {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-left: auto;
          cursor: pointer;
          position: relative;
          border: 0;
          background-color: transparent;

          span {
            background-color: ${Variables.white};
            height: 7px;
            width: 54px;
            display: block;
            border-radius: 10px;
            transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

            &:nth-child(1) {
              width: 30px;
            }

            &:nth-child(3) {
              width: 40px;
            }
          }

          &.active {
            span {
              background-color: ${Variables.red};

              &:nth-child(1) {
                transform-origin: top;
                transform: rotate(45deg) translateX(10px);
              }
              &:nth-child(2) {
                transform-origin: top;
                transform: rotate(-46deg);
              }
              &:nth-child(3) {
                transform-origin: bottom right;
                width: 30px;
                transform: rotate(45deg) translate(12px, -11px);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    ${FixedHeaderDiv} {
      ${HorizontalPadding} {
        .flexHeader {
          justify-content: center;

          .hamburguerMenu {
            display: none;
          }

          ${LogoLink} {
            z-index: calc(var(--zIndexTop) + 1);
            margin-right: 40px;
          }

          .navHeader{
            position: relative;
            display: block;
            transform: none;
            width: fit-content;
            z-index: var(--zIndexTop);

            &.active {
              transform: none;
            }

            ul {
              display: flex;
              padding: 0;
              justify-content: center;

              li {
                margin: 0;

                &:not(:last-child)::after {
                  display: none;
                }

                a {
                  padding: 0 20px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
