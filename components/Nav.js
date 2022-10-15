import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Nav(){
    return (
        <nav className="py-10">
            <ul className="flex grow justify-evenly items-center">
              <li>So English</li>
              <li>About</li>
              <li>Story</li>
              <li>Resources</li>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
            </ul>
        </nav>
    )
}