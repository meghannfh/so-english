import { BsTranslate, BsFillDoorClosedFill } from 'react-icons/bs/index.esm';
import { FaHandHoldingHeart } from 'react-icons/fa/index.esm';
import { TiBeer } from 'react-icons/ti/index.esm';
import {HiUserGroup} from 'react-icons/hi/index.esm';
import { GrWorkshop } from 'react-icons/gr/index.esm';
import ServicesCard from './ServicesCard';

export default function ServicesCards(){
  const services = [
    {
      "icon": <BsFillDoorClosedFill />,
      "title": "プライベートレッスン",
      "subtitle": "教室を始めてからずっとあるコース",
      "description": "レッスン内容は目標に合わせて完全オーダーメイドで、心と対話しながら英語との楽しい向き合い方を学んでいきます。生徒の皆さんの多くは、長年私と一緒に英語に取り組んでくれていて、更に人生の枠を広げている方ばかりです!"
    },
    {
      "icon": <HiUserGroup />,
      "title": "朝活グループセッション",
      "subtitle": "瞑想音読™でリフレッシュ!",
      "description": "「瞑想音読™」という言葉はSOの造語ですが、ある生徒が「毎日音読をしてたら、ゾーン状態に入ることができて、それが心地良い」と言っていたことが由来です。瞑想は言わずと知れた健康法で、幸せホルモンのオキシトシンが出るものですね。音読は最強の英語学習法と、学習者の中で長い間言われ続けていますね。もちろん音読だけでなく、和訳や文法や背景の解説もする予定です!"
    },
    {
      "icon": <BsTranslate />,
      "title": "翻訳",
      "subtitle": "日→英・英→日",
      "description": "大使館会議の議事録の英訳(2年間毎月)、輸入雑貨添付の説明書の和訳(単発数回)、企業のプレゼン資料の英訳・和訳(単発数回)、大学教授の研究論文の和訳(一部)(単発数回)、英語ネイティブと共にダブルチェックを行っているので、高い精度の翻訳をお約束します。"
    },
    {
      "icon": <TiBeer />,
      "title": "夜活グループセッション",
      "subtitle": "お酒の力で饒舌トーク!",
      "description": "お酒を飲みながら参加できる掟破りの授業、開講です!もちろんシラフでの参加もOK!雰囲気に酔っぱらってください!よく聞く「酔っている時だとなんか話せる」をヒントにしました。テーマを決めてざっくばらんに英会話をします。時事や自分ニュースについて、楽しく意見交換しましょう。"
    },
    {
      "icon": <FaHandHoldingHeart/>,
      "title": "個別相談&目標設定",
      "subtitle": "LGBTQ+の方向け",
      "description": "英語レッスンで行う内省(自分を見つめる作業)・目標設定・目標達成の為の作戦立てとマインドトレーニングを軸に、17歳からカミングアウトしていった完全オープンリーGayのSOの経験を踏まえながら、相談者とお話します。好きな人との恋が実る為に、どんどん変わっていって自信がついていく相談者を見られることが、一番嬉しいです。"
    },
    {
      "icon": <GrWorkshop/>,
      "title": "ワークショップ",
      "subtitle": "学習法・マインド",
      "description": "第二言語習得に関する本を嚙み砕いて説明したり、SOが行っている勉強法や時間の作り方、目標達成の仕方、気持ちの切り替え方をお伝えしたりしながら、その場で自分と向き合う時間を作り、他の方々と共有します。ワークショップに参加した後は、皆さん俄然やる気になって勉強に取りくんでくれます!"
    }
  ]


  return(
    <div className="w-full h-full grid md:grid-rows-3 md:grid-cols-2">
      {services.map((service, idx) => (
        <span key={idx}>
          <ServicesCard icon={service.icon} title={service.title} subtitle={service.subtitle} description={service.description} idx={idx} />
        </span>
      ))}
    </div>
  )
}