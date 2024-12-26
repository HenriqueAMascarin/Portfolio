import styled from "styled-components";
import { Variables } from "../CustomVariables";

export const Experiences = styled.section`
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

    .articlesContainer{
      display: flex;
      flex-direction: column;
    }

    .experienceArticle{
      display: flex;
      flex-direction: column;
      margin-bottom: 80px;
      position: relative;

      .infoChallenges {
        margin-bottom: 20px;

        ul{
          display: flex;
          flex-direction: column;
          gap: 4px;

          li {
            list-style-position: inside;
          }
        }
      }

      h3, a{
        display: inline-block;
     
        span{
          display: block;
        }
      }

      .timeCompanyText{
        font-size: 1.28rem;
        margin: 5px 0 10px;
        font-weight: 600;
      }

      .aboutText{
        font-weight: 400;
        margin-bottom: 25px;
      }

      .aboutText, .infoChallenges li {
        text-align: justify;
      }

      .lineCircleExperience{
        position: absolute; 
        width: 20px;
        background-color: ${Variables.red};
        height: 20px;
        left: -35px;
        top: 9px;
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
        gap: 20px;
        margin-top: 25px;

        div{
          width: 40px;

          img{
            width: 30px;
            height: 30px;
          }

          p{
            font-size: .54rem;
          }

          img, p {
            filter:  drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.8)) drop-shadow(0px 1.4px 0px rgba(0, 0, 0, 1)) drop-shadow(0px 1.4px 0px rgba(0, 0, 0, 1));
          }
        }
      }

      .logoImg{
        border-radius: 15px;
        margin-top: 40px;
        height: auto;
        filter: drop-shadow(${Variables.dropShadowImgs});
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
          width: 450px;
          margin-right: 70px;
        }

        .logoImg{
          width: 360px;
          height: fit-content;
          margin-top: 30px;
          border-radius: 30px;
        }
      }
    }
   
  }
`;
