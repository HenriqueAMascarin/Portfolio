import { Projects } from "../../styles/mainStyles/ProjectsSection.styles";
import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";

import GodOfWar from "/images/projects/GodOfWar.webp";
import Ebooks from "/images/projects/Ebooks.webp";
import MediaTimer from "/images/projects/MediaTimer.webp";
import StarTShirts from "/images/projects/StarTShirts.webp";
import Portfolio from "/images/projects/Portfolio.webp";


import { ExpoSvg, FigmaSvg, ReduxSvg, ReactNativeSvg, TypeScriptSvg, VueSvg, PiniaSvg, TailwindSvg, htmlSvg, ReactSvg, SassSvg, StyledComponentsSvg } from "./techs/techsSvgs";
import translateI18n from "../../utils/translateI18n";
import enUsLanguageJson from "../../i18n/languages/en-us.json";
import { JSX } from "react";

export const projectsIds = { starTShirts: "projects/StarTShirts", mediaTimer: "projects/MediaTimer", ebooks: "projects/Ebooks", portfolio: "projects/Portfolio", godOfWar: "projects/GodOfWar" }

type ProjectsCardsType = {
  underDevelopment: boolean,
  id: string;
  img: string;
  keyNameInTranslateJson: string,
  title: string;
  about: string;
  challenges?: null | string[];
  technologies: (() => JSX.Element)[];
  googleLink?: string;
  figma: string;
  github: string;
  policy?: string;
  liveLink?: string;
}[];

