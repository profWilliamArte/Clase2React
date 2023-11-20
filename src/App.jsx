
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header"
import Minicio from "../src/components/Minicio"
function App() {
  

  return (
    <>
      
       <BrowserRouter>
        <Header/>
          <Routes>
          <Route path="/Inicio" element={<Minicio/>} />
    
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
