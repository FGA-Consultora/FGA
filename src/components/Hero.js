import React from 'react'

const Hero = () => {
  return <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url(/HeroImg.webp)` }}>
        <div className="hero-overlay bg-opacity-50 shadow-2xl"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:pr-96 lg:ml-20">
            <div className="max-w-xl text-center text-neutral-content sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">FGA - Consultora de
                <strong className="block font-extrabold text-white">Higiene, Seguridad</strong>y Medioambiente</h1>
                <h2 className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white"> <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illotenetur fuga ducimus numquam ea!</strong></h2>
            </div>
        </div>
    </div>
  </>
}

export default Hero