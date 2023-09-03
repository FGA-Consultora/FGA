import {useInView} from "react-intersection-observer"
import { Link } from "react-router-dom"

const CardContainer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  //Cards Intersecton Observer
  const {ref: CardObs1, inView: isCardObs1Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs2, inView: isCardObs2Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs3, inView: isCardObs3Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs4, inView: isCardObs4Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs5, inView: isCardObs5Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs6, inView: isCardObs6Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs7, inView: isCardObs7Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs8, inView: isCardObs8Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: CardObs9, inView: isCardObs9Visible} = useInView({threshold: 0.1, triggerOnce: true})

  return (
    <>

      {/*Card Section Title*/}
      <div className="max-w-full flex justify-center text-center items-center pt-4 bg-amber-50">
        <div className="mb-5 pb-2">
          <p className="font-Bebas drop-shadow-md text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-500 pt-4">Nuestros Servicios</p>
        </div>
      </div>

      {/*Card Section*/}
      <div className="font-Roboto text-lg max-w-full flex justify-center items-center py-4 bg-amber-50">
        <div className="grid lg:grid-cols-3 mx-auto sm:grid-cols-2">

          <div ref={CardObs1} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs1Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card1.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Industria" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Servicio de Industrias</h4>
              </Link>
              <p className="leading-normal text-sky-700">Asesoramiento Legal Técnico según Ley 12587. Procedimientos de trabajo seguros...</p>
            </div>
            <Link to="/Industria" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs2} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs2Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card1000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Construccion" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Obras en Construcción</h4>
              </Link>
              <p className="leading-normal text-sky-700">Asesoramiento Legal Técnico según Dec. 911/96. Demoliciones y Excavaciones. Trabajo en altura...</p>
            </div>
            <Link to="/Construccion" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs3} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs3Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card6000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Capacitaciones" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Capacitaciones (Res. 905/15)</h4>
              </Link>
              <p className="leading-normal text-sky-700">Instrucciones de Seguridad e Higiene. Incendio y Extintores. Entrenamiento de brigadas de Emergencia...</p>
            </div>
            <Link to="/Capacitaciones" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs4} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs4Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card3000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Medioambiente" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Medioambiente</h4>
              </Link>
              <p className="leading-normal text-sky-700">Asesoramiento Legal Técnico según normativa nacional y provincial. DJJ de residuos Especiales y Peligrosos...</p>
            </div>
            <Link to="/Medioambiente" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs5} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs5Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card7000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Autoproteccion" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Sistemas de Autoprotección (Ley 5920 CABA)</h4>
              </Link>
              <p className="leading-normal text-sky-700">Cálculo y estimación de riesgos. DJJ y presentación ante defensa civil...</p>
            </div>
            <Link to="/Autoproteccion" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs6} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs6Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card555.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Consorcio" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Servicios de Consorcio</h4>
              </Link>
              <p className="leading-normal text-sky-700">Relevamiento general de riesgos de trabajo. Análisis de potabilidad de agua. Simulacro y Plan de Evacuaci...</p>
            </div>
            <Link to="/Consorcio" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs7} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs7Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card5000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Seguridad" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Programas de Seguridad en Obra</h4>
              </Link>
              <p className="leading-normal text-sky-700">Aviso de Obra. Excavación. Programa 51. Demolición. Programa 35. Progr...</p>
            </div>
            <Link to="/Seguridad" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs8} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs8Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card4000.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Mediciones" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Mediciones</h4>
              </Link>
              <p className="leading-normal text-sky-700">Puesta a Tierra y Continuidad de las Masas. Medición de Ruido. Medición de Co2 (Dióxido de Carbono)...</p>
            </div>
            <Link to="/Mediciones" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>
          </div>

          <div ref={CardObs9} className={`max-w-xs mx-4 mb-5 rounded-lg shadow-lg bg-white slider-btn ${isCardObs9Visible ? "slider-btn-shower2" : ""}`}>
            <img className="w-full h-48" src="/card6.webp" alt="product" />
            <div className="px-6 py-4">
              <Link to="/Contactos" onClick={scrollToTop}>
                <h4 className="mb-3 text-2xl font-semibold tracking-tight text-amber-600">Pida una Cotización</h4>
              </Link>
              <p className="leading-normal text-sky-700">Nuestro compromiso es con el cliente y ayudamos a que sus objetivos puedan cumplirse.</p>
            </div>
            <Link to="/Contactos" onClick={scrollToTop}>
            <button className="m-3 ml-48 grid grid-flow-col text-amber-600 hover:text-amber-500">
              Saber más&nbsp;
              <svg className="mt-1 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#075985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4M8 12h7" />
              </svg>
            </button>
            </Link>

          </div>

        </div>
      </div>
    </>
  )
}
export default CardContainer