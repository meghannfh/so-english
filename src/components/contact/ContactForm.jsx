import { FiSend } from 'react-icons/fi'

export default function ContactForm(){
  return (
    <fieldset className="w-full">
      <form className="grid grid-rows-5 gap-4 contact-form">
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

        <button className="transition-colors duration-500 ease-in-out flex flex-row w-auto bg-amber-600 hover:text-white justify-center items-center place-self-end gap-2 rounded-full text-xl px-10 py-2">送る 
        <span><FiSend hovercolor="white" data-testid="send-icon"/></span></button>
      </form>
    </fieldset>
  )
}