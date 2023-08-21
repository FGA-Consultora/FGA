import {useEffect,useState} from "react";

const Scroll = () => {
    
    const backToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };
    
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
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
        className={`transition ease-in-out duration-300 shadow-2xl fixed z-90 bottom-28 right-7 border-0 w-14 h-14 rounded-full drop-shadow-md bg-sky-700 hover:bg-sky-600 text-white text-5xl font-semibold ${showButton ? "inline-block" : "hidden"}`}>&#8613;</button>
  
  </>;
};

export default Scroll;
