import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Carrousel from './components/Carrousel';

function App() {
  return <>
    <Navbar/>
    <Hero/>
    <CardContainer/>
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
  </>;
}

export default App;
