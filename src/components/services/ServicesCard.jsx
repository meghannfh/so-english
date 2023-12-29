import { useState, useEffect } from 'react';
import { PiHandTapThin } from "react-icons/pi";

export default function ServiceCard({ icon, title, subtitle, description, idx }) {
  const [showBack, setShowBack] = useState(false)
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const backCardBg = ["oneCard", "twoCard", "threeCard", "fourCard", "fiveCard", "sixCard"]
  const greenCardIndices = [0, 3, 4]
  //if user resized from small to md lg screen and the back of the card is displayed then they won't be able to flip it
  useEffect(() => {
    function handleResize() {
      const screenSize = window.innerWidth <= 1024;
      setIsTabletOrSmaller(screenSize);
      setShowBack(screenSize ? showBack : false)
    }
    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);
    return () => {
    window.removeEventListener("resize", handleResize);
    };
  }, [showBack]);

  const handleClick = () => {
    if(isTabletOrSmaller){
      setShowBack(!showBack)
    } else {
      setShowBack(false)
    }
  }

  return (
    <div className="w-full h-72 lg:h-80 xl:h-96 parent-card rounded-lg" data-testid="service-card" onClick={handleClick}>
      {/*begin content card container */}
      <div className={showBack ? "content flipped" : "content"}>
        {/*begin front of card */}
        <div className={greenCardIndices.includes(idx) ? "front front--green" : "front"}>
          <span className="text-5xl" data-testid="services-card-icon">{icon}</span>
          <h5 className="text-xl font-semibold">{title}</h5>
          <h6 className="text-md text-center leading-loose">{subtitle}</h6>
          <span className="flex lg:hidden">
            <PiHandTapThin />
          </span>
        </div>
        {/*begin back of card*/}
        <div className="back bg-cover" id={backCardBg[idx]}>
          <span className="absolute top-0 left-0 w-full h-full backdrop-contrast-125 bg-black/75 p-5 sm:p-10 md:p-14 lg:p-20">
            <p className="w-full h-full rounded-sm leading-loose text-white flex items-center">{description}</p>
          </span>
        </div>
      </div>
    </div> 
  )
}