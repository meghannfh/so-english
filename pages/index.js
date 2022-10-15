import Head from 'next/head'
import Nav from '../components/Nav'
import Top from '../components/Top'
import About from'../components/About'
import LineBtn from '../components/LineBtn'

export default function Home() {
  return (
    <div>
      <Head>
        <title>So English 英語教室</title>
      </Head>
      <nav><Nav /></nav>
      <main>
        <Top />
        <About />
      </main>
    </div>
  )
}
