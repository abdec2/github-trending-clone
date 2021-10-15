import { useState } from 'react';

function FollowBtn() {
    const [follow, setFollow] = useState(false)

    const handleSetFollow = () => {
        setFollow(!follow)
    }
    return (
        <button onClick={handleSetFollow} className="px-3 py-1 text-xs text-gray-400 leading-5 bg-gray-600 bg-opacity-25 border rounded-md transition duration-200 ease-in-out border-gray-500 border-opacity-40  hover:border-gray-400 hover:bg-opacity-50">
            {

                (!follow) ? (
                    <>
                        <span className="font-medium"> Follow </span>
                    </>
                    ) : (
                    <>
                        <span className="font-medium"> Unfollow </span>
                    </>
                    )
            }
            
        </button>
    )
}

export default FollowBtn
