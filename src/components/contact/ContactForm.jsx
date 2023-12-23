import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
  return (
    <div className="w-full">
      <form className="flex flex-row flex-wrap gap-4 contact-form">
        <input
        	className="w-full"
        	placeholder="性"
        	name="lastName"
        >
        </input>
        <input
        	className="w-full"
        	placeholder="名"
        	name="firstName"
        >
        </input>
        <input
        	className="w-full"
        	placeholder="Eメール"
        	name="email"
        >
        </input>
        <textarea 
        	className="w-full"
        	placeholder="メッセージ"
        	name="message"
        >
        </textarea>
        <button className="bg-white transition-colors duration-500 ease-in-out text-emerald-600 flex flex-row hover:bg-teal-600 hover:text-white items-center gap-2 rounded px-10 py-2 text-2xl">送る 
        <span><FiSend hovercolor="white" data-testid="send-icon"/></span></button>
      </form>
    </div>
  )
}