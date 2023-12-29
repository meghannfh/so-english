import { useState } from "react";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti/index.esm"
import About1 from "../components/about/About1";
import About2 from "../components/about/About2";
import About3 from "../components/about/About3";
import About4 from "../components/about/About4"


export default function AboutSection({ isIntersecting }) {
  const [idx, setIdx] = useState(0);

  const paragraphStyles = "indent-5 pb-3 leading-loose"
  const h4Styles = "pb-6 pt-3 text-lg font-semibold"

  const aboutSections = [
    <About1 h4Styles={h4Styles} paragraphStyles={paragraphStyles}/>,
    <About2 h4Styles={h4Styles}  paragraphStyles={paragraphStyles}/>,
    <About3 h4Styles={h4Styles}  paragraphStyles={paragraphStyles}/>,
    <About4 h4Styles={h4Styles}  paragraphStyles={paragraphStyles}/>,
  ]

  const handleClick = (e) => {
    const currBtn = e.currentTarget.id;

    setIdx(prevIdx => {
      let newIndex = prevIdx;
      
      if (currBtn === "up" && prevIdx < aboutSections.length - 1) {
        newIndex = prevIdx + 1;
      } else if (currBtn === "down" && prevIdx > 0) {
        newIndex = prevIdx - 1;
      }
      
      return newIndex;
    });
  };

  return(
    <div id="section2" className="relative py-10 px-6 md:px-32 lg:px-64 xl:px-72">
      <div className="w-full text-xl lg:text-3xl flex flex-col pb-10 gap-3">
        <h3>Who is SO?<br></br>SOの生い立ちと3度の留学経験</h3>
      </div>
      {isIntersecting && <div className="fixed right-10 top-48 text-7xl lg:right-40 flex flex-col items-center justify-center text-slate-800 font-extrabold">
        <button className="transition-colors duration-300 ease-in-out hover:text-slate-400" id="down" onClick={handleClick}><i class="gg-chevron-up"></i></button>
        <span className="">{idx + 1}</span>
        <button className="transition-colors duration-300 ease-in-out hover:text-slate-400" id="up" onClick={handleClick}><i class="gg-chevron-down"></i></button>
      </div>}
      <div>
        {aboutSections[idx]}
      </div>
    </div>
  )
}