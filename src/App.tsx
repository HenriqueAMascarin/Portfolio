import { useEffect, useState } from "react";
import Main from "./components/mainComponent/Main";
import Thanks from "./components/thanksComponents/Thanks";
import { Routes, Route, useLocation } from "react-router-dom"
import { arrayCards } from "./components/mainComponent/projects/cardsData";

function App() {

  const location = useLocation();

  const locationId = location.hash.slice(location.hash.indexOf('#') + 1, location.hash.length);



  useEffect(() => {
    const element = document.getElementById(locationId);

    arrayCards.forEach((el) => {
      if (location.hash.includes(el.id) && element) {
        scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 13);
      }
    })

  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/obrigado" element={<Thanks />} />
      </Routes>
    </>
  )
}

export default App
