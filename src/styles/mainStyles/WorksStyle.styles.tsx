import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const WorksStyle = styled.section`
  background-color: ${Variables.black};
  color: ${Variables.white}; 


  h2 {
    text-align: center;
    margin-bottom: 60px;

    &::after {
      background-color: ${Variables.white};
    }
  }
  
  .containerExperience{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 400px;

    .lineExperience{
      min-width: 3px;
      min-height: 100%;
      background-color: white;
      margin-right: 24px;
      margin-top: 9px;
    }
  
    .experienceArticle{
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      position: relative;

      .timeCompanyText{
        font-size: 1.31rem;
        margin: 5px 0 10px;
        font-weight: 600;
      }

      .aboutText{
        font-weight: 400;
      }

      .lineCircleExperience{
        position: absolute; 
        width: 20px;
        background-color: ${Variables.red};
        height: 20px;
        left: -35px;
        top: 8px;
        border-radius: 100%;
      }



        a{
          color: ${Variables.red};
          font-weight: bold;
          font-size: 1.5rem;
          transition: all .15s ease-in-out;

          &:hover{
            color: #ff4268;
          }
        }

      
      
      .techContainer{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 25px;

        div{
          width: 40px;

          img{
            width: 38px;
            height: 38px;
          }
          p{
            font-size: .64rem;
          }

          img, p {
            filter: drop-shadow(0 1px 0px rgba(0, 0, 0, 0.5)) drop-shadow(0px 1.4px 0px rgba(0, 0, 0, 0.5)) drop-shadow(0px 1px 0px rgb(255, 255, 255));
          }
        }
      }

      .considerationImg{
        border-radius: 15px;
        margin-top: 40px;
        height: auto;
      }
    }
  }
 

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    h2 {
      margin-bottom: 60px;
    }
    
    .containerExperience{
      max-width: fit-content;

      .experienceArticle{
        margin-bottom: 90px;
        flex-direction: row;

        .infoContainer{
          width: 400px;
          margin-right: 70px;
        }

        .considerationImg{
          width: 360px;
          height: fit-content;
          margin-top: 30px;
        
        }
      }
    }
   
  }
`;
