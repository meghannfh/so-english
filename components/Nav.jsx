import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Nav(){
    return (
        <nav className="py-5">
            <ul className="flex grow justify-evenly items-center">
              <li>So English</li>
              <li><a href="#about">About</a></li>
              <li><a href="#story">Story</a></li>
              <li>Resources</li>
              <li className='py-1 px-4 outline uppercase tracking-widest rounded-full outline-outline-green text-btn-green hover:bg-btn-green hover:text-gray-100'><a href="">Line 登録</a></li>
            </ul>
        </nav>
    )
}