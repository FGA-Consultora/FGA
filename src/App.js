import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Scroll from './components/Scroll';
import Industria from './services/Industria';
import Construccion from './services/Construccion';
import Capacitaciones from './services/Capacitaciones';
import Medioambiente from './services/Medioambiente';
import Autoproteccion from './services/Autoproteccion';
import Consorcio from './services/Consorcio';
import Seguridad from './services/Seguridad';
import Mediciones from './services/Mediciones';

function App() {
  return <>
    <BrowserRouter>

      <Navbar/>

      <Routes>
      <Route path='*' element={<><Hero/><About/><CardContainer/></>}/>
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
        avatar="avatar.webp"
        notification
        notificationDelay={10000}
        chatboxClassName="text-black"
        />
        <Scroll/>

    </BrowserRouter>
  </>;
}

export default App;
