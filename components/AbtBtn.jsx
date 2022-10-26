import {IoIosArrowUp} from 'react-icons/io'

export default function AbtBtn({text}){
    return(
        <div className="flex flex-row items-center gap-x-2 text-blue-600">
            <h5 className='text-xl py-2'>{text}</h5>
            <IoIosArrowUp className="hidden" />
        </div>
    )
}