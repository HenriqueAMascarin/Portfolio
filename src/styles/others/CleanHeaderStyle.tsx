import { HorizontalPadding } from "../GlobalStyle";
import { LogoLink } from "../mainStyles/Header.styles";
import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const CleanHeaderStyle = styled.header`
  width: 100%;
  height: 70px;
  position: relative;
  z-index: 2;
  background-color: ${Variables.black};

  ${HorizontalPadding} {
    .flexThanksHeader {
      justify-content: center;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;

      ${LogoLink} {
        z-index: 1;
      }
    }
  }
`;
