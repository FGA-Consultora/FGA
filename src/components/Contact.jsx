import {useState, useRef} from "react"
import {useInView} from "react-intersection-observer"
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const {ref: sectionCont1, inView: isSectionCont1Visible} = useInView({threshold: 0.1, triggerOnce: true})
  const {ref: sectionCont2, inView: isSectionCont2Visible} = useInView({threshold: 0.1, triggerOnce: true})

  const [formState, setFormState] = useState({}); //State de datos del form
  const [formFail, setFormFail] = useState(false); //State fail attempt
  const [formSuccess, setFormSuccess] = useState(false); //State success attempt
  
  //Función para cada Input del Form en onChange, y que guarde en el formState
  const changeHandler = (event) => {
    setFormState({...formState, [event.target.name]: event.target.value})
  };

  //useRef RECAPTCHA
  const captcha = useRef(null);

  const onChange = () => {
    console.log("respuesta: ", captcha.current.getValue());
  }

  //Función para todo el Form
  const submitHandler = (event) => {
    event.preventDefault();
    
    //IF CAPTCHA RESUELTO
    if(captcha.current.getValue()) {
      
      let nombre = formState.nombre;
      let telefono = formState.telefono;
      let mensaje = formState.mensaje;
      
      //Lógica del Form (se puede usar formState.nombre.trim())
      if(nombre === undefined || telefono === undefined || mensaje === undefined || nombre.trim() === "" || telefono.trim() === "" || mensaje.trim() === "") {
        //Fail positivo
        setFormFail(true);
        setFormSuccess(false);

        grecaptcha.reset();
      }

      else{
        //Maquetado de Mail
        let body = `
        <b>Nombre: </b>${nombre}
        <br/>
        <b>Telefono: </b>${telefono}
        <br/>
        <b>Mensaje: </b>${mensaje}
        `;

        //Lógica del envío
        const config = {
          SecureToken: "52837d5d-5e80-43bd-b416-7f7e64a9f293",
          To: "consultora.fga@gmail.com",
          From: "consultora.fga@gmail.com",
          Subject: "Consulta Web de Formulario",
          Body: body,
        }

        //Fail negativo
        setFormFail(false);
        setFormSuccess(true)

        //Envio de mensaje
        window.Email.send(config);

        //RESET RECAPTCHA
        grecaptcha.reset();

        //CLEAR FORM
        formState.nombre = undefined;
        formState.telefono = undefined;
        formState.mensaje = undefined;
      }
    }
    else {
      
      //Falla desde el CAPTCHA
      setFormFail(true);
      setFormSuccess(false);

      grecaptcha.reset();
    }
  }

  return (
    <>
      {/*Contact*/}
      <div className="font-Roboto hero h-[75rem] md:h-[65rem] lg:h-[45rem] lg:px-20 lg:py-5 mx-auto" style={{ backgroundImage: `url(/form.webp)` }}>
        <div className="hero-content gap-12 flex-col-reverse lg:flex-row-reverse">
          <div ref={sectionCont1} className={`w-full max-w-[550px] items-center justify-center ${isSectionCont1Visible ? "slider-btn-shower2" : ""}`}>
            <form id="form" onSubmit={submitHandler} method="POST">
              <div className="mb-1">
                <label htmlFor="nombre" className="mb-1 block text-lg font-semibold text-amber-500">
                  Nombre
                </label>
                <input onChange={changeHandler} value={formState.nombre || ""} type="text" name="nombre" id="nombre" placeholder="* Ingrese nombre" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-1">
                <label htmlFor="telefono" className="mb-1 block text-lg font-semibold text-amber-500">
                  Teléfono
                </label>
                <input onChange={changeHandler} value={formState.telefono || ""} type="text" name="telefono" id="telefono" placeholder="* (XX) XX XXXX-XXXX" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-1">
                <label htmlFor="mensaje" className="mb-1 block text-lg font-semibold text-amber-500">
                  Mensaje
                </label>
                <textarea onChange={changeHandler} value={formState.mensaje || ""} rows="4" name="mensaje" id="mensaje" placeholder="* Escribí tu consulta aquí" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
              </div>

              {/*CONDICIONAL FORMFAIL*/}
              {formFail === false ? null : 
                <div className="my-2 alert alert-error text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>* Por favor, complete los campos vacíos y resuelva el CAPTCHA</span>
                </div>
              }

              {/*BOTON RECAPTCHA*/}
              <ReCAPTCHA className="my-2"
                  sitekey="6LcrK_YnAAAAAIznHpZKdPHFeC-NvRk9if_2nsKK"
                  ref={captcha}
                  onChange={onChange}
                  
              />

              {/*BOTON ENVIAR*/}
              <div className="text-center">
                <button type="submit" value="send" className="hover:shadow-form rounded-md bg-sky-700 py-3 px-8 text-lg font-semibold text-white outline-none">Enviar</button>
              </div>

              {/*CONDICIONAL FORMSUCCESS*/}
              {formSuccess === false ? null : 
              
              <div className="my-2 alert alert-success text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>¡Mensaje enviado!</span>
              </div>
              
              }

            </form>

          </div>

          <div ref={sectionCont2} className={`justify-center text-center items-center mx-8 max-w-[550px] sm:max-w-none lg:mx-18 slider-btn ${isSectionCont2Visible ? "slider-btn-shower2" : ""}`}>
            <p className="text-4xl font-semibold text-amber-500 pb-4">Envianos un mensaje y responderemos a la brevedad</p>
            <p className=" text-2xl font-semibold text-sky-900">Podés enviarnos un mail a <button className="hover:text-sky-700" onClick={() => window.location = 'mailto:info@fgaconsultora.com.ar'}>info@fgaconsultora.com.ar</button></p>
            <br></br>
            <p className="text-2xl font-semibold text-sky-900">También podés llamarnos o enviarnos un mensaje a <a className="hover:text-sky-700" href="https://wa.link/997rar">+54 11 2395-9319</a></p>
            <div className={`mt-2 mx-auto h-44 w-44 bg-cover slider-btn ${isSectionCont2Visible ? "slider-btn-shower2" : ""}`} style={{ backgroundImage: `url(/QR.webp)` }}></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact