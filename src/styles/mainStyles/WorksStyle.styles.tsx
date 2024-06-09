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
    

    .lineExperience{
      min-width: 3px;
      min-height: 100%;
      background-color: white;
      margin-right: 24px;
      margin-top: 9px;
    }
  
    .experienceArticle{
      margin-bottom: 40px;
      position: relative;

      p{
        font-weight: bold;
      }

      .timeCompanyText{
        font-size: 1.32rem;
        margin: 5px 0 10px;
      }

      .aboutText{
      
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
      }
      
      .techContainer{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        img{
          width: 35px;
          height: 35px;
        }
      }

      .considerationImg{
        border-radius: 30px;
        border: 2.5px solid ${Variables.red};
        margin-top: 40px;
      }
    }
  }
 

  @media screen and (min-width: ${Variables.mediaQueryWidth.desktop}) {
    h2 {
      margin-bottom: 60px;
    }
    
  }
`;