export default function ProjectsSection() {

  let arrayCards: ProjectsCardsType = [
    {
      underDevelopment: true,
      id: projectsIds.starTShirts,
      img: StarTShirts,
      keyNameInTranslateJson: "StarTShirts",
      title: translateI18n("mainPage.projectsSection.projects.StarTShirts.title"),
      about: translateI18n("mainPage.projectsSection.projects.StarTShirts.about"),
      technologies: [
        ReactNativeSvg,
        TypeScriptSvg,
        ReduxSvg,
        FigmaSvg
      ],
      figma: "https://www.figma.com/design/mLpUBhQRfv9QpXPP34KxPt/star-t-shirts?node-id=0-1&t=HQmLZFHWEwZiQhgX-1",
      github: "https://github.com/HenriqueAMascarin/StarTShirts",
    },
    {
      underDevelopment: false,
      id: projectsIds.mediaTimer,
      img: MediaTimer,
      keyNameInTranslateJson: "MediaTimer",
      title: translateI18n("mainPage.projectsSection.projects.MediaTimer.title"),
      about: translateI18n("mainPage.projectsSection.projects.MediaTimer.about"),
      technologies: [
        ExpoSvg,
        ReactNativeSvg,
        TypeScriptSvg,
        ReduxSvg,
        FigmaSvg
      ],
      googleLink: "https://play.google.com/store/apps/details?id=com.henriqueamascarin.mediatimer",
      figma: "https://www.figma.com/design/XTRDCbSVe8lHtwkXK1Z5T7/Media-Timer?t=2WIleknFjgiShuOE-1",
      github: "https://github.com/HenriqueAMascarin/MediaTimer",
      policy: '/privacy-policy/media-timer'
    },
    {
      underDevelopment: false,
      id: projectsIds.ebooks,
      img: Ebooks,
      keyNameInTranslateJson: "Ebooks",
      title: translateI18n("mainPage.projectsSection.projects.Ebooks.title"),
      about: translateI18n("mainPage.projectsSection.projects.Ebooks.about"),
      technologies: [
        VueSvg,
        PiniaSvg,
        TailwindSvg,
        htmlSvg,
        FigmaSvg
      ],
      liveLink: "https://e-books-web.vercel.app",
      figma: "https://www.figma.com/design/GrGuOJvXLsZbMAGJY7DkIS/e-books?t=2WIleknFjgiShuOE-1",
      github: "https://github.com/HenriqueAMascarin/E-booksWeb",
    },
    {
      underDevelopment: false,
      id: projectsIds.portfolio,
      img: Portfolio,
      keyNameInTranslateJson: "Portfolio",
      title: translateI18n("mainPage.projectsSection.projects.Portfolio.title"),
      about: translateI18n("mainPage.projectsSection.projects.Portfolio.about"),
      technologies: [
        ReactSvg,
        TypeScriptSvg,
        StyledComponentsSvg,
        htmlSvg,
        FigmaSvg
      ],
      liveLink: "https://henriqueamascarin.vercel.app/",
      figma: "https://www.figma.com/design/PpIlwTZD08v6Z1ltXUyWNg/Portfolio?t=BO3o9X3cLLssikCk-1",
      github: "https://github.com/HenriqueAMascarin/Portfolio",
    },
    {
      underDevelopment: false,
      id: projectsIds.godOfWar,
      img: GodOfWar,
      keyNameInTranslateJson: "GodOfWar",
      title: translateI18n("mainPage.projectsSection.projects.GodOfWar.title"),
      about: translateI18n("mainPage.projectsSection.projects.GodOfWar.about"),
      technologies: [
        ReactSvg,
        TypeScriptSvg,
        SassSvg,
        htmlSvg,
        FigmaSvg
      ],
      liveLink: "https://godofwar-shop.vercel.app",
      figma: "https://www.figma.com/design/fFnrpY4zrUWgRxo06TTjs1/god-of-war?t=2WIleknFjgiShuOE-1",
      github: "https://github.com/HenriqueAMascarin/God-Of-War",
    },

  ];

  arrayCards.forEach(project => project.challenges = Object.keys(enUsLanguageJson.translation.mainPage.projectsSection.projects[project.keyNameInTranslateJson as keyof typeof enUsLanguageJson.translation.mainPage.projectsSection.projects].challengesList).map(
    (keyName) => translateI18n(`mainPage.projectsSection.projects.${project.keyNameInTranslateJson}.challengesList.${keyName}`)
  ))

  return (
    <Projects id="projects" className="principalSections">
      <VerticalPadding>
        <h2>{translateI18n("mainPage.projectsSection.title")}</h2>

        <div className="cards">
          {arrayCards.map((project, key) => {
            return (
              <HorizontalPadding key={key}>
                <MaxWidthCapsule>
                  <div className="cardsDiv" id={project.id}>
                    <div className="divImg">
                      <p className={`statusProject ${project.underDevelopment && "developmentStatusProject"}`}>{translateI18n(`mainPage.projectsSection.${project.underDevelopment ? 'underDevelopment' : 'completed'}`)}</p>
                      <img width="768" height="581" src={project.img} alt={`Review ${project.title}`} className="cardsImg" />
                    </div>
                    <div className="infoCard">
                      <h3>{project.title}</h3>
                      <p>{project.about}</p>

                      <div className="cardsChallenges">
                        <h4>{translateI18n('general.challenges')}: </h4>
                        <ul> {project.challenges?.map((challenge, keyChallenge) => { return (<li key={keyChallenge}>{challenge}</li>) })}</ul>
                      </div>

                      <div className="cardsTech">
                        {project.technologies.map((Icon, keyIcon) => (
                          <Icon key={keyIcon} />
                        ))}
                      </div>

                      <div className="cardsLinks">
                        {(project.liveLink || project.googleLink) && <a href={project.liveLink ?? project.googleLink} target="_blank">
                          {project.liveLink ? translateI18n("mainPage.projectsSection.seeTheWebSite") : translateI18n("mainPage.projectsSection.downloadTheApp")}
                        </a>}

                        <div className="cardsLinksRight">
                          {project.policy &&
                            <a href={project.policy} target="_blank" className="policyIcon">

                              <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>{`${translateI18n("mainPage.projectsSection.policy")} ${project.title}`}</title>
                                <g clipPath="url(#clip0_1215_28)">
                                  <path d="M4.25 42C3.08125 42 2.08073 41.5888 1.24844 40.7663C0.416146 39.9438 0 38.955 0 37.8V4.2C0 3.045 0.416146 2.05625 1.24844 1.23375C2.08073 0.41125 3.08125 0 4.25 0H20.4285C20.9548 0 21.4599 0.207478 21.8343 0.577443L33.4058 12.0128C33.786 12.3885 34 12.9008 34 13.4354V37.8C34 38.955 33.5839 39.9438 32.7516 40.7663C31.9193 41.5888 30.9188 42 29.75 42H4.25Z" fill="#212121" />
                                  <path d="M10.8333 33H22.1667C22.9694 33 23.6424 32.7365 24.1854 32.2094C24.7285 31.6823 25 31.0292 25 30.25V22C25 21.2208 24.7285 20.5677 24.1854 20.0406C23.6424 19.5135 22.9694 19.25 22.1667 19.25V16.5C22.1667 14.9875 21.6118 13.6927 20.5021 12.6156C19.3924 11.5385 18.0583 11 16.5 11C14.9417 11 13.6076 11.5385 12.4979 12.6156C11.3882 13.6927 10.8333 14.9875 10.8333 16.5V19.25C10.0306 19.25 9.35764 19.5135 8.81458 20.0406C8.27153 20.5677 8 21.2208 8 22V30.25C8 31.0292 8.27153 31.6823 8.81458 32.2094C9.35764 32.7365 10.0306 33 10.8333 33ZM13.6667 19.25V16.5C13.6667 15.7208 13.9382 15.0677 14.4812 14.5406C15.0243 14.0135 15.6972 13.75 16.5 13.75C17.3028 13.75 17.9757 14.0135 18.5188 14.5406C19.0618 15.0677 19.3333 15.7208 19.3333 16.5V19.25H13.6667Z" fill="#F2F2F2" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1215_28">
                                    <rect width="34" height="42" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>

                            </a>
                          }

                          {project.figma &&
                            <a href={project.figma} target="_blank" className="figmaIcon">
                              <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>{`Figma ${project.title}`}</title>
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 23C14 18.996 17.246 15.75 21.25 15.75C25.254 15.75 28.5 18.996 28.5 23C28.5 27.004 25.254 30.25 21.25 30.25C17.246 30.25 14 27.004 14 23Z" fill="#212121" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 36.5C0.5 32.496 3.74593 29.25 7.75 29.25H15V36.5C15 40.504 11.754 43.75 7.75 43.75C3.74593 43.75 0.5 40.504 0.5 36.5Z" fill="#212121" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 2.25V16.75H21.25C25.254 16.75 28.5 13.504 28.5 9.5C28.5 5.49593 25.254 2.25 21.25 2.25H14Z" fill="#212121" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 9.5C0.5 13.504 3.74593 16.75 7.75 16.75H15V2.25H7.75C3.74593 2.25 0.5 5.49593 0.5 9.5Z" fill="#212121" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 23C0.5 27.004 3.74593 30.25 7.75 30.25H15V15.75H7.75C3.74593 15.75 0.5 18.996 0.5 23Z" fill="#212121" />
                              </svg>
                            </a>}
                          <a href={project.github} target="_blank" className="githubIcon">
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <title>{`GitHub ${project.title}`}</title>
                              <path d="M13.67 32.0861C13.67 32.2509 13.4805 32.3828 13.2415 32.3828C12.9696 32.4075 12.7801 32.2757 12.7801 32.0861C12.7801 31.9213 12.9696 31.7895 13.2085 31.7895C13.4557 31.7648 13.67 31.8966 13.67 32.0861ZM11.1074 31.7153C11.0497 31.8801 11.2145 32.0697 11.4617 32.1191C11.6759 32.2015 11.9231 32.1191 11.9726 31.9543C12.022 31.7895 11.8654 31.6 11.6182 31.5258C11.404 31.4681 11.1651 31.5505 11.1074 31.7153ZM14.7494 31.5753C14.5104 31.6329 14.3456 31.7895 14.3704 31.979C14.3951 32.1438 14.6093 32.2509 14.8565 32.1933C15.0955 32.1356 15.2603 31.979 15.2356 31.8142C15.2108 31.6577 14.9884 31.5505 14.7494 31.5753ZM20.1713 0C8.74252 0 0 8.67661 0 20.1053C0 29.2434 5.75144 37.063 13.9666 39.8152C15.0213 40.0047 15.3921 39.3537 15.3921 38.8181C15.3921 38.3073 15.3674 35.4892 15.3674 33.7588C15.3674 33.7588 9.59947 34.9948 8.38821 31.3033C8.38821 31.3033 7.44886 28.9055 6.09752 28.2875C6.09752 28.2875 4.21058 26.9939 6.22936 27.0186C6.22936 27.0186 8.28109 27.1834 9.40996 29.1445C11.2145 32.3251 14.2385 31.4105 15.4168 30.8666C15.6064 29.5482 16.1419 28.6336 16.7352 28.0898C12.1291 27.5789 7.48182 26.9115 7.48182 18.9847C7.48182 16.7187 8.10805 15.5816 9.42644 14.1314C9.2122 13.5958 8.51181 11.3875 9.64067 8.53653C11.3628 8.00093 15.3262 10.7613 15.3262 10.7613C16.9742 10.2999 18.7458 10.0609 20.5008 10.0609C22.2559 10.0609 24.0275 10.2999 25.6755 10.7613C25.6755 10.7613 29.6389 7.99269 31.361 8.53653C32.4899 11.3958 31.7895 13.5958 31.5753 14.1314C32.8936 15.5899 33.7012 16.727 33.7012 18.9847C33.7012 26.9362 28.8479 27.5707 24.2418 28.0898C24.9998 28.7407 25.6425 29.9767 25.6425 31.9131C25.6425 34.6899 25.6178 38.126 25.6178 38.8016C25.6178 39.3372 25.9969 39.9882 27.0433 39.7987C35.2832 37.063 40.8699 29.2434 40.8699 20.1053C40.8699 8.67661 31.6 0 20.1713 0ZM8.00917 28.4194C7.90205 28.5018 7.92677 28.6913 8.06685 28.8479C8.19869 28.9797 8.38821 29.0374 8.49533 28.9303C8.60245 28.8479 8.57773 28.6583 8.43765 28.5018C8.30581 28.3699 8.11629 28.3123 8.00917 28.4194ZM7.11927 27.752C7.06159 27.8591 7.14398 27.9909 7.30878 28.0733C7.44062 28.1557 7.60542 28.131 7.6631 28.0156C7.72078 27.9085 7.63838 27.7767 7.47358 27.6943C7.30878 27.6448 7.17694 27.6696 7.11927 27.752ZM9.78899 30.6854C9.65715 30.7925 9.70659 31.0397 9.89611 31.1962C10.0856 31.3857 10.3246 31.4105 10.4317 31.2786C10.5388 31.1715 10.4894 30.9243 10.3246 30.7678C10.1433 30.5782 9.89611 30.5535 9.78899 30.6854ZM8.84964 29.4741C8.7178 29.5565 8.7178 29.7707 8.84964 29.9602C8.98148 30.1498 9.20396 30.2322 9.31108 30.1498C9.44291 30.0426 9.44291 29.8284 9.31108 29.6389C9.19572 29.4494 8.98148 29.367 8.84964 29.4741Z" fill="#212121" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </MaxWidthCapsule>
              </HorizontalPadding>
            );
          })}
        </div>
      </VerticalPadding>
    </Projects>
  );
}
