import React from 'react'
import Logo from './Logo';

const Navbar = () => {
  return <>
<div className="footer items-center p-1 px-2 bg-gradient-to-r from-slate-600 to-slate-900 text-neutral-content">
  <div className="sm:grid-flow-col">
  <a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-white w-5 h-5"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
  <a className='mr-20 text-white'><p>+54 XXXX - XXXX</p></a>
  <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
  </a>
  <a className='text-white'>info@fgaconsultora.com</a>

  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-current" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
  </div>
</div>


    <div className="navbar bg-white shadow-2xl text-black">
      <div className="navbar-start ">
        <div className="dropdown">
            {/* responsive menu hidden */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-white rounded-box divide-y">
            {/* responsive menu hidden content */}
            <li tabIndex={0}>
              <a className="bg-white justify-between text-xs">
              Servicio de Industrias
              </a>
              <ul className="bg-white rounded-box z-10 divide-y">
                <li><a className='text-xs'>Serv. Integral de Seguridad e Hig.</a></li>
                <li><a className='text-xs'>Mediciones en el Ambiente Laboral</a></li>
                <li><a className='text-xs'>Evaluación y Gestión de Riesgos</a></li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a className="justify-between text-xs">
              Protección contra Incendios
              </a>
              <ul className="bg-white rounded-box z-10 divide-y">
                <li><a className='text-xs'>Sistema de Autoprotección - &#40;Ley 5920&#41;</a></li>
                <li><a className='text-xs'>Planes de Evacuación y Simulacros</a></li>
                <li><a className='text-xs'>Estudio de Carga de Fuego</a></li>
                <li><a className='text-xs text-justify'>Entren. de Brigadas contra Incendio</a></li>
                <li><a className='text-xs text-justify'>Capac. y Entren. en manejo de Extintores e Hidrantes</a></li>
                <li><a className='text-xs text-justify'>Ignifugado - &#40;Aplicación de Material Ignifugo y Certif.&#41;</a></li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a className="justify-between text-xs">
              Mediciones
              </a>
              <ul className="bg-white rounded-box z-10 divide-y">
                <li><a className='text-xs'>Ruido</a></li>
                <li><a className='text-xs'>Iluminación</a></li>
                <li><a className='text-xs'>Puesta a Tierra y Contin. de las Masas</a></li>
                <li><a className='text-xs'>Testeo de Disyuntores</a></li>
                <li><a className='text-xs'>Co2 - &#40;Dióxido de carbono&#41;</a></li>
                <li><a className='text-xs'>Ventilación</a></li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a className="justify-between text-xs">
              Obras en Construcción
              </a>
              <ul className="bg-white rounded-box z-10 divide-y">
                <li><a className='text-xs'>Prog. de Seguridad y Aviso de Obra</a></li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a className="justify-between text-xs">
              Medioamb.
              </a>
              <ul className="bg-white rounded-box z-10 divide-y">
                <li><a className='text-xs'>Asesoramiento Legal</a></li>
                <li><a className='text-xs'>Trámites y Habilitaciones</a></li>
                <li><a className='text-xs'>Mediciones Ambientales</a></li>
                <li><a className='text-xs'>Gestión de Efluentes Líquidos</a></li>
                <li><a className='text-xs'>Gestión de Efluentes Gaseosos</a></li>
                <li><a className='text-xs'>Gestión de Efluentes Sólidos</a></li>
                <li><a className='text-xs'>Gestión Integral de Residuos</a></li>
                <li><a className='text-xs'>Impacto Ambiental</a></li>
              </ul>
            </li>

            <li tabIndex={0}>
              <a className="justify-between text-xs bg-blue-600 hover:bg-blue-500 text-white">
              <strong>CONTACTO</strong>
              </a>
            </li>

          </ul>
            {/* LOGO */}
        </div>
        <a className="btn btn-ghost mb-5 hover:bg-slate-100">
        <Logo/>
        </a>
      </div>
            {/* lg display menu */}
      <div className="navbar-center hidden lg:flex pl-20">
        <ul className="menu menu-horizontal p-0 text-xs font-semibold">
            {/* lg display menu content */}          
          <li tabIndex={0}>
            <a>Servicio de Industrias</a>
            <ul className="bg-white z-10 divide-y">
              <li><a>Servicio Integral de Seguridad e Higiene</a></li>
              <li><a>Mediciones en el Ambiente Laboral</a></li>
              <li><a>Evaluación y Gestión de Riesgos</a></li>
            </ul>
          </li>

          <li tabIndex={0}>
            <a>Protección contra Incendios</a>
            <ul className="bg-white z-10 divide-y">
              <li><a>Sistema de Autoprotección - &#40;Ley 5920&#41;</a></li>
              <li><a>Planes de Evacuación y Simulacros</a></li>
              <li><a>Estudio de Carga de Fuego</a></li>
              <li><a>Entrenamiento de Brigadas contra Incendio</a></li>
              <li><a>Capacitación y Entrenamiento sobre el manejo de Extintores e Hidrantes</a></li>
              <li><a>Ignifugado - &#40;Aplicación de Material Ignifugo y Certificación&#41;</a></li>
            </ul>
          </li>

          <li tabIndex={0}>
            <a>Mediciones</a>
            <ul className="bg-white z-10 divide-y">
              <li><a>Ruido</a></li>
              <li><a>Iluminación</a></li>
              <li><a>Puesta a Tierra y Continuidad de las Masas</a></li>
              <li><a>Testeo de Disyuntores</a></li>
              <li><a>Co2 - &#40;Dióxido de carbono&#41;</a></li>
              <li><a>Ventilación</a></li>
            </ul>
          </li>

          <li tabIndex={0}>
            <a>Obras en Construcción</a>
            <ul className="bg-white z-10 divide-y">
              <li><a>Programa de Seguridad y Aviso de Obra</a></li>
              
            </ul>
          </li>

          <li tabIndex={0}>
            <a>Medioambiente</a>
            <ul className="bg-white z-10 divide-y">
              <li><a>Asesoramiento Legal</a></li>
              <li><a>Trámites y Habilitaciones</a></li>
              <li><a>Mediciones Ambientales</a></li>
              <li><a>Gestión de Efluentes Líquidos</a></li>
              <li><a>Gestión de Efluentes Gaseosos</a></li>
              <li><a>Gestión de Efluentes Sólidos</a></li>
              <li><a>Gestión Integral de Residuos</a></li>
              <li><a>Impacto Ambiental</a></li>
            </ul>
          </li>

        </ul>
      </div>
            {/* Contact */}
      <div className="navbar-end invisible md:visible">
        <a className="btn text-white bg-blue-700 hover:bg-blue-500">CONTACTO</a>
      </div>
    </div>
  </>;
}

export default Navbar