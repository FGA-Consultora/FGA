const Mediciones = () => {
  return <>
  
    <div className="hero h-[50rem] md:h-[45rem] lg:h-[40rem] mx-auto bg-gray-500 bg-blend-multiply" style={{ backgroundImage: `url(/mediciones.webp)` }}>
        <div className="hero-content flex-col">
            <div className="sm:mx-10 md:mx-18 lg:mx-12">
                <p className="font-Roboto drop-shadow-md max-w-full flex justify-center text-center items-center text-4xl sm:text-5xl md:text-6xl  text-white px-2">Mediciones Laborales</p>
            </div>
        </div>
    </div>

    <div className="font-Roboto hero h-full lg:px-20 lg:py-5 mx-auto bg-amber-50">
        <div className="hero-content gap-12 flex-col-reverse lg:flex-row-reverse">
            <div>

            <p className="py-7 font-Oswald text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 bg-amber-200">
                NUESTROS SERVICIOS
            </p>
            <br/>
            
{/*Puesta a Tierra*/}
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Medición de Puesta a Tierra </summary>
                <div className="collapse-content"> 

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Somos expertos en Mediciones de Puesta a Tierra y continuidad de las masas acorde a la resolución 900/2015 de SRT y Asociación Electrotécnica Argentina (AEA).</p>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">El Protocolo de Puesta a Tierra es exigible para documentar el cumplimiento de la correcta instalación de puesta a tierra y su estado de mantenimiento siendo solicitado como Certificado para Municipalidades, Aseguradores de Riesgo de Trabajo, Anti siniestrales para el departamento técnico de Bomberos o en forma privada como informes de mantenimiento y gestión de activos.</p>
                <p className="m-3 mb-6 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Ofrecemos:</p>

                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Medición de resistencia de jabalinas</p>
                </div>

                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mantenimiento</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Sistema de Mallas</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Verificación de Disparo de Disyuntores</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Verificación de Corriente de Lazo de Falla</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Continuidad de conductores de protección</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Continuidad a tierra de los tomacorrientes</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Muestreo de continuidad de las masas del edificio</p>
                </div>


                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Informe técnico de acuerdo a resolución 900/15 SRT con croquis del establecimiento</p>
                </div>

                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Recomendaciones de las tareas a realizar para adecuarse a la legislación vigente</p>
                </div>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones Puesta a Tierra?
                </p>

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Programar una medición de ruido con FGA Consultora es rápido y sencillo. Simplemente ponte en contacto con nuestro equipo y programaremos una visita a tu empresa en una fecha y hora conveniente para ti. Realizaremos las mediciones necesarias y te entregaremos un informe detallado en el plazo acordado.</p>

                </div>
            </details>
{/*Ruido*/}            
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Medición de Ruido </summary>
                <div className="collapse-content"> 
                    
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora comprendemos la importancia de un entorno de trabajo seguro y saludable. La exposición prolongada a niveles de ruido excesivos puede tener un impacto significativo en la salud de tus empleados y en el cumplimiento de las normativas. Es por eso que ofrecemos servicios de medición de ruido precisos y confiables para garantizar que tu empresa cumpla con los estándares de seguridad, según la Resolución SRT 85/12, y bienestar laboral.</p>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Te ofrecemos servicios de medición de ruido precisos y confiables para garantizar que tu empresa cumpla con los estándares de seguridad y bienestar laboral.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Por qué Elegirnos para tus Mediciones de Ruido?
                </p>

                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Experiencia y Profesionalismo: </span>Nuestro equipo de expertos está altamente capacitado en la medición de ruido y cumple con las normativas nacionales e internacionales más estrictas.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Tecnología Avanzada: </span>Utilizamos equipos de última generación para garantizar mediciones precisas y confiables.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Cumplimiento Normativo: </span>Ayudamos a tu empresa a cumplir con todas las regulaciones relacionadas con la exposición al ruido en el lugar de trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Informe Detallado: </span>Te proporcionamos un informe detallado con los resultados de las mediciones, acompañado de recomendaciones para la gestión de riesgos y la mejora del entorno laboral.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Nuestros Servicios de Medición de Ruido Incluyen:
                </p>

                <div className="mx-3 flex my-3">
                <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                </svg>
                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mediciones de Nivel de Ruido</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Utilizamos equipos calibrados para medir los niveles de ruido en áreas específicas de tu empresa.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Evaluación de Exposición Personal</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Calculamos la exposición personal a niveles de ruido para identificar cualquier riesgo potencial para la salud de los trabajadores.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Análisis de Resultados</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Interpretamos los datos recopilados y proporcionamos recomendaciones personalizadas para reducir los riesgos y garantizar el cumplimiento normativo.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Asesoramiento Expertos</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Nuestro equipo de expertos está disponible para responder a todas tus preguntas y brindar orientación en la gestión del ruido en el lugar de trabajo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones de Ruido?
                </p>

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Programar una medición de ruido con FGA Consultora es rápido y sencillo. Simplemente ponte en contacto con nuestro equipo y programaremos una visita a tu empresa en una fecha y hora conveniente para ti. Realizaremos las mediciones necesarias y te entregaremos un informe detallado en el plazo acordado.</p>

                </div>
            </details>
{/*Iluminación*/}
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Medición de Iluminación</summary>
                <div className="collapse-content"> 

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora entendemos que la iluminación adecuada en el lugar de trabajo no solo es esencial para la productividad, sino que también contribuye significativamente a la seguridad y al bienestar de tus empleados. Nuestros servicios de medición de iluminación están diseñados para garantizar que tu empresa cuente con niveles óptimos de iluminación, cumpla con las regulaciones vigentes, Resolución SRT 84/12.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Beneficios de Elegir FGA Consultora para tus Mediciones de Iluminación:
                </p>

                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Precisión y Confiabilidad: </span>Utilizamos equipos de vanguardia y técnicas avanzadas de medición para garantizar resultados precisos y confiables.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Cumplimiento Normativo: </span>Ayudamos a tu empresa a cumplir con todas las regulaciones relacionadas con la iluminación en el lugar de trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Informe Detallado: </span>Te proporcionamos un informe completo con los resultados de las mediciones, identificando cualquier área que requiera mejoras y ofreciendo soluciones prácticas.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Aumento de la Productividad: </span>La iluminación adecuada no solo mejora la seguridad, sino que también puede aumentar la productividad y el bienestar de los empleados.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Nuestros Servicios de Medición de Iluminación Incluyen:
                </p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mediciones de Nivel de Iluminación</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Utilizamos equipos de última generación para medir los niveles de iluminación en áreas específicas de tu empresa.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Análisis de Resultados</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Interpretamos los datos recopilados y proporcionamos recomendaciones personalizadas para optimizar la iluminación y mejorar el ambiente de trabajo.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Asesoramiento Profesional</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Nuestro equipo de expertos está a tu disposición para responder a tus preguntas y proporcionar orientación en la mejora de la iluminación en el lugar de trabajo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones de Iluminación?
                </p>

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Programar una medición de iluminación con FGA Consultora es simple y eficiente. Solo tienes que ponerte en contacto con nuestro equipo y programaremos una visita a tu empresa en un momento conveniente para ti. Llevaremos a cabo las mediciones necesarias y te entregaremos un informe completo en el plazo acordado.</p>

                </div>
            </details>
{/*Vibraciones*/}
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Medición de Vibraciones</summary>
                <div className="collapse-content"> 

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora sabemos que el control de las vibraciones en el lugar de trabajo es esencial tanto para la salud de tus empleados como para la integridad de tus equipos. Nuestros servicios de medición de vibraciones están diseñados para ayudarte a identificar, las vibraciones en tu entorno laboral, garantizando un ambiente más seguro y eficiente según la Resolución 295/03.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Ventajas de Elegir FGA Consultora para tus Mediciones de Vibraciones:
                </p>

                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Tecnología de Vanguardia: </span>Utilizamos equipos de última generación para realizar mediciones precisas y confiables de las vibraciones en tu lugar de trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Cumplimiento Normativo: </span>Te ayudamos a cumplir con las regulaciones y normativas pertinentes relacionadas con las vibraciones en el trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Informe Detallado: </span>Proporcionamos informes completos con los resultados de las mediciones, recomendaciones para la gestión de riesgos y medidas preventivas.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Optimización de la Productividad: </span>Controlar las vibraciones no solo es esencial para la seguridad, sino que también puede aumentar la eficiencia y prolongar la vida útil de tus equipos.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Nuestros Servicios de Medición de Vibraciones Incluyen:
                </p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mediciones Precisas de Vibraciones</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Realizamos mediciones exhaustivas de las vibraciones en áreas específicas de tu empresa utilizando tecnología de punta.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Análisis de Resultados</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Interpretamos los datos recopilados y proporcionamos recomendaciones personalizadas para gestionar y reducir las vibraciones.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Asesoramiento Especializado</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Nuestro equipo de expertos está a tu disposición para responder a tus preguntas y ofrecer orientación en la gestión de vibraciones en el lugar de trabajo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones de Vibraciones?
                </p>

                <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl justify-center text-left items-center text-sky-900">Programar una medición de vibraciones con FGA Consultora es rápido y sencillo. Solo tienes que ponerte en contacto con nuestro equipo y programaremos una visita a tu empresa en una fecha y hora que te convenga. Llevaremos a cabo las mediciones necesarias y te entregaremos un informe completo en el plazo acordado.</p>

                </div>
            </details>
{/*Ventilación*/}
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Medición de Ventilación</summary>
                <div className="collapse-content"> 

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora entendemos que la calidad del aire y la ventilación adecuada son esenciales para crear un entorno de trabajo seguro y saludable. Nuestros servicios de medición de ventilación están diseñados para ayudarte a evaluar y mejorar la calidad del aire en tu lugar de trabajo, garantizando la comodidad y el bienestar de tus empleados, cumpliendo con el Decreto 351/79.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Ventajas de Elegir FGA consultora para tus Mediciones de Ventilación:
                </p>

                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Profesionalismo y Experiencia: </span>Nuestro equipo de expertos está altamente capacitado y cuenta con experiencia en la medición de ventilación, asegurando resultados precisos y confiables.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Cumplimiento Normativo: </span>Te ayudamos a cumplir con las regulaciones y normativas relacionadas con la calidad del aire y la ventilación en el lugar de trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Informe Detallado: </span>Proporcionamos informes completos con los resultados de las mediciones, identificando áreas que requieran mejoras y ofreciendo soluciones prácticas.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Salud y Productividad: </span>Mejorar la ventilación no solo contribuye a la salud de los empleados, sino que también puede aumentar la productividad y el bienestar general.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Nuestros Servicios de Medición de Ventilación incluyen:
                </p>
                
                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mediciones Precisas de Ventilación</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Realizamos mediciones exhaustivas de los parámetros de ventilación en áreas específicas de tu empresa utilizando equipos de última generación.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Análisis de Resultados</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Interpretamos los datos recopilados y proporcionamos recomendaciones personalizadas para optimizar la calidad del aire y la ventilación en tu lugar de trabajo.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Asesoramiento Profesional</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Nuestro equipo de expertos está disponible para responder a tus preguntas y brindar orientación en la gestión de la ventilación en el lugar de trabajo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones de Ventilación?
                </p>
                
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Programar una medición de ventilación con FGA Consultora es rápido y sencillo. Solo tienes que ponerte en contacto con nuestro equipo y programaremos una visita a tu empresa en una fecha y hora que te convenga. Realizaremos las mediciones necesarias y te entregaremos un informe completo en el plazo acordado.</p>

                </div>
            </details>
{/*CO2*/}
            <details className="collapse collapse-arrow">
                <summary className="collapse-title m-3 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600">Mediciones de CO2 (Dióxido de Carbono)</summary>
                <div className="collapse-content"> 

                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora sabemos que el monitoreo de CO2 (dióxido de carbono) en el lugar de trabajo es fundamental para garantizar un ambiente seguro y saludable. Nuestros servicios de medición de CO2 están diseñados para ayudarte a evaluar y controlar los niveles de controlar los niveles de contaminantes presentes en el aire para garantizar un ambiente laboral seguro y saludable, Cumpliendo con la Resolución 295/03. Esto garantiza que su empresa cumpla con los estándares legales y evite posibles sanciones.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Ventajas de Elegir FGA Consultora para tus Mediciones de CO2:
                </p>

                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Profesionalismo y Experiencia: </span>Nuestro equipo de expertos está altamente capacitado y cuenta con experiencia en la medición de CO2, garantizando resultados precisos y confiables.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Cumplimiento Normativo: </span>Te ayudamos a cumplir con las regulaciones y normativas relacionadas con la calidad del aire y los niveles de CO2 en el lugar de trabajo.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Informe Detallado: </span>Proporcionamos informes completos con los resultados de las mediciones, identificando áreas que requieran mejoras y ofreciendo soluciones prácticas.</p>
                <p className="m-3 ml-6 md:mx-10 lg:mx-20 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900"><span className="font-semibold text-amber-600">•&nbsp;&nbsp;&nbsp;Salud y Bienestar: </span>Controlar los niveles de CO2 es esencial para la salud de los empleados y puede contribuir a un ambiente de trabajo más cómodo y productivo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    Nuestros Servicios de Medición de CO2 Incluyen:
                </p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Mediciones Precisas de CO2</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Realizamos mediciones exhaustivas de los niveles de CO2 en áreas específicas de tu empresa utilizando equipos de última generación.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Análisis de Resultados</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Interpretamos los datos recopilados y proporcionamos recomendaciones personalizadas para optimizar la calidad del aire y los niveles de CO2 en tu lugar de trabajo.</p>

                <div className="mx-3 flex my-3">
                    <svg className="w-5 h-5 mt-0.5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"></path>
                    </svg>
                    <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Asesoramiento Profesional</p>
                </div>
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Nuestro equipo de expertos está disponible para responder a tus preguntas y brindar orientación en la gestión de los niveles de CO2 en el lugar de trabajo.</p>

                <p className="m-3 my-5 font-Roboto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-900">
                    ¿Cómo Programar tus Mediciones de CO2?
                </p>
                
                <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">Programar una medición de CO2 con FGA Consultora es rápido y sencillo. Solo tienes que ponerte en contacto con nuestro equipo y programaremos una visita a tu empresa en una fecha y hora que te convenga. Realizaremos las mediciones necesarias y te entregaremos un informe completo en el plazo acordado.</p>

                </div>
            </details>
{/*Contacto*/}
            <p className="mx-3 font-Roboto text-md md:text-lg lg:text-xl font-semibold justify-center text-left items-center text-amber-600">Contactanos</p>
            <p className="m-3 font-Roboto text-md md:text-lg lg:text-xl font-medium justify-center text-left items-center text-sky-900">En FGA Consultora, ofrecemos un amplio abanico de servicios de medición para garantizar el correcto diagnóstico en toda situación. Contáctanos hoy mismo para obtener más información sobre nuestros servicios y ayudarte con nuestro asesoramiento a que logres tus objetivos.</p>

            </div>
        </div>
    </div>
  
  </>;
};

export default Mediciones;
