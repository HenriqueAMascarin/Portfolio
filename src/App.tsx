import Main from "./components/mainComponent/Main";
import Thanks from "./components/thanksComponents/Thanks";
import { Routes, Route} from "react-router-dom"

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/obrigado" element={<Thanks/>}/>
    </Routes>
   </>
  )
}

export default App
