import {useInView} from "react-intersection-observer"


const About = () => {
  
  // Intersection Observer
  const {ref: aboutUs, inView: isAboutUsVisible} = useInView({threshold: 0.1, triggerOnce: true})
  return <>
  
  {/*About Us Section*/}
  <div className="hero h-full  bg-white lg:px-20 lg:py-5 mx-auto">
        <div ref={aboutUs} className="hero-content flex-col lg:flex-row">
          <img src="/deal.webp" alt="..." className={`rounded-lg shadow-2xl max-w-sm slider-text ${isAboutUsVisible ? "slider-text-shower" : ""}`} />
          <div className={`sm:mx-10 md:mx-18 lg:mx-12 slider-title ${isAboutUsVisible ? "slider-title-shower" : ""}`}>
            <p className="italic font-Bebas drop-shadow-md max-w-full flex justify-center text-center items-center text-4xl sm:text-5xl md:text-6xl font-semibold  text-amber-500 px-2">¿Quiénes somos?</p>
            <p className="font-Roboto py-6 text-xl text-sky-800">En FGA Consultora, somos un equipo de profesionales dedicados a brindarte apoyo integral en materia de Seguridad, Higiene y Medioambiente. Nuestra misión es garantizar servicios de calidad excepcional, ofrecerte acompañamiento a lo largo de todo el proceso y proporcionarte la asesoría más avanzada y precisa disponible en la actualidad.</p>
            <p className="font-Roboto py-6 text-xl text-sky-800">Nuestros clientes son nuestra máxima prioridad, y trabajamos incansablemente para asegurarnos de que tus objetivos se cumplan. Nuestra filosofía se basa en la excelencia en el servicio al cliente, y tu satisfacción es nuestra principal meta. Nos comprometemos a estar a tu lado en cada etapa de tu proyecto, brindándote orientación actualizada y relevante en el mercado.</p>
            <p className="font-Roboto py-6 text-xl text-sky-800">No solo ofrecemos servicios; construimos relaciones sólidas y perdurables contigo. Estamos aquí para ayudarte a alcanzar tus metas y superar tus desafíos. Con nosotros, contarás con el respaldo de un equipo de profesionales apasionados que se preocupan tanto por tu bienestar como por el del medio ambiente.</p>
          </div>    
        </div>
      </div>

      {/*Why us*/}
      {/*Card Section Title*/}
      <div className="pt-4 h-[45rem] bg-cover" style={{ backgroundImage: `url(/about.webp)` }}>
        <div className="mb-5 pb-2 text-center ">
          <p className="font-Bebas drop-shadow-lg pt-5 text-7xl font-medium text-amber-500 px-2">¿Por qué elegirnos?</p>
        </div>

      {/*Card Section*/}
      <div className="hero max-w-full text-center pt-18 lg:pt-28">
        <div className="grid gap-4 lg:gap-16 lg:grid-cols-2 sm:grid-cols-1">

          <div className="p-1 sm:p-5 mx-4 mb-5 shadow-lg bg-sky-900 bg-opacity-70">
            <div className="px-6 py-2">
              <p className="font-Oswald drop-shadow-md mb-3 text-lg sm:text-lg md:text-2xl lg:text-3xl tracking-tight text-amber-300 "><span className="text-amber-600">➲ </span> Ofrecemos atención personalizada a clientes</p>
            </div>
          </div>

          <div className="p-1 sm:p-5 mx-4 mb-5 shadow-lg bg-sky-900 bg-opacity-70">
            <div className="px-6 py-2">
              <p className="font-Oswald drop-shadow-md mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-amber-300"><span className="text-amber-600">➲ </span> Garantizamos una comunicación constante</p>
            </div>
          </div>

          <div className="p-1 sm:p-5 mx-4 mb-5 shadow-lg bg-sky-900 bg-opacity-70">
            <div className="px-6 py-2">
              <p className="font-Oswald drop-shadow-md mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-amber-300"><span className="text-amber-600">➲ </span> Brindamos soluciones integrales y de calidad</p>
            </div>
          </div>

          <div className="p-1 sm:p-5 mx-4 mb-5 shadow-lg bg-sky-900 bg-opacity-70">
            <div className="px-6 py-2">
              <p className="font-Oswald drop-shadow-md mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-amber-300"><span className="text-amber-600">➲ </span> Asesoría completa y resultados profesionales</p>
            </div>
          </div>
          </div>
          </div>
        <br/>

        </div>
  
  </>;
};

export default About;
