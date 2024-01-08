import SocialsBar from "../components/top/socials/SocialsBar";
import Nav from "../components/top/nav/Nav";
import { useState, useEffect, useRef } from "react";

export default function TopSection(){
  const [scrollPastTop, setScrollPastTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const topSectionHeight = window.innerHeight; // Height of the top section

      setScrollPastTop(scrollPosition > topSectionHeight);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <main className="relative h-screen bg-top-image bg-center bg-cover bg-no-repeat"  id="top">
      <nav className={scrollPastTop ? "fixed top-0 left-0 z-50 animate-delayed fadeInUp1" : "fixed top-0 left-0 z-50 animate-delayed fadeInUp1"}>
        <Nav scrollPastTop={scrollPastTop}/>
      </nav>
      <h2 className="flex flex-col gap-3 absolute top-60 md:top-48 lg:top-52 left-24 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase z-20">
        <span className="animate-delayed fadeInUp2">explore</span>
        <span className="animate-delayed fadeInUp3">evolve</span>
        <span className="animate-delayed fadeInUp4">transcend</span>
      </h2>
      <aside className="md:hidden absolute bottom-10 md:bottom-16 xl:bottom-24 w-full flex items-center justify-center text-3xl lg:text-9xl text-white z-20">
        <SocialsBar location={"top"}/>
      </aside>
      <div className="absolute w-full h-full z-10 bg-black/25 backdrop-contrast-125"></div>
    </main>
  )
}