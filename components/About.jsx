import Image from 'next/image'
import AbtBtn from './AbtBtn'
import Experience from './Experience'
import Education from './Education'

export default function About(){

    return(
        <div className='grid border-2 md:grid-cols-2'>
            <div className='justify-self-center'>
                {/* <Image /> */}
                lol
            </div>
            <div className='w-fit justify-self-center'>
                <h2 className="text-5xl md:text-6xl p-3 text-center">About</h2>
                <p className='hidden text-sm md:block'>So ENGLISH!英語教室のページにお越しいただき、ありがとうございます。主宰のSoです。これを読んで頂いている方の多くはおそらく、英語が話せるようになりたくてここに辿り着いたのではと思います。</p>
                <AbtBtn text="Education" />
                <Education />
                <AbtBtn text="Experience" />
                <Experience />
            </div>
        </div>
    )
}