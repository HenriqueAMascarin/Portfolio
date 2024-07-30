import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const PolicyStyleMediaTimer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .policyCard{
    background-color: ${Variables.black};
    color: ${Variables.white};
    border-radius: 20px;
    padding: 35px 20px 55px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;

    a, p {
      text-align: justify;
    }

    a{
      transition: all .3s ease-in-out;
    }

    a:hover{
      color: #f16682 !important;
    }

    a, .policyTableBody > div > div:nth-child(1) p{
      word-break: break-all;
    }
   
    .policyTitleDiv{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 15px;
      gap: 10px 20px;
      align-items: center;
      justify-content: start;

      img{
        border-radius: 40px;
        width: 184px;
      }

      div{
        a{
          color: ${Variables.mediaTimer};
          font-size: 1.3rem;
        }
      }
    }

    .policyWelcome, .policyData{
      margin-bottom: 30px; 
      
      p{
        margin: 10px 0;
      }
    }

    .policyData a, .policyContact a{
      color: ${Variables.red};
      font-size: inherit;
    }

    h4{
      text-decoration: underline;
      margin-bottom: 15px;
    }

    .policyTable{
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid ${Variables.white};


      .policyTableHeader, .policyTableBody > div:not(:last-child){
        border-bottom: 2px solid ${Variables.white};
      }

      .policyTableHeader div:not(:last-child), .policyTableBody > div > div:not(:last-child){
        border-bottom: 2px solid ${Variables.white};
      }

      p{
        width: fit-content;
      }

      .policyTableBody > div:nth-child(even) > div{
        background-color: ${Variables.gray};
      }

      .policyTableBody > div:nth-child(odd) > div, .policyTableHeader div{
        background-color: ${Variables.black};
      }

      .policyTableHeader div:nth-child(odd) p, .policyTableBody > div > div:nth-child(1) p{
        background-color: ${Variables.red};
        border-radius: 10px;
        padding: 2px 8px;
      }

      .policyTableHeader > div, .policyTableBody > div > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }

      .policyTableBody > div, .policyTableBody > div > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .policyTableHeader, .policyTableBody{
        display: grid !important;
      }

      .policyTableBody > div > div, .policyTableHeader > div {
        padding: 30px;
        text-align: center;
        font-weight: bold;
        width: 100%;
        height: 100%;
      }

    }
  }

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}){

    .policyTableBody{
      & > div {
        flex-direction: row !important;
      }
    }

    .policyTableHeader{
      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: repeat(1, 100px) !important;
    }

    .policyTableHeader div:not(:last-child), .policyTableBody > div > div:not(:last-child){
      border-right: 2px solid ${Variables.white} !important;
      border-bottom: 0 !important;
    }
  }
`;
