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
    <div className="h-80">
      <div className="w-full h-[80%] flex flex-row">
        <div className="flex-1 w-full object-contain flex justify-center">
          <img src={"https://res.cloudinary.com/dc1aiqs4p/image/upload/v1692933249/logo-footer-webp_ut72lx.webp"} alt={'so english logo'} className="h-full"/>
        </div>
        <div className="h-full flex-1">
          <ul className="h-full flex flex-row footer-list font-light text-md">
            <li>
              <a href="#section2" onClick={(e) => handleLinkClick(e, 'section1')}>Services</a>
              <a href="#section3" onClick={(e) => handleLinkClick(e, 'section2')}>Method</a>
            </li>
            <li>
              <a href="#section5" onClick={(e) => handleLinkClick(e, 'section3')}>About</a>
              <a href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[20%] text-center text-sm">
        <h5>© SOENGLISH 2023 | All Rights Reserved</h5>
      </div>
    </div>
  )
}