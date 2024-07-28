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
    padding: 35px 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    

    p, a {
      word-break: break-all;
      text-align: justify;
    }
   
    .policyTitleDiv{
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      img{
        border-radius: 40px;
        align-self: center;
        width: 184px;
        margin-bottom: 24px;
      }

      a{
        color: ${Variables.mediaTimer};
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
      margin-bottom: 20px;
      border-radius: 20px;

      .policyTableHeader > p, .policyTableBody > div, .policyTableBody > div > p{
        outline: 1px solid ${Variables.white};
      }
    }
  
  }
`;
