import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import PrincipalSection from "./components/PrincipalSection";
import ProjectsSection from "./components/ProjectsSection";
import Tecnologies from "./components/Tecnologies";
import ContactSection from "./components/WorkSection";

function App() {

  return (
   <>
    <Header/>
    <main>
      <PrincipalSection/>
      <InfoSection/>
      <Tecnologies/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
    <Footer/>
   </>
  )
}

export default App
