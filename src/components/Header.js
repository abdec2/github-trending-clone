import MainNav
    from "./Header/MainNav"
function Header() {
    const style = {
        background: "#161b22"
    }
    return (
        <>
            <MainNav />
            <div className="border-b border-gray-500 border-opacity-30 font-sans" style={{ ...style }}>
                <div className="container container-lg mx-auto py-10 px-4">
                    <h1 className="text-center text-gray-200 text-3xl font-semibold leading-normal">Trending</h1>
                    <p className="text-center text-gray-400 text-base mb-2 leading-normal">See what the GitHub community is most excited about today.</p>
                </div>
            </div>
        </>
    )
}

export default Header
