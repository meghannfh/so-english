import Image from 'next/image'
import soPhoto from '../public/soichiHomePageGraphic.svg'
import {BsSpotify} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

export default function Top(){
    return(
        //grid md:grid-cols-2 md:items-center mx-5 border-2
        <div className="grid md:grid-cols-2 md:items-center mx-5 border-2">

                <div className='w-fit justify-self-center'>
                    <div className='flex flex-row text-5xl md:text-7xl lg:text-8xl'>
                        <h2 className="">So</h2>
                        <h3 className="font-thin">English!</h3>
                    </div>
                     <div className='flex flex-row-reverse items-center justify-between'>
                         <h4 className="text-2xl">英語教室</h4>
                         <ul className="flex flex-row items-center gap-x-3">
                             <li className='text-2xl'><BsSpotify className="cursor-pointer" /></li>
                             <li className='text-2xl'><FaInstagramSquare className="cursor-pointer" /></li>
                             <li className='text-3xl'><FiYoutube className="cursor-pointer" /></li>
                         </ul>
                    </div>
                </div>

            <div className="">
                <Image 
                layout="responsive"
                src={soPhoto} 
                width="500px"
                height="500px"
                alt="photo of soichi smiling facing to the right" />
            </div>
        </div>
    )
}