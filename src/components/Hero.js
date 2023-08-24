import { Carousel } from "flowbite-react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"



const Hero = () => {
  //Intersection observer Carrousel
  const {ref: carrouselSlider1, inView: isSlider1Visible} = useInView({threshold:0.5})
  const {ref: carrouselSlider2, inView: isSlider2Visible} = useInView({threshold:0.5})
  const {ref: carrouselSlider3, inView: isSlider3Visible} = useInView({threshold:0.5})

  return <>
  <div>
    <div className="h-[40rem] max-w-full">
      {/*Edited Controls*/}
      <Carousel leftControl={<div className="-z-1"></div>} rightControl={<div className="-z-1"></div>} border="none" slideInterval={5000}>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/HeroImg21.webp)` }}>
          <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
              
              <div ref={carrouselSlider1} className={`slider-title ${isSlider1Visible ? 'slider-title-shower' : ''}`}>
                <h1 className="font-Oswald  pb-2 text-5xl md:text-7xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">FGA - Consultora de&nbsp;
                <strong className="py-3 block font-extrabold text-white">Higiene, Seguridad&nbsp;</strong>y Medioambiente</h1>
              </div>
              <div className={`slider-text ${isSlider1Visible ? 'slider-text-shower' : ''}`}>
                <h2 className="font-Roboto md:ml-5 my-5 mx-10  max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Garantizamos el mejor servicio en Prevención, Seguridad y Salud</strong></h2>
              </div>
              <div className={`slider-btn mt-4 ${isSlider1Visible ? 'slider-btn-shower' : ''}`}>
                <Link to="Contactos">
                  <button className="font-Roboto text-lg md:ml-5 btn btn-outline btn-info">Contacto</button>
                </Link>
              </div>

          </div>  
        </div>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/card422.webp)` }}>
          
        <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
          <div ref={carrouselSlider2} className={`slider-title ${isSlider2Visible ? 'slider-title-shower' : ''}`}>
            <div className="font-Oswald pb-2 text-5xl md:text-7xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-100">FGA - Consultora de&nbsp;
              <strong className="py-3 block font-extrabold text-white">Higiene, Seguridad&nbsp;</strong>y Medioambiente
            </div>
          </div>
          <div className={`slider-text ${isSlider2Visible ? 'slider-text-shower' : ''}`}>
            <div className="font-Roboto md:ml-5 mt-4 max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Profesionales expertos cerca tuyo, dispuestos a ayudarte</strong></div>
          </div>
          <div className={`slider-btn mt-4 ${isSlider2Visible ? 'slider-btn-shower' : ''}`}>
            <Link to="Contactos">
              <button className="font-Roboto text-lg md:ml-5 btn btn-outline btn-warning">Contacto</button>
            </Link>
          </div>
        </div>

        </div>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/card523.webp)` }}>

          <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
            <div ref={carrouselSlider3} className={`slider-title ${isSlider3Visible ? 'slider-title-shower' : ''}`}>
              <div className="font-Oswald pb-2 text-5xl md:text-7xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-green-100">FGA - Consultora de&nbsp;
                <strong className="py-3 block font-extrabold text-white">Higiene, Seguridad&nbsp;</strong>y Medioambiente
              </div>
            </div>
            <div className={`slider-text ${isSlider3Visible ? 'slider-text-shower' : ''}`}>
              <div className="font-Roboto md:ml-5 mt-4 max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Ofrecemos gestión completa, compromiso y excelente calidad</strong></div>
            </div>
            <div className={`slider-btn mt-4 ${isSlider3Visible ? 'slider-btn-shower' : ''}`}>
              <Link to="Contactos">
                <button className="font-Roboto text-lg md:ml-5 btn btn-outline btn-success">Contacto</button>
              </Link>
            </div>
          </div>  

        </div>
      </Carousel>
    </div>
  </div>
  </>
}

export default Hero