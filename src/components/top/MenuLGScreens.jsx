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
    /*<ul className={`flex flex-row gap-6 text-sm transition-colors ease-in-out ${scrollPastTop ? "text-black" : "text-white"}`} onClick={(e) => handleLinkClick(e)}> */
    <ul className="flex flex-row gap-3 rounded-full relative" onClick={(e) => handleLinkClick(e)}>
      {/* <div className="nav-current bg-stone-500 rounded-full"></div> */}
      <li className="text-white px-3 rounded-full bg-neutral-600">
        <a href="#top">トップ</a>
      </li>
      <li className="bg-neutral-600 text-white rounded-full">
        <a href="#section1">サービス</a>
      </li>
      <li className="bg-neutral-600 text-white rounded-full">
        <a href="#section2">アバウト</a>
      </li>
      <li className="bg-neutral-600 text-white rounded-full">
        <a href="#section3">情報</a>
      </li>
      <li className="outline outline-amber-600 text-white bg-amber-600 font-bold rounded-full">
        <a href="#section4">お問い合わせ</a>
      </li>
    </ul>
  )
}