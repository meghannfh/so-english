export default function Menu({ handleLinkIsClicked }){

  /*check for truthy of open. if true then on click of one of the links we need to set the top of the menu to 0 again*/
  const handleLinkClick = (e) => {
    e.preventDefault();
    const idx = (e.target.href).indexOf("#")
    let section = (e.target.href).slice(idx+1);
    const element = document.getElementById(section);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    handleLinkIsClicked()
  }
  /*have the height & text dynamically switch to screen and text 3xl only when it is shown */
  return(
    <div>
      <ul className="flex flex-col pt-14 h-screen text-3xl md:text-lg md:p-0 md:flex-row md:h-20 md:justify-center md:gap-6 md:items-center lg:pr-0 lg:text-xl bg-white md:bg-transparent" onClick={(e) => handleLinkClick(e)}>
      	<li>
      	  <a href="#section1" className="hover-underline-animation">services</a>
      	</li>
      	<li>
      	  <a href="#section2" className="hover-underline-animation">method</a>
      	</li>
      	<li>
      	  <a href="#section3" className="hover-underline-animation">about</a>
      	</li>
      	<li>
      	  <a href="#section5" className="hover-underline-animation">contact</a>
      	</li>
      </ul>
    </div>
  )
}