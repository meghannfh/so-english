export default function MenuLGScreens({ scrollPastTop }){

  /*check for truthy of open. if true then on click of one of the links we need to set the top of the menu to 0 again*/
  const handleLinkClick = (e) => {
    console.log('clicked')
    e.preventDefault();
    const idx = (e.target.href).indexOf("#")
    console.log(idx)
    let section = (e.target.href).slice(idx+1);
    console.log(section)
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
      <li>
        <a href="#top" className="text-white rounded-full bg-neutral-600 transition-colors hover:bg-amber-600 px-3 py-2">トップ</a>
      </li>
      <li>
        <a href="#section1" className="text-white rounded-full bg-neutral-600 transition-colors hover:bg-amber-600 px-3 py-2">サービス</a>
      </li>
      <li>
        <a href="#section2" className="text-white rounded-full bg-neutral-600 transition-colors hover:bg-amber-600 px-3 py-2">アバウト</a>
      </li>
      <li>
        <a href="#section3" className="text-white rounded-full bg-neutral-600 transition-colors hover:bg-amber-600 px-3 py-2">情報</a>
      </li>
      <li>
        <a href="#section4" className="outline outline-amber-600 text-white bg-amber-600 transition-colors-shadow hover:bg-amber-700 hover:drop-shadow-lg font-bold rounded-full px-3 py-2">お問い合わせ</a>
      </li>
    </ul>
  )
}