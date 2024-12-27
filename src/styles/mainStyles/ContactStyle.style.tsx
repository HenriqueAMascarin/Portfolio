import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const ContactStyle = styled.section`
  text-align: center;
  background-color: ${Variables.white};

    h2 {
      color: ${Variables.black};
      margin: 0 auto;
      max-width: 500px;
    }

    img{
      width: 180px;
      height: auto;
      border-radius: 60%;
      filter: drop-shadow(${Variables.dropShadowImgs});
    }

    .containerContact{
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: center;
      

      p{
        color: ${Variables.black};
        font-weight: bold;
        max-width: 360px;
      }

      .blueText{
        color: ${Variables.linkedinColor};
        font-size: inherit;
      }

      path, a {
        transition: all ease-in-out .2s;
      }

      .btnLinkedin{
        background-color: ${Variables.linkedinColor};
        color: ${Variables.white};
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        font-size: 20px;
        font-weight: bold;

        width: 90%;
        max-width: 290px;
        margin: 30px auto 0;
        padding: 8px 20px;

        outline: 2px solid ${Variables.linkedinColor};
        outline-offset: -1px;
        

        svg{
          height: 24px;
        }

        &:hover{
          background-color: white;
          
        }
        &:hover svg path, &:hover{
          color: ${Variables.linkedinColor};
          fill: ${Variables.linkedinColor};
        }
      }
    }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {

    .containerContact{

      img{
        width: 200px;
      }

      h2 {
        max-width: max-content;
      }
    }
      
  }
`;
