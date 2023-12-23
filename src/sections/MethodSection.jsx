import TextbookSlider from "../components/method/TextbookSlider";

export default function MethodSection(){
  const paragraphStyles = "pb-3 leading-loose"
  const h4Styles = "pb-6 pt-3 text-xl font-semibold"

  return(
  	<div className="bg-white pt-10 py-20" id="section3">
      <h3 className="w-full font-top text-2xl lg:text-4xl flex flex-col items-center pb-10 gap-3">
        SO's STRATEGY<br></br>
        どうやって英語を話せるようになるの？
      </h3>
      <div className="px-6 md:px-32 lg:px-64 xl:px-72">
        <h4 className={h4Styles}>SO ENGLISH! 5つのStrategy</h4>

        <p className={paragraphStyles}>言語習得には感覚的な側面が多くあります。しかしそれだけでは個人差ができてしまう。納得のいく理論を求める中で第二言語習得論という学問に出会い、2021年、研究の為ベルギーにある大学院の言語学部に留学しました。</p>

        <p className={paragraphStyles}>言語習得は奥が深く、誰にでも効く特効薬は未だ見つかっていませんが、この学問の歴史は大変長く、現在進行形で研究がなされています。常に最新の研究結果を知っておけるように日々論文を読み、授業に活かしています。</p>

        <p className={paragraphStyles}>もう少し詳しく知りたい方の為に、言語学界隈で周知の心理言語学者Levelt(1989)とSlobin(2003)のリスニングとスピーキングの5ステップをご紹介します。</p>

        <img src="https://res.cloudinary.com/dc1aiqs4p/image/upload/v1688512077/%E3%82%A2%E3%83%9B%E3%82%9A%E3%83%BC_210_80_mm_196.4_80_mm_196.4_120_mm_ocywhk.webp" className="pb-10" alt="diagram" />

        <p className={paragraphStyles}>上段はリスニング、下段はスピーキングの時の脳のプロセスです。会話はリスニングとスピーキングの連続ですので、これを繰り返します。</p>

        <h4 className={h4Styles}>リスニングSTEP 1</h4>

        <p className={paragraphStyles}>「アポー→apple」の部分は「音声知覚」です。言語としての音を認識し、「アポー」と聞いて「apple」と頭の中に英語のスペルを思い浮かべます。</p>

        <h4 className={h4Styles}>リスニングSTEP 2</h4>

        <p className={paragraphStyles}>「apple→🍎」の部分は「意味理解」です。頭の中に浮かべた「apple」は「リンゴ」という意味だと理解します。</p>

        <h4 className={h4Styles}>スピーキングSTEP 1</h4>

        <p className={paragraphStyles}>「❤️🍊」の部分は「概念化」です。自分が言いたいことを整理します。</p>

        <h4 className={h4Styles}>スピーキングSTEP 2</h4>

        <p className={paragraphStyles}>「I like oranges.」の部分は「文章化」です。概念化した内容を頭の中で英文にします。</p>

        <h4 className={h4Styles}>スピーキングSTEP 3</h4>

        <p className={paragraphStyles}>「アイlaイクオreンジーズ」の部分は「音声化」です。文章化した内容を正しく発音します。ここでは、日本語の音には無いLとRを、あえてそのまま表記しています。</p>

        <h4 className={h4Styles}>データベース</h4>
    
        <p className={paragraphStyles}>中央にある「🧠」のマークは「データベース」で、ストックされている語彙や発音知識や文法や定型文を指します。リスニング・スピーキングの各ステップで脳内にアクセスし、知識を瞬時に組み合わせ活用します。</p>

        <p className={paragraphStyles}>以上の５ステップ＋データベースだけでもそれぞれ役割が違い、別々にトレーニングをする必要があります。英語学習歴が主に受験勉強だった方は、データベースの蓄積はありますが、特に話すトレーニングが不足している為、会話に抵抗があるという状況に陥りやすいのです。決して、努力した受験勉強は無駄ではないということを、ここで強くお伝えしておきます。</p>

        <p className={paragraphStyles}>また、各スキルを伸ばす為のトレーニングも複数あり、その種類の数だけ教材があり、レベル毎に異なるだけでなく、学習者との相性があります。SO ENGLISH!では、200以上の市販の教材とオリジナル教材を組み合わせ、学習者に合った教材を使用しています。</p>
      </div>
    </div>
  )
}