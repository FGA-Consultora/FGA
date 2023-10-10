import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return <>
  
  <footer>
  <div className="font-Oswald text-lg footer pl-10 p-8 bg-sky-800 text-white">

  <div>
    <span className="footer-title">Servicios</span>
    
    <Link to='Industria'>
      <div className="link link-hover" onClick={scrollToTop}>Servicio de Industrias</div>
    </Link>

    <Link to='Construccion'>
      <div className="link link-hover" onClick={scrollToTop}>Obras en Construcción</div>
    </Link>

    <Link to='Capacitaciones'>
      <div className="link link-hover" onClick={scrollToTop}>Capacitaciones (Res. 905/15)</div>
    </Link>

    <Link to='Medioambiente'>
      <div className="link link-hover" onClick={scrollToTop}>Medioambiente</div>
    </Link>
  </div> 
  {/*Continuación*/}
  <div>
    <span className="footer-title"><br></br></span>
    
    <Link to='Autoproteccion'>
      <div className="link link-hover" onClick={scrollToTop}>Sistemas de Autoprotección</div>
    </Link>

    <Link to='Consorcio'>
      <div className="link link-hover" onClick={scrollToTop}>Servicios de Consorcio</div>
    </Link>

    <Link to='Seguridad'>
      <div className="link link-hover" onClick={scrollToTop}>Programas de Seguridad en Obra</div>
    </Link>

    <Link to='Mediciones'>
      <div className="link link-hover" onClick={scrollToTop}>Mediciones</div>
    </Link>
  </div> 

  <div>
    <span className="footer-title">Empresa</span> 

    <Link to='Nosotros'>
      <div className="link link-hover" onClick={scrollToTop}>Acerca de nosotros</div>
    </Link>

    <Link to='Contactos'>
      <div className="link link-hover" onClick={scrollToTop}>Contacto</div>
    </Link>
    {/*Si o si tiene que ser <a> para que funcione el href */}
    <a href="https://wa.link/997rar" className="link link-hover">+54 11 2395-9319</a>

    <div className="link link-hover" onClick={() => window.location = 'mailto:info@fgaconsultora.com.ar'}>info&#64;fgaco&#110;&#115;ul&#116;ora&#46;com&#46;ar</div>

  </div> 
</div>

<div className="pb-3 pt-1 h-full flex items-center justify-center  bg-sky-800">
    <div className="flex items-center justify-center gap-x-10 ">
        <a href="https://www.linkedin.com/company/fga-consultora-de-seguridad-e-higiene/" aria-label="Find us on LinkedIn">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        
        <a href="https://www.facebook.com/profile.php?id=61550469744989&mibextid=ZbWKwL" aria-label="Find us on Facebook">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
            </svg>

        </a>
        <a href="https://www.instagram.com/fgaconsultora/?igshid=NzZlODBkYWE4Ng%3D%3D" aria-label="Find us on Instagram">
            <svg className="h-10 w-10 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                    fill="currentColor"></path>
                <path
                    d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                    fill="currentColor"></path>
            </svg>

        </a>
    </div>
</div>

<div className="font-Roboto text-lg footer footer-center p-2 bg-sky-900 text-white shadow-inner">
  <div>
    <p>Copyright © 2023 - FGA Consultora de Higiene, Seguridad y Medioambiente | Design by <strong className="text-purple-400 font-strong">Web Ex Machina</strong></p>
  </div>
</div>

</footer>
</>
}

export default Footer