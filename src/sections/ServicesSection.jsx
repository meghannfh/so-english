import { lazy, Suspense } from "react";
const ServicesCards = lazy(() => import("../components/services/ServicesCards"));

export default function ServicesSection(){
  return (
    <main className="bg-white py-24 px-6 md:px-32 lg:px-64 xl:px-72">
      <h3 className="w-full text-xl lg:text-3xl pb-10">
      SO ENGLISH!のMission<br/>
      明日がもっと、楽しみになる
      </h3>
      <section>
        <p className="paragraph-styles">「明日がもっと、楽しみになる」をSO ENGLISH!の新たなスローガンにしたのは2023年、SO ENGLISH!R(セーラームーンRからとっています)と題し、10年やってきた教室に革命(Revolution)が必要だと思ったからです。</p>
        <p className="paragraph-styles">以前は、相手によって出す自分を変え、他人から好かれることに徹底していた私ですが、3度の留学を経て、Gayであることだけでなく、海外で同性結婚をして子供を育てたい夢があることや、絵や音楽やセーラームーンが大好きな自分を、誰に対しても出していこうと決めると、人生がより一層楽しく、生きやすくなりました。</p>
        <p className="paragraph-styles">私は「英語は世界へのチケット」だとよく言っていますが、その切符が連れて行ってくれる「世界」は想像できないもので溢れています。そこではきっと、今まで見たことのない自分の意外な一面も見ることができます。揺るがない信念だと思っていたものが、いとも簡単に崩れることもあるかもしれません。起こる出来事が変われば人生が変わる。でも、そんな大それた理由でなくても、明日の自分の成長が楽しみになる、それだけで日々の彩度が少し上がると思うのです。</p>
        <p className="paragraph-styles">英語を勉強する方は、みんな違う目的を持っています。その一人ひとりに、明日の楽しみを一つ増やすお手伝いができたらという思いで運営しています。</p>
      </section>
      <div className="w-full py-20">
        <h3 className="text-xl lg:text-3xl pb-10">SOがお手伝いできること</h3>
        <h4>英語の先生ですが、LGBTQ+の相談も、翻訳も、日本語の先生も、ラジオパーソナリティーもやります。</h4>
      </div>
      
      <Suspense>
        <ServicesCards />
      </Suspense>
    </main>
  )
}