import Image from 'next/image'
import soPhoto from '../public/soichiHomePageGraphic.svg'
import soGraphic from '../public/soichiBgLg.png'
import LineBtn from './LineBtn'
import {BsSpotify} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

export default function Top(){
    return(
        //grid md:grid-cols-2 md:items-center mx-5 border-2
        <div className="flex justify-center lg:justify-around lg:flex-row h-fit bg-gradient-to-r from-blue-500 to-cyan-500 text-white  pt-10">

                <div className='flex flex-col w-96 md:w-72 lg:w-fit pl-10 lg:px-14'>

                    <div className='text-8xl lg:text-9xl md:w-96'>
                        <h2>Some</h2>
                        <h3 className="font-thin">Great Quote.</h3>

                        <div className='flex flex-row-reverse items-center justify-end my-5'>
                            {/* <h4 className="text-2xl">英語教室</h4> */}
                            <ul className="flex flex-row items-center gap-x-3">
                                <li className='text-2xl'><BsSpotify className="cursor-pointer" /></li>
                                <li className='text-2xl'><FaInstagramSquare className="cursor-pointer" /></li>
                                <li className='text-3xl'><FiYoutube className="cursor-pointer" /></li>
                            </ul>
                        </div>
                    </div>

                    {/* <h6 className='border-2 my-10 text-lg w-3/4'>So ENGLISH!英語教室のページにお越しいただき、ありがとうございます。主宰のSoです。これを読んで頂いている方の多くはおそらく、英語が話せるようになりたくてここに辿り着いたのではと思います。</h6> */}
                    {/* <div className='h-[80px] w-3/4 lg:hidden my-3'>
                        <iframe src="https://open.spotify.com/embed/episode/6ROVSgmerf9aYwhOOXu95f?utm_source=generator&theme=0"></iframe>
                    </div> */}
                    <LineBtn />
                </div>

            <div className="relative hidden md:grid overflow-hidden lg:mr-14">
                {/* <div className='h-[80px] w-100 rounded-2xl absolute top-72 left-0 right-0 z-10'>
                    <iframe src="https://open.spotify.com/embed/episode/6ROVSgmerf9aYwhOOXu95f?utm_source=generator&theme=0"></iframe>
                </div> */}
                <Image 
                objectFit='cover'
                objectPosition="right top"
                priority="true"
                src={soGraphic}
                alt="photo of soichi smiling facing to the right" 
                width={500}
                height={500}
              />
            </div>
        </div>
    )
}