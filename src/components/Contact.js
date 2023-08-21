import React from "react"
import {useInView} from "react-intersection-observer"

const Contact = () => {
  const {ref: sectionCont1, inView: isSectionCont1Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: sectionCont2, inView: isSectionCont2Visible} = useInView({threshold: 0.1, triggerOnce: true})

  return (
    <>
      {/*Contact*/}
      <div className="hero lg:px-20 lg:py-5 mx-auto" style={{ backgroundImage: `url(/form.webp)` }}>
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div ref={sectionCont1} className={`w-full max-w-[550px] items-center justify-center ${isSectionCont1Visible ? "slider-btn-shower2" : ""}`}>
            <form action="" method="POST">
              <div className="mb-1">
                <label htmlFor="nombre" className="mb-1 block text-base font-medium text-amber-500">
                  Nombre
                </label>
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese nombre" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-1">
                <label htmlFor="telefono" className="mb-1 block text-base font-medium text-amber-500">
                  Teléfono
                </label>
                <input type="text" name="telefono" id="telefono" placeholder="(XX) XX XXXX-XXXX" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-1">
                <label htmlFor="mensaje" className="mb-1 block text-base font-medium text-amber-500">
                  Mensaje
                </label>
                <textarea rows="4" name="mensaje" id="mensaje" placeholder="Escribí tu consulta aquí" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
              </div>
              <div>
                <button type="submit" value="send" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Enviar</button>
              </div>
            </form>
          </div>

          <div ref={sectionCont2} className={`justify-center text-center items-center mx-8 max-w-[550px] sm:max-w-none lg:mx-18 slider-btn ${isSectionCont2Visible ? "slider-btn-shower2" : ""}`}>
            <p className="text-3xl font-semibold text-amber-500 pb-2">Envianos un mensaje y responderemos a la brevedad</p>
            <p className=" text-2xl font-semibold text-sky-900">Podés enviarnos un mail a info@fgaconsultora.com.ar</p>
            <p className="text-2xl font-semibold text-sky-900">También podés llamarnos directamente a +54 XXXX-XXXX.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact