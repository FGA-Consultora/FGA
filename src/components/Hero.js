import { Carousel } from "flowbite-react"
import { useInView } from "react-intersection-observer"



const Hero = () => {
  //Intersection observer Carrousel
  const {ref: carrouselSlider1, inView: isSlider1Visible} = useInView({threshold:0.5})
  const {ref: carrouselSlider2, inView: isSlider2Visible} = useInView({threshold:0.5})
  const {ref: carrouselSlider3, inView: isSlider3Visible} = useInView({threshold:0.5})

  return <>
    <div className="h-[36rem]">
      {/*Edited Controls*/}
      <Carousel leftControl={<div className="-z-1"></div>} rightControl={<div className="-z-1"></div>} border="none" slideInterval={5000}>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/HeroImg2.webp)` }}>
          <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
              
              <div ref={carrouselSlider1} className={`slider-title ${isSlider1Visible ? 'slider-title-shower' : ''}`}>
                <h1 className="pb-2 text-3xl md:text-6xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">FGA - Consultora de
                <strong className="block font-extrabold text-white">Higiene, Seguridad</strong>y Medioambiente</h1>
              </div>
              <div className={`slider-text ${isSlider1Visible ? 'slider-text-shower' : ''}`}>
              <h2 className="md:ml-5 mt-4 max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illotenetur fuga ducimus numquam ea!</strong></h2>
              </div>
              <div className={`slider-btn mt-4 ${isSlider1Visible ? 'slider-btn-shower' : ''}`}>
                <button className="md:ml-5 btn btn-outline btn-info">Contacto</button>
              </div>

          </div>  
        </div>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/card42.webp)` }}>
          
        <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
          <div ref={carrouselSlider2} className={`slider-title ${isSlider2Visible ? 'slider-title-shower' : ''}`}>
            <div className=" pb-2 text-3xl md:text-6xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-100">FGA - Consultora de
              <strong className="block font-extrabold text-white">Higiene, Seguridad</strong>y Medioambiente
            </div>
          </div>
          <div className={`slider-text ${isSlider2Visible ? 'slider-text-shower' : ''}`}>
            <div className="md:ml-5 mt-4 max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illotenetur fuga ducimus numquam ea!</strong></div>
          </div>
          <div className={`slider-btn mt-4 ${isSlider2Visible ? 'slider-btn-shower' : ''}`}>
            <button className="md:ml-5 btn btn-outline btn-warning">Contacto</button>
          </div>
        </div>  

        </div>
        <div className="flex h-full items-center justify-center bg-cover" style={{ backgroundImage: `url(/card52.webp)` }}>

          <div className="flex-col sm:mr-24 md:mr-48 lg:mr-96 justify text-center sm:text-left">
            <div ref={carrouselSlider3} className={`slider-title ${isSlider3Visible ? 'slider-title-shower' : ''}`}>
              <div className=" pb-2 text-3xl md:text-6xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-300 to-green-100">FGA - Consultora de
                <strong className="block font-extrabold text-white">Higiene, Seguridad</strong>y Medioambiente
              </div>
            </div>
            <div className={`slider-text ${isSlider3Visible ? 'slider-text-shower' : ''}`}>
              <div className="md:ml-5 mt-4 max-w-lg sm:text-xl lg:text-2xl sm:leading-relaxed text-white"> <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illotenetur fuga ducimus numquam ea!</strong></div>
            </div>
            <div className={`slider-btn mt-4 ${isSlider3Visible ? 'slider-btn-shower' : ''}`}>
              <button className="md:ml-5 btn btn-outline btn-success">Contacto</button>
            </div>
          </div>  

        </div>
      </Carousel>
    </div>
  </>
}

export default Hero