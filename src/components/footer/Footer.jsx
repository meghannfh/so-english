export default function Footer() {

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <footer className="h-80 px-6 md:px-32 lg:px-64 xl:px-72">
      <aside className="w-full h-[80%] grid grid-cols-2 items-center">
        <img src={"https://res.cloudinary.com/dc1aiqs4p/image/upload/v1692933249/logo-footer-webp_ut72lx.webp"} alt={'so english logo'} className="h-3/4"/>
        <ul className="h-auto flex flex-row footer-list font-light text-md">
          <li>
            <a href="#section2" onClick={(e) => handleLinkClick(e, 'section1')}>Services</a>
            <a href="#section3" onClick={(e) => handleLinkClick(e, 'section2')}>Method</a>
          </li>
          <li>
            <a href="#section5" onClick={(e) => handleLinkClick(e, 'section3')}>About</a>
            <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>Contact</a>
          </li>
        </ul>
      </aside>
      <span className="h-[20%] text-center text-sm">
        <h5>© SOENGLISH 2023 | All Rights Reserved</h5>
      </span>
    </footer>
  )
}