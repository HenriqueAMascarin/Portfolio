import Footer from "./Footer";
import Header from "./Header";
import InfoSection from "./InfoSection";
import PrincipalSection from "./PrincipalSection";
import ProjectsSection from "./projects/ProjectsSection";
import Tecnologies from "./techs/Tecnologies";
import ContactSection from "./ContactSection";
import WorksSection from "./experiences/ExperiencesSection";
import AchievementsSection from "./achievements/AchievementsSection";
import { useState } from "react";

export default function Main() {
  let [showScrollBtn, changeShowScrollBtn] = useState(false);

  window.addEventListener("scroll", () => {
    if (!showScrollBtn && window.scrollY >= 1000) {
      changeShowScrollBtn(true);
    } else if (showScrollBtn && window.scrollY < 1000) {
      changeShowScrollBtn(false);
    }
  });

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <main>
        <PrincipalSection />
        <InfoSection />
        <Tecnologies />
        <ProjectsSection />
        <AchievementsSection />
        <WorksSection />
        <ContactSection />
        <div className={`fixedUpButton${showScrollBtn ? ' fixedUpShow' :  ''}`} onClick={() => scrollToTop()}>
          <img src="src/assets/images/arrowUpMini.svg" alt="Seta para cima" />
        </div>
      </main>
      <Footer />
    </>
  );
}
