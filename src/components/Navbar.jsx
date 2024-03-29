import { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //Drawer
  const [isOpen, setIsOpen] = useState(false);

  //Checkbox Drawer solución
  const miCheckbox = () => {document.getElementById("my-drawer").click()}

  

  //Timer reference on close
  const clickCondition = () => {document.getElementById("uldrawer").className = "drawer fixed h-screen w-full -z-10";}

  //Drawer button para enlaces con LINK
  const clickHandler= () => {
    //Stop body-scroll on opened Drawer
    setIsOpen(!isOpen);
    if (isOpen === true) {
      //"auto" for Firefox, overlay not suported
      document.body.style.overflow = 'auto';
      document.body.style.overflow = 'overlay';
    }
    else{
      document.body.style.overflow = 'hidden';
    }

    //Drawer z-index conditional
    if(document.getElementById("uldrawer").className !== "drawer fixed h-screen w-full z-20") {
      document.getElementById("uldrawer").className = "drawer fixed h-screen w-full z-20";
    }
    else{
      
      setTimeout(()=>{clickCondition()}, 200);
      miCheckbox()
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      
    }
  }
    //Lógica si se abre y se cierra el menú en la misma página
    const clickHandler2= () => {
      setIsOpen(!isOpen);
      if (isOpen === true) {
        document.body.style.overflow = 'auto';
        document.body.style.overflow = 'overlay';
      }
      else{
        document.body.style.overflow = 'hidden';
      }
      if(document.getElementById("uldrawer").className !== "drawer fixed h-screen w-full z-20") {
        document.getElementById("uldrawer").className = "drawer fixed h-screen w-full z-20";
      }
      else{
        //Sirve para que funcione el clickeo por fuera del drawer al cerrar
        setTimeout(()=>{clickCondition()},200);
      }
    }
    
    //Lógica para botones del menú superior
    const menuHandler= () => {
      setTimeout(()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      },0);
    } 

 /* LOGICA DE ... ACTUALIZAR TWITTER
  //Listener Dropdown
  const [isShown, setIsShown] = useState(false);

  const clickShower = (e) =>{
    setIsShown(!isShown);
    // Listener out of box click
    document.addEventListener('click', function handleClickOutsideBox(event) {
      const box1 = document.getElementById('box1');
      const box2 = document.getElementById('box2');
    //Conditional close if outside of box
      if (!box1.contains(event.target) && !box2.contains(event.target)) {
        setIsShown (false);
      }
    });
  }
//Conditional Listener
const conditionDropdown = isShown ? "visible" : "hidden";

*/

