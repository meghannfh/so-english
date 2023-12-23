import TopSection from "./sections/TopSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import MethodSection from "./sections/MethodSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

import { useState, useEffect, useRef } from "react";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: "0px", threshold: ".5" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting])

  return (
    <div className="h-screen relative fixed-width-xlg-screens">
    <TopSection />
      <div>
        <ServicesSection />
      </div>
      <div>
        <div className="h-screen bg-page-break-425 md:bg-page-break-768 lg:bg-page-break-1024 xl:bg-page-break-1440 bg-cover bg-center bg-no-repeat bg-fixed"> {/*add this bg to the tailwindcss config after resizing and converting AFIV */}
        </div>
        <div ref={ref}>
          <AboutSection isIntersecting={isIntersecting}/>
        </div>
        <aside className="h-[550px] w-screen overflow-hidden object-center">
          <picture>
            <img className="w-full h-full object-center object-cover" src="https://res.cloudinary.com/dc1aiqs4p/image/upload/v1687283090/ec2da6c1-20bf-4388-8adc-775af6ece17a_q4ujpu.jpg"/>
          </picture>
        </aside>
        <MethodSection />
        <ContactSection />
        <FooterSection />
      </div>
      {/* <BackToTop /> */}
    </div>
  )
}

export default App;
