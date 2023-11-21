
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header"
import Minicio from "../src/components/Minicio"
import Mmoviles from './components/Mmoviles';
import Mlaptop from './components/Mlaptop';
import Mtienda from './components/Mtienda';
function App() {
  

  return (
    <>
      
       <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/Inicio" element={<Minicio/>} />
            <Route path="/Movil" element={<Mmoviles/>} />
            <Route path="/Laptop" element={<Mlaptop/>} />
            <Route path="/Tienda" element={<Mtienda/>} />
    
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
