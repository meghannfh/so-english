import { useState, useEffect } from "react";
import Menu from "./Menu";
import MenuLGScreens from "./MenuLGScreens";

export default function Nav({ scrollPastTop }){
  const [open, setOpen] = useState(false);
  const [linkIsClicked, setLinkIsClicked] = useState(false)
  function handleClick(){
    setOpen(prevOpen => !prevOpen)
  }
  function handleLinkIsClicked(){
    setLinkIsClicked(true)
  }
  useEffect(() => {
    if (linkIsClicked) {
      setOpen(false);
      setLinkIsClicked(false);
    }
  }, [linkIsClicked]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
  }

  return(
    <div className="relative w-screen h-fit fixed-width-xlg-screens">
      <div className="w-full flex flex-row items-center justify-between px-3 md:px-6">
        <div className="w-min h-[53.98px] md:h-[77.99px] flex flex-col justify-center">
          <a href="#top" onClick={(e) => handleLinkClick(e, "top")}className={`font-semibold tracking-widest lg:text-lg transition-colors ease-in-out ${scrollPastTop || open ? "text-black" : "text-white"}`}>SO<span className="italic uppercase">English!</span></a>
        </div>
        <div className="hidden md:flex">
          <MenuLGScreens scrollPastTop={scrollPastTop}/>
        </div>
        
        <div className="grid md:hidden place-content-center w-min">
          <button onClick={handleClick} className={`block hamburger focus:outline-none`}>
            <span className={ open ? `open hamburger-top ${scrollPastTop || open ? "bg-black" : "bg-white"}` : `hamburger-top ${scrollPastTop ? "bg-black" : "bg-white"}`}></span>
            <span className={ open ? `open hamburger-middle ${scrollPastTop || open ? "bg-black" : "bg-white"}` : `hamburger-middle ${scrollPastTop ? "bg-black" : "bg-white"}`}></span>
            <span className={ open ?`open hamburger-bottom ${scrollPastTop || open ? "bg-black" : "bg-white"}` : `hamburger-bottom ${scrollPastTop ? "bg-black" : "bg-white"}`}></span>
          </button>
        </div>
      </div>
      <div className={ open && !linkIsClicked ? `show menu` : `menu`}>
        <Menu handleLinkIsClicked={handleLinkIsClicked}/>
      </div>
    </div>
  )
}