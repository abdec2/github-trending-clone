import { Icon } from '@iconify/react';
import { useState } from 'react';

function StarBtn() {
    const [star, setStar] = useState(false)

    const handleStar = () => {
        setStar(!star)
    }
    return (
        <button onClick={handleStar} className="px-3 py-1 text-xs text-gray-400 leading-5 bg-gray-600 bg-opacity-25 border rounded-md transition duration-200 ease-in-out border-gray-500 border-opacity-40  hover:border-gray-400 hover:bg-opacity-50">
            {

                (!star) ? (
                    <>
                        <Icon className="text-gray-400 mr-0 md:mr-1 align-text-bottom inline-block overflow-visible" icon="octicon:star-16" height={16} width={16} />
                        <span className="hidden md:inline font-medium"> Star </span>
                    </>
                    ) : (
                    <>
                        <Icon className="text-gray-400 mr-0 md:mr-1 align-text-bottom inline-block overflow-visible" icon="octicon:star-fill-16" height={16} width={16} />
                        <span className="hidden md:inline font-medium"> Unstar </span>
                    </>
                    )
            }
            
        </button>
    )
}

export default StarBtn
