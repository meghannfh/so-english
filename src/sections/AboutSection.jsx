import About1 from "../components/about/About1";
import About2 from "../components/about/About2";
import About3 from "../components/about/About3";
import About4 from "../components/about/About4"


export default function AboutSection() {

  const aboutSections = [
    <About1/>,
    <About2/>,
    <About3/>,
    <About4/>,
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

  //we're going to make a slider so instead display flex or grid each section in abt
  //arrange horizontally next to each other
  return(
    <section className="py-24 px-6 md:px-32 lg:px-64 xl:px-72">
      <h3 className="w-full text-xl lg:text-3xl pb-10">Who is SO?<br/>SOの生い立ちと3度の留学経験</h3>

      <div>
        {aboutSections}
      </div>
    </section>
  )
}