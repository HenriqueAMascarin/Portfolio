import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../../styles/GlobalStyle";
import { WorksStyle } from "../../../styles/mainStyles/WorksStyle.styles";
import { experiencesArray } from "./experiencesData";

export default function ExperiencesSection() {
  return (
    <WorksStyle id="experiencias" className="principalSections">
      <VerticalPadding>

        <HorizontalPadding>
          <MaxWidthCapsule>
            <div>
              <h2>Experiências</h2>
              <div className="containerExperience">

                <div className="lineExperience"> </div>
                <div className="articlesContainer">
                {experiencesArray.map((experience, keyExperience) => {
                  return (
                    <article key={keyExperience} className="experienceArticle">

                      <span className="lineCircleExperience"></span>
                      <div className="infoContainer">
                        <h3><a href={experience.company.url} target="_blank" rel="noopener noreferrer"><span>{experience.position}</span> <span>{experience.company.name}</span></a></h3>
                        <p className="timeCompanyText">{experience.timeCompany}</p>
                        <p className="aboutText">{experience.about}</p>

                        <div className="techContainer">
                          {experience.technologies.map((Tech, keyTech) => {
                            return (
                              <Tech key={keyTech}/>
                            )
                          })}
                        </div>
                      </div>

                      <img src={experience.logo.src} alt={experience.logo.alt} className="logoImg" width="433px" height="233px"/>

                    </article>

                  )
                })}
                </div>

              </div>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>

      </VerticalPadding>
    </WorksStyle>


  );
}
