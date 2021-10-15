function MainNav() {
    const style = {
        background: "#0d1117",
        boxShadow: "0 1px 0 rgba(0,0,0,0.1)"
    }
    return (
        <div className="sticky top-0 z-20 box-border" style={{...style}}>
            <nav className="container container-lg mx-auto">
                <div className="flex flex-wrap items-center justify-center md:justify-start text-center md:text-left px-4 res-px">
                    <a href="/" className="inline-block text-xs md:text-sm py-0 md:py-4 mt-2 md:mt-0 mr-0 md:mr-6 no-underline text-gray-500 cursor-pointer border-0 hover:text-gray-300 transtion duration-300 ease-in-out border-b-2 border-gray-400 border-opacity-0 hover:border-opacity-20 pr-item">Explore</a>
                    <a href="/" className="inline-block text-xs md:text-sm py-2 md:py-4 mr-3 md:mr-6 no-underline text-gray-500 cursor-pointer border-0 hover:text-gray-300 transtion duration-300 ease-in-out border-b-2 border-gray-400 border-opacity-0 hover:border-opacity-20" >Topics</a>
                    <a href="/" className="inline-block text-xs md:text-sm py-2 md:py-4 mr-3 md:mr-6 no-underline text-gray-300 cursor-pointer border-0 border-b-2 border-blue-500 font-medium " style={{flexBasis: 'auto'}}>Trending</a>
                    <a href="/" className="inline-block text-xs md:text-sm py-2 md:py-4 mr-3 md:mr-6 no-underline text-gray-500 cursor-pointer border-0 hover:text-gray-300 transtion duration-300 ease-in-out border-b-2 border-gray-400 border-opacity-0 hover:border-opacity-20" >Collections</a>
                    <a href="/" className="inline-block text-xs md:text-sm py-2 md:py-4  mr-3 md:mr-6 no-underline text-gray-500 cursor-pointer border-0 hover:text-gray-300 transtion duration-300 ease-in-out border-b-2 border-gray-400 border-opacity-0 hover:border-opacity-20" >Events</a>
                    <a href="/" className="inline-block text-xs md:text-sm py-2 md:py-4 mr-3 md:mr-6 no-underline text-gray-500 cursor-pointer border-0 hover:text-gray-300 transtion duration-300 ease-in-out border-b-2 border-gray-400 border-opacity-0 hover:border-opacity-20" >Github Sponsors</a>

                    <div className="hidden md:block flex-auto text-right">
                        <button className="px-4 py-2 text-sm text-gray-300 leading-5 bg-gray-600 bg-opacity-25 border rounded-md transition duration-200 ease-in-out border-gray-500 border-opacity-40  hover:border-gray-400 hover:bg-opacity-50 font-medium whitespace-nowrap align-middle">
                        Get email updates
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}



export default MainNav
