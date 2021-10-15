import { useState } from "react"
import { FaCaretDown } from 'react-icons/fa'
import { Popover } from '@headlessui/react'

function DropDown({ label, options }) {
    const [selOpt, setSelOpt] = useState('Any')
    return (
        <>
            <Popover className="relative">
                <Popover.Button>
                    <div className="mb-4 sm:mb-0">
                        <button className="text-gray-400 hover:text-gray-200 flex items-center text-sm sm:px-4"> {label}: {selOpt} <FaCaretDown /></button>
                    </div>
                </Popover.Button>

                {/* <Popover.Panel className="absolute z-10">
                    <div className="grid grid-cols-2">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </div>
                </Popover.Panel> */}
            </Popover>


        </>
    )
}

export default DropDown
