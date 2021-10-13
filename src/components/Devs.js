import Nav from "./Nav"
import DropDown from "./DropDown"

function Devs() {
    const opt = ['English', 'Urdu', 'Hindi', 'African']
    return (
        <div className="container container-lg mx-auto py-10 px-4 font-sans">
            <div className="box">
                <div className="flex flex-col md:items-center md:flex-row md:justify-between border-gray-500 border border-b-0 rounded-t-md p-4 bg-gray-600 bg-opacity-25 border-opacity-40">
                    {/* Buttons for repo and developer */}
                   <Nav />
                    <div className="flex flex-col sm:flex-row md:items-center justify-items-end mt-4 md:mt-0">
                        {/* filters */}
                        <DropDown label='Language' option={opt}/>
                        <DropDown label='Date range' option={opt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devs
