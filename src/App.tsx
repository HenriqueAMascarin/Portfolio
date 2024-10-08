import { useEffect } from "react";
import Main from "./components/mainComponent/Main";
import Thanks from "./components/thanksComponents/Thanks";
import { Routes, Route, useLocation } from "react-router-dom"
import { arrayCards } from "./components/mainComponent/projects/cardsData";
import PolicyMediaTimer from "./components/policy/PolicyMediaTimer";

function App() {

  const location = useLocation();

  const locationId = location.hash.slice(location.hash.indexOf('#') + 1, location.hash.length);

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(locationId);

      arrayCards.forEach((el) => {
        if (location.hash.includes(el.id) && element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });

    }, 100);
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/obrigado" element={<Thanks />} />
        <Route path="/politica-privacidade/media-timer" element={<PolicyMediaTimer />} />
      </Routes>
    </>
  )
}

export default App
