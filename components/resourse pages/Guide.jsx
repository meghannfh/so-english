import Image from 'next/image'
import diagram from '../../public/guideImage.png'

export default function Guide(){
    return(
        <div className="h-fit">
            <div className='text-center flex flex-col items-center gap-3'>
            <h1 className="text-5xl md:text-6xl">Resources</h1>
            <h2 className='text-2xl'>How can I become an English speaker?</h2>
            <p className='w-96'>ここでは実際にSo ENGLISH!英語教室で、生徒にどのような学習方法を提案しているかをお話します。</p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h5 className='text-xl w-fit bg-so-blue text-white rounded-lg p-2 mb-5'>1. 英会話の時の５つのステップとは？😊</h5>
                <p>「どうやったら英語が話せるようになるか？」一言で言うのは難しいですが、大切なのは「総合的な力をつける」ことです。以下の図をご覧ください。</p>
                <div className='w-100 md:w-3/4 mb-10'>
                    <Image 
                    layout="responsive"
                    src={diagram}/>
                </div>
            </div>
            <div>
                <p>これは一般的に知られているリスニングとスピーキング時の脳のプロセスを5段階に分けた最も簡素化された図です。上段はリスニング、下段はスピーキングの時の脳のプロセスです。会話はリスニングとスピーキングの連続ですので、これを繰り返します。</p>
                <p>「アポー→apple」と書いてあるリスニングのステップ1は「音声知覚」といって、言語としての音を認識します。「アポー」と聞いて「apple」と頭の中に英語のスペルを思い浮かべるということです。</p>
                <p>「apple→🍎」と書いてあるリスニングのステップ2は「意味理解」といって、頭の中に浮かべた「apple」は「リンゴ」という意味だと理解することです。「🍊」が描いてあるスピーキングのステップ1は「概念化」といって、自分が言いたいことを整理することです。</p>

                <p>「I like oranges.」と書いてあるスピーキングのステップ2は「文章化」といって、概念化した内容を頭の中で英文にします。「アイlaイクオreンジーズ」と書いてあるスピーキングのステップ3は「音声化」と言って、文章化した内容を正しく発音することです。その為に日本語の音には無いLとRをそのまま表記しています
                </p>
                <p>真ん中にある「🧠」のマークは「データベース」といって、語彙や文法や定型文を指します。リスニング・スピーキングの各ステップで脳内にアクセスし、自分が持っている知識を瞬時に組み合わせます。</p>
            </div>
            
        </div>
    )
}