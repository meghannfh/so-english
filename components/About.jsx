import Image from 'next/image'
import soImage from '../public/soichiHomePageGraphic.svg'
import AbtBtn from './AbtBtn'
import Experience from './about pages/Experience'
import Education from './about pages/Education'

export default function About(){

    return(
        <div className='grid md:grid-cols-2 items-center h-screen md:h-fit border-4 border-blue-500' id="about">
            <div className='justify-self-center hidden md:grid'>
                <Image src={soImage}/>
            </div>
            <div className='w-fit justify-self-center'>
                <h2 className="text-5xl md:text-6xl p-3 mb-10 text-center">Qualifications</h2>
                <AbtBtn text="Education" />
                <Education />
                <AbtBtn text="Experience" />
                <Experience />
            </div>
        </div>
    )
}