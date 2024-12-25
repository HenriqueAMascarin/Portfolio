import Footer from "./Footer";
import Header from "./Header";
import InfoSection from "./InfoSection";
import PrincipalSection from "./PrincipalSection";
import ProjectsSection from "./ProjectsSection";
import Technologies from "./techs/Technologies";
import ContactSection from "./ContactSection";
import WorksSection from "./experiences/ExperiencesSection";
import AchievementsSection from "./achievements/AchievementsSection";
import { useEffect, useRef, useState } from "react";
import translateI18n from "../../utils/translateI18n";

export default function Main() {
  let [showScrollBtn, changeShowScrollBtn] = useState(false);
  let headerLinks = useRef<NodeListOf<Element> | null>(null);
  let sections = useRef<NodeListOf<Element> | null>(null);

  const scrollPosSections = useRef<{ scrollPosYTop: number, scrollPosYBottom: number, id: string }[]>([]);

  function scrollActiveSection() {

    const scrollY = window.scrollY;

    // buttonScrollTop
    if (showScrollBtn == false && scrollY >= 1000) {
      changeShowScrollBtn(true);
    } else if (showScrollBtn && scrollY < 1000) {
      changeShowScrollBtn(false);
    }

    scrollPosSections.current?.forEach((section) => {
      if (scrollY >= section.scrollPosYTop && scrollY <= section.scrollPosYBottom) {
        headerLinks.current?.forEach((link) => {

          if (link.getAttribute('href') == section.id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        })
      }
    })

  }

  useEffect(() => {
    headerLinks.current = document.querySelectorAll('.linksScroll');

    sections.current = document.querySelectorAll('.principalSections');

    sections.current?.forEach((section) => {
      if (section instanceof HTMLElement) {
        scrollPosSections.current.push({ scrollPosYTop: section.offsetTop - 300, scrollPosYBottom: section.offsetTop + section.offsetHeight, id: `#${section.id}` })
      }
    });

    scrollActiveSection();
  }, [])

  window.addEventListener("scroll", scrollActiveSection);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <main>
        <PrincipalSection />
        <InfoSection />
        <Technologies />
        <ProjectsSection />
        <AchievementsSection />
        <WorksSection />
        <ContactSection />
        <div className={`fixedUpButton${showScrollBtn ? ' fixedUpShow' : ''}`} onClick={() => scrollToTop()}>
          <img src="/images/arrowUpMini.svg" alt={translateI18n("general.arrowToBeginning")} width="31px" height="20px" />
        </div>
      </main>
      <Footer />
    </>
  );
}
