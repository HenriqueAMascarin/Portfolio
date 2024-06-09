import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { WorksStyle } from "../../../styles/mainStyles/WorksStyle.styles";
import { experiencesArray } from "./experiencesData";

export default function ExperiencesSection() {
  return (
    <WorksStyle id="experiencias">
      <VerticalPadding>

        <HorizontalPadding>
          <MaxWidthCapsule>
            <div>
              <h2>Experiências</h2>
              <div className="containerExperience">

                <div className="lineExperience"> </div>
                {experiencesArray.map((experience, keyExperience) => {
                  return (



                    <article key={keyExperience} className="experienceArticle">

                      <span className="lineCircleExperience"></span>
                      <a href={experience.company.url} target="_blank" rel="noopener noreferrer">{`${experience.position} - ${experience.company.name}`}</a>
                      <p className="timeCompanyText">{experience.timeCompany}</p>
                      <p className="aboutText">{experience.about}</p>

                      <div className="techContainer">
                        {experience.technologies.map((tech, keyTech) => {
                          return (
                            <img src={tech.img} width="60px" height="60px" alt={tech.alt} title={tech.alt} key={keyTech} />
                          )
                        })}
                      </div>

                      <img src={experience.consideration.src} alt={experience.consideration.alt} className="considerationImg" />

                    </article>

                  )
                })}

              </div>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>

      </VerticalPadding>
    </WorksStyle>


  );
}
