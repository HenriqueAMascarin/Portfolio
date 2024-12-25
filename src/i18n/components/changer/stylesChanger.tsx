import styled from "styled-components";

export const ButtonChangerStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 55px;
  border-radius: 20px;
  border: 0;
  overflow: hidden;
  width: 100%;
  max-width: 80px;

  img {
    object-fit: scale-down;
    min-height: 100%;
  }
`;
