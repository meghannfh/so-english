import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
  return (
    <fieldset className="w-full">
      <form className="grid grid-rows-5 gap-4 contact-form px-10">
        <div>
          <label 
            aria-labelledby="username-label"
          >性</label>
          <input
          	name="lastName"
            type="text"
          />
        </div>
        
        <div>
          <label 
            aria-labelledby="username-label"
          >名</label>
          <input
          	name="firstName"
            type="text"
          />
        </div>
        
        <div>
          <label 
            aria-labelledby="username-label"
          >Eメール</label>
          <input
            type="email"
          	name="email"
          />
        </div>

        <div>
          <label 
            aria-labelledby="username-label"
            >メッセージ</label>
          <option>adsfasfdsa</option>
        </div>
        <button className="transition-colors duration-500 ease-in-out flex flex-row bg-amber-600 hover:text-white self-center place-self-end gap-2 rounded-full text-xl w-1/2 py-2">送る 
        <span><FiSend hovercolor="white" data-testid="send-icon"/></span></button>
      </form>
    </fieldset>
  )
}