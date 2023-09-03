import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar';
import CardContainer from '../src/components/CardContainer';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Scroll from '../src/components/Scroll';
import Industria from '../src/services/Industria';
import Construccion from '../src/services/Construccion';
import Capacitaciones from '../src/services/Capacitaciones';
import Medioambiente from '../src/services/Medioambiente';
import Autoproteccion from '../src/services/Autoproteccion';
import Consorcio from '../src/services/Consorcio';
import Seguridad from '../src/services/Seguridad';
import Mediciones from '../src/services/Mediciones';

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route index element={<><Hero/><About/><CardContainer/></>}></Route>
          <Route path='Nosotros' element={<><About/><CardContainer/></>}></Route>
          <Route path='Servicios' element={<CardContainer/>}></Route>
          <Route path='Contactos' element={<></>}></Route>

          <Route path='Industria' element={<Industria/>}></Route>
          <Route path='Construccion' element={<Construccion/>}></Route>
          <Route path='Capacitaciones' element={<Capacitaciones/>}></Route>
          <Route path='Medioambiente' element={<Medioambiente/>}></Route>
          <Route path='Autoproteccion' element={<Autoproteccion/>}></Route>
          <Route path='Consorcio' element={<Consorcio/>}></Route>
          <Route path='Seguridad' element={<Seguridad/>}></Route>
          <Route path='Mediciones' element={<Mediciones/>}></Route>

        </Routes>

        <Contact/>
        <Footer/>
        <FloatingWhatsApp 
          accountName="FGA - Consultora" 
          allowEsc
          allowClickAway
          chatboxHeight={350}
          phoneNumber="+5411XXXXXXXX"
          statusMessage="Disponible"
          chatMessage="¡Hola! 🤝 ¿En qué puedo ayudarte?"
          placeholder="Escribe un mensaje..."
          avatar="src/img/avatar.webp"
          notification
          notificationDelay={10000}
          chatboxClassName="text-black"
        />
        <Scroll/>

      </BrowserRouter>
    </>
  )
}

export default App
