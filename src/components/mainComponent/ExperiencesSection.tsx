import { HorizontalPadding, VerticalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";
import { WorksStyle } from "../../styles/mainStyles/WorksStyle.styles";
import translateI18n from "../../utils/translateI18n";
import SGBrImg from "/images/logoExperiencies/SGBr.webp";
import HenriqueMascarinImg from "/images/logoExperiencies/HenriqueMascarin.webp";
import { ExpoSvg, FigmaSvg, PiniaSvg, QuasarSvg, ReactNativeSvg, TailwindSvg, TypeScriptSvg, VueSvg } from "./techs/techsSvgs";
import enUsLanguageJson from "../../i18n/languages/en-us.json";
import { JSX } from "react";

type ExperiencesArrayType =  {
  keyNameInTranslateJson: string;
  position: string;
  company: {
      name: string;
      url: string;
  };
  timeCompany: string;
  about: string;
  challenges?: null | string[];
  technologies: (() => JSX.Element)[];
  logo: string;
}[]

export default function ExperiencesSection() {
  const experiencesArray: ExperiencesArrayType = [
    {
      keyNameInTranslateJson: "HenriqueMascarin",
      position: translateI18n("mainPage.experiencesSection.experiences.HenriqueMascarin.position"),
      company: { name: "Henrique Mascarin", url: "https://play.google.com/store/apps/dev?id=8770400649408057901" },
      timeCompany: translateI18n("mainPage.experiencesSection.experiences.HenriqueMascarin.timeCompany"),
      about: translateI18n("mainPage.experiencesSection.experiences.HenriqueMascarin.about"),
      technologies: [
        ReactNativeSvg,
        ExpoSvg,
        TypeScriptSvg,
        FigmaSvg,
      ],
      logo: HenriqueMascarinImg,
    },
    {
      keyNameInTranslateJson: "SGBrSistemas",
      position: translateI18n("mainPage.experiencesSection.experiences.SGBrSistemas.position"),
      company: { name: "SGBr® Sistemas", url: "https://sgbr.com.br/" },
      timeCompany: translateI18n("mainPage.experiencesSection.experiences.SGBrSistemas.timeCompany"),
      about: translateI18n("mainPage.experiencesSection.experiences.SGBrSistemas.about"),
      technologies: [
        QuasarSvg,
        VueSvg,
        PiniaSvg,
        TailwindSvg,
      ],
      logo: SGBrImg,
    },
  ];

  experiencesArray.forEach(experience => experience.challenges = Object.keys(enUsLanguageJson.translation.mainPage.experiencesSection[experience.keyNameInTranslateJson as keyof typeof enUsLanguageJson.translation.mainPage.experiencesSection.experiencesList].challengesList).map(
    (keyName) => translateI18n(`mainPage.experiencesSection.experiences.${experience.keyNameInTranslateJson}.challengesList.${keyName}`)
  ))


  return (
    <WorksStyle id="experiences" className="principalSections">
      <VerticalPadding>

        <HorizontalPadding>
          <MaxWidthCapsule>
            <div>
              <h2>{translateI18n("mainPage.experiencesSection.title")}</h2>
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

                      <img src={experience.logo} alt={`Logo ${experience.company.name}`} className="logoImg" width="433px" height="233px"/>

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
