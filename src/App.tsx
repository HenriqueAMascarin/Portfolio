import { useEffect } from "react";
import Main from "./components/mainComponent/Main";
import Thanks from "./components/thanksComponents/Thanks";
import { Routes, Route, useLocation } from "react-router-dom"
import { projectsIds } from "./components/mainComponent/ProjectsSection";
import PolicyMediaTimer from "./components/policy/PolicyMediaTimer";

function App() {

  const location = useLocation();

  const locationId = location.hash.slice(location.hash.indexOf('#') + 1, location.hash.length);

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(locationId);
      for(let [_, value] of Object.entries(projectsIds)){
        if (location.hash.includes(value) && element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }

    }, 100);
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/privacy-policy/media-timer" element={<PolicyMediaTimer />} />
      </Routes>
    </>
  )
}

export default App
