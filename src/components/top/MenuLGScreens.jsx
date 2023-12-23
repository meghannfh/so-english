export default function MenuLGScreens({ scrollPastTop }){

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
  }
  /*have the height & text dynamically switch to screen and text 3xl only when it is shown */
  return(
    <ul className={`flex flex-row gap-4 text-lg font-light text-md transition-colors ease-in-out ${scrollPastTop ? "text-black" : "text-white"}`} onClick={(e) => handleLinkClick(e)}>
      <li>
        <a href="#section1">services</a>
      </li>
      <li>
        <a href="#section2">about</a>
      </li>
      <li>
        <a href="#section3">method</a>
      </li>
      <li>
        <a href="#section4">contact</a>
      </li>
    </ul>
  )
}