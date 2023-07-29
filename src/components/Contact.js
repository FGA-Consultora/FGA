import React from "react"
import {useInView} from "react-intersection-observer"

const Contact = () => {
  const {ref: sectionCont1, inView: isSectionCont1Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: sectionCont2, inView: isSectionCont2Visible} = useInView({threshold: 0.1, triggerOnce: true})

  return (
    <>
      {/*Contact*/}
      <div className="hero bg-blue-100 lg:px-20 lg:py-5 mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div ref={sectionCont1} class={`w-full max-w-[550px] items-center justify-center ${isSectionCont1Visible ? "slider-btn-shower2" : ""}`}>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div class="mb-1">
                <label for="nombre" class="mb-1 block text-base font-medium text-[#07074D]">
                  Nombre
                </label>
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese nombre" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="mb-1">
                <label for="telefono" class="mb-1 block text-base font-medium text-[#07074D]">
                  Teléfono
                </label>
                <input type="text" name="telefono" id="telefono" placeholder="(XX) XX XXXX-XXXX" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="mb-1">
                <label for="email" class="mb-1 block text-base font-medium text-[#07074D]">
                  Email de Contacto
                </label>
                <input type="email" name="email" id="email" placeholder="contacto@ejemplo.com" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="mb-1">
                <label for="asunto" class="mb-1 block text-base font-medium text-[#07074D]">
                  Asunto
                </label>
                <input type="text" name="asunto" id="asunto" placeholder="Escribí el asunto aquí" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="mb-1">
                <label for="mensaje" class="mb-1 block text-base font-medium text-[#07074D]">
                  Mensaje
                </label>
                <textarea rows="4" name="mensaje" id="mensaje" placeholder="Escribí tu consulta aquí" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
              </div>
              <div>
                <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Enviar</button>
              </div>
            </form>
          </div>

          <div ref={sectionCont2} className={`mx-8 max-w-[550px] sm:max-w-none lg:mx-18 slider-btn ${isSectionCont2Visible ? "slider-btn-shower2" : ""}`}>
            <p className="text-4xl font-semibold text-amber-500 pb-2">Envianos un mensaje y responderemos todas tus consultas </p>
            <p className="lg:mb-20 py-6 text-xl text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact