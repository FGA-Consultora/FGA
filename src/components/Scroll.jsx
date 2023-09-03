import {useEffect, useState} from "react";

const Scroll = () => {
    
    const backToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };
    
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

  return <>
  
  <button onClick={backToTop} title="Go To Top"
        className={`shadow-2xl fixed z-90 bottom-28 right-7 border-0 w-14 h-14 rounded-full drop-shadow-md bg-sky-700 hover:bg-sky-600 text-white text-4xl font-semibold ${showButton ? "visible" : "invisible"}`}><svg fill="#e0f2fe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="17-Arrow Up"><path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z"/><path d="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"/></g></svg></button>
  
  </>;
};

export default Scroll;
