import Head from 'next/head'
import Nav from '../components/Nav'
import Top from '../components/Top'
import About from'../components/About'
import Guide from '../components/resourse pages/Guide'

export default function Home() {
  return (
    <div className='bg-white text-gray-900'>
      <Head>
        <title>So English 英語教室</title>
      </Head>
      <nav className='sticky top-0 bg-white z-10'>
        <Nav />
      </nav>
      <main>
        <Top />
        <About />
        <Guide />
      </main>
    </div>
  )
}
