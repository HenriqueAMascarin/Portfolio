import styled from "styled-components";
import { Variables } from "../../../styles/CustomVariables";

export const ButtonChangerStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 54px;
  border-radius: 30px;
  border: 0;
  outline: 2px solid ${Variables.black};
  outline-offset: -1px;
  overflow: hidden;
  width: 100%;
  min-width: 76px;
  max-width: 76px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    outline: 2px solid ${Variables.white};
  }

  img {
    object-fit: scale-down;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
`;
