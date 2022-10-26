import Image from 'next/image'
import soImage from '../public/soichiHomePageGraphic.svg'
import AbtBtn from './AbtBtn'
import Experience from './about pages/Experience'
import Education from './about pages/Education'

export default function About(){

    return(
        <div className='grid md:grid-cols-2 items-center h-screen py-6 md:pr-10 md:h-fit' id="about">
            <div className='justify-self-center hidden md:grid h-80 w-80 rounded-full overflow-hidden'>
                <Image
                objectFit='contain'
                width={500}
                height={500}
                src={soImage}/>
            </div>
            <div className='w-fit justify-self-center'>
                <h2 className="text-5xl md:text-6xl p-3 mb-3 text-center">Experience</h2>
                <AbtBtn text="Education" />
                <Education />
                <AbtBtn text="Experience" />
                <Experience />
            </div>
        </div>
    )
}