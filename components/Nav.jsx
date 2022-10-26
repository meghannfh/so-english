import {BsFillMoonStarsFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Nav(){
    return (
        <nav className="py-3">
            <ul className="flex grow justify-between md:justify-evenly items-center px-2">
              <li>So English</li>
              <li className="hidden md:flex h-12 w-28"><a href="#about">About</a></li>
              <li className="hidden md:flex h-12 w-28"><a href="#story">Story</a></li>
              <li className="hidden md:flex h-12 w-28">Resources</li>
              <li className='hidden md:flex py-1 px-4 outline uppercase tracking-widest rounded-full outline-outline-green text-btn-green hover:bg-btn-green hover:text-gray-100'><a href="">Line 登録</a></li>
              <div className='flex items center grow justify-end gap-4  md:hidden'>
                <li className='py-1 px-4 outline uppercase tracking-widest rounded-full outline-outline-green text-btn-green hover:bg-btn-green hover:text-gray-100'><a href="">Line 登録</a></li>
                <li className="text-2xl"><GiHamburgerMenu /></li>
              </div>
            </ul>
        </nav>
    )
}