import { useState } from "react"
import { FaCaretDown } from 'react-icons/fa'

function DropDown({ label, options }) {
    const [selOpt, setSelOpt] = useState('Any')
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className="mb-4 sm:mb-0">
                <button onClick={handleIsOpen} className="text-gray-400 hover:text-gray-200 flex items-center text-sm sm:px-4"> {label}: {selOpt} <FaCaretDown /></button>
            </div>
            
        </>
    )
}

export default DropDown
