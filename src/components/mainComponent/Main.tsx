import Footer from "./Footer";
import Header from "./Header";
import InfoSection from "./InfoSection";
import PrincipalSection from "./PrincipalSection";
import ProjectsSection from "./projects/ProjectsSection";
import Tecnologies from "./techs/Tecnologies";
import ContactSection from "./ContactSection";
import WorksSection from "./experiences/ExperiencesSection";
import AchievementsSection from "./achievements/AchievementsSection";

export default function Main() {
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
      </main>
      <Footer />
    </>
  );
}