//INFO: For drawer button: <label htmlFor="my-drawer"></label>
return <>
{/*Drawer*/}
  <div id="uldrawer" className="drawer fixed h-screen w-full -z-10" >
    <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
    <div className="drawer-side">
  {/*Drawer Button clickHandler*/}
  {/*IMPORTANTE USAR clickHandler2 o no funciona salir tocando fuera del drawer*/}
      <label htmlFor="my-drawer" className="drawer-overlay" onClick={clickHandler2} ></label>
      <ul className='font-Roboto text-lg p-2 overflow-y-auto w-80 h-screen bg-white flex-col scroll_custom scroll_black'>        
  {/*IMPORTANTE USAR clickHandler2 o no funciona la X de Servicio*/}
        {/*Drawer Title*/}
        <li className='flex mb-1'><div className='font-Oswald mr-16 ml-24 mt-2.5 font-bold text-2xl text-sky-800'>SERVICIOS</div><label htmlFor="my-drawer"className='btn btn-ghost btn-circle' onClick={clickHandler2} ><svg className="fill-current text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg></label></li>

        {/*Collapse inside Drawer*/}
        <ul className="menu font-semibold text-lg sm:text-xl text-sky-800">

            <Link to='/'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Home</label>
              </li>
            </Link>

            <Link to='/Industria'>
              <li className='grid grid-flow-col  mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Servicios de Industria</label>
              </li>
            </Link>

            <Link to='/Construccion'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Construcción</label>
              </li>
            </Link>

            <Link to='/Capacitaciones'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Capacitaciones (Res. 905/15)</label>
              </li>
            </Link>

            <Link to='/Medioambiente'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Medioambiente</label>
              </li>
            </Link>

            <Link to='/Autoproteccion'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Sistemas de Autoprotección</label>
              </li>
            </Link>

            <Link to='/Consorcio'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Servicios de Consorcio</label>
              </li>
            </Link>

            <Link to='/Seguridad'>
              <li className='grid grid-flow-col mt-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Programa de Seguridad en Obra</label>
              </li>
            </Link>

            <Link to='/Mediciones'>
              <li className='grid grid-flow-col my-2'>
                <label htmlFor="my-drawer" onClick={clickHandler}><span className='text-amber-500 text-lg'>&#10095;</span>Mediciones</label>
              </li>
            </Link>
            
          </ul>

        {/*CONTACTO in Drawer*/}
        <Link to="Contactos">
          <li ><label htmlFor="my-drawer" className='text-lg bg-sky-800 btn w-full mb-5 text-white' onClick={clickHandler}>Contacto</label> </li>
        </Link>

        {/*Button disabled for mobile browser response*/}
        <li ><div className='w-full mb-5 bg-white'></div> </li>
      </ul>
    </div>
  </div>

  {/*Navbar*/}
  <div className="navbar fixed z-10 bg-white text-black">
    {/*Menu Button*/}
    <div className="flex-none">
      <label htmlFor="my-drawer" onClick={clickHandler} className="btn btn-circle btn-ghost ml-3 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
    </div>
    {/* LOGO */}
    <div className="navbar-start">
      <div onClick={() => menuHandler()} className="btn btn-ghost mb-5 hover:bg-white z-10">
        <Link to="/">
          <Logo/>
        </Link>
      </div>
    </div>
    {/*Center*/}
    <div className="navbar-center hidden md:flex">

      <Link to="/"> 
        <button onClick={() => menuHandler()} className="grid grid-flow-col z-10 invisible lg:visible">
          <p className='xl:mx-5 font-Roboto text-sky-800 text-xl btn btn-ghost normal-case px-2'>Home</p>
        </button>
      </Link>

      <Link to="/Nosotros"> 
        <button onClick={() => menuHandler()} className="grid grid-flow-col z-10 invisible lg:visible">
          <p className='xl:mx-3 font-Roboto hidden mn:flex  text-sky-800 text-xl btn btn-ghost normal-case px-2'>¿Quiénes Somos?</p>
        </button>
      </Link>

      <Link to="/Servicios">
        <button onClick={() => menuHandler()} className='xl:mx-3 font-Roboto drawer-button hidden btn btn-ghost normal-case text-xl lg:flex px-2 text-sky-800'>Servicios</button>
      </Link>

      <button className="btn btn-ghost lowercase grid grid-flow-col text-lg z-10 invisible lg:visible px-2" onClick={() => window.location = 'mailto:info@fgaconsultora.com.ar'}>
        {/*<p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-0.5 mr-0.5 text-amber-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></p>*/}
        <p className='xl:mx-3 font-Roboto text-xl text-sky-800'>info&#64;fgaco&#110;&#115;ul&#116;ora&#46;com&#46;ar</p>
      </button>

      <div className="grid grid-flow-col z-10 text-lg font-semibold bg-white invisible lg:visible px-2">
        {/*<p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 my-0.5 text-green-600"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></p>*/}
        <a href="https://wa.link/997rar" className='xl:p-2.5 rounded-lg hover:bg-gray-300 xl:mx-1 font-Roboto text-xl whitespace-nowrap text-sky-800'>+54 11 2395-9319</a>
      </div>
    
    </div>


{/*Final Drop y Contacto */}

    <div className="navbar-end invisible min-[420px]:visible">
     {/* DESTILDAR CUANADO SE CAMBIE TWITTER
     <div className="dropdown dropdown-end dropdown-open">
     */}

    {/*Listener clickShower ESTO ESTA BIEN, DESTILDAR CUANDO SE CAMBIE TWITTER
        <label id="box1"onClick={clickShower} tabIndex={0} className="btn m-1 btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></label>
        <ul id="box2" tabIndex={0} className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 ${conditionDropdown}`}>
          <li target="_blank" onClick={()=>{window.location = 'https://wa.me/+54XXXXXXXXXX?';clickShower()}} className='lg:hidden'><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-black w-5 h-5"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>+54 XXXX-XXXX</a></li>
          <li onClick={()=>{window.location = 'mailto:yourmail@domain.com';clickShower()}} className='lg:hidden'><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>info@fgaconsultora.com</a></li>
        */}

    {/*Twitter Desactualizado
          <li className='menu-horizontal'>
            <a onClick={clickShower} className='ml-4 mr-5'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            <a onClick={clickShower} className='mx-4'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-current" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg></a>
            <a onClick={clickShower} className='mx-4'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
          </li>

        </ul>
      </div>
      */}

    {/*Contacto*/}
    <Link to="/Contactos">
      <button onClick={() => menuHandler()} className="font-Roboto text-xl flex bg-amber-600 hover:bg-amber-500 rounded-tl-full rounded-br-full text-white font-semibold text-center self-center py-2 px-5">CONTACTO</button>
    </Link>
    </div>
  </div>
  <div className='h-20'></div>
</>;
}

export default Navbar;