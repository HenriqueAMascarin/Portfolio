import Footer from "./Footer";
import Header from "./Header";
import InfoSection from "./InfoSection";
import PrincipalSection from "./PrincipalSection";
import ProjectsSection from "./projects/ProjectsSection";
import Tecnologies from "./techs/Tecnologies";
import ContactSection from "./ContactSection";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <PrincipalSection />
        <InfoSection />
        <Tecnologies />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
