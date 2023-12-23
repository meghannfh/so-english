import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="px-6 py-10 md:px-24 w-full flex justify-center gap-2 bg-gradient-to-b from-emerald-100/75 to-emerald-400/75">
      <div className="md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-semibold md:text-4xl text-slate-900 font-top">相談を申し込む</h3>
        <h4 className="py-6 leading-loose inline-block">有料カウンセリングの申し込みを含むお問い合わせは、LINEをお持ちの方なら、より早く返信が可能ですので、<button className="inline-block transition-colors duration-200 ease-in-out bg-white text-teal-600 hover:text-white hover:bg-teal-600 px-2 rounded">QRコード</button>より公式LINEに友達追加の上、ご連絡を頂けると幸いです。以下、メールでやり取りを希望される方は、フォームにご記入をお願いいたします。</h4>
        <ContactForm />
      </div>
    </div>
  )
}