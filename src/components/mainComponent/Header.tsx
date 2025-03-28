import { BackgroundHeader, FixedHeaderDiv, HeaderStyle, LogoLink } from "../../styles/mainStyles/Header.styles";
import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";
import { SyntheticEvent } from "react";
import translateI18n from "../../utils/translateI18n";
import LanguageChanger from "../../i18n/components/changer/LanguageChanger";

export const idsMainPageNavigation = {
  about: "#about",
  technologies: "#technologies",
  projects: "#projects",
  achievements: "#achievements",
  experiences: "#experiences",
  contact: "#contact"
}

export default function Header() {
  function hamburguerFunction() {
    const menu = document.querySelector(".hamburguerMenu");

    const nav = document.querySelector(".navHeader");

    menu?.classList.toggle("active");

    nav?.classList.toggle("active");

    menu?.setAttribute('aria-expanded', menu?.classList.contains('active').toString());
  }

  function onSection(element: SyntheticEvent) {
    const target = element.target as HTMLElement;

    if (target.nodeName == 'A') {
      hamburguerFunction();
    }
  }

  return (
    <HeaderStyle>
      <FixedHeaderDiv>
        <HorizontalPadding>
          <MaxWidthCapsule>
            <div className="flexHeader">
              <BackgroundHeader className="zIndexTop" />

              <div className="leftMenu">
                <LogoLink href="#" className="zIndexTop linksScroll">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Henrique logo</title>
                    <g clipPath="url(#clip0_213_8)">
                      <circle cx="30" cy="30" r="29" fill="#f93259" />
                      <path d="M14.1605 49V12.6364H21.8487V27.6399H37.456V12.6364H45.1264V49H37.456V33.9787H21.8487V49H14.1605Z" fill="#F2F2F2" />
                    </g>
                    <defs>
                      <clipPath id="clip0_213_8">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </LogoLink>

                <LanguageChanger />
              </div>

              <nav className="navHeader" id="navHeaderId" onClick={(element) => onSection(element)}>
                <ul>
                  <li>
                    <a href={idsMainPageNavigation.about} className="linksScroll">{translateI18n("general.header.about")}</a>
                  </li>
                  <li>
                    <a href={idsMainPageNavigation.technologies} className="linksScroll">{translateI18n("general.header.technologies")}</a>
                  </li>
                  <li>
                    <a href={idsMainPageNavigation.projects} className="linksScroll">{translateI18n("general.header.projects")}</a>
                  </li>
                  <li>
                    <a href={idsMainPageNavigation.achievements} className="linksScroll">{translateI18n("general.header.achievements")}</a>
                  </li>
                  <li>
                    <a href={idsMainPageNavigation.experiences} className="linksScroll">{translateI18n("general.header.experiences")}</a>
                  </li>
                  <li>
                    <a href={idsMainPageNavigation.contact} className="linksScroll">{translateI18n("general.header.contact")}</a>
                  </li>
                </ul>
              </nav>

              <button className="hamburguerMenu zIndexTop" title="Hamburguer Menu" onClick={() => hamburguerFunction()} aria-expanded="false" aria-label={translateI18n("general.header.hamburguerAlt")}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </MaxWidthCapsule>
        </HorizontalPadding>
      </FixedHeaderDiv>
    </HeaderStyle>
  );
}
