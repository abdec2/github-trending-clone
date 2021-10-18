import Nav from "./Nav"
import DropDown from "./DropDown"
import axios from "axios"
import { useQuery } from 'react-query'
import Footer from "./Footer"
import RepoItem from "./RepoItem"

function Repo() {
    const opt = ['English', 'Urdu', 'Hindi', 'African']
    const { isLoading, data } = useQuery('repos', () => {
        return axios.get('https://api.codetabs.com/v1/proxy?quest=https://gh-trending-api.herokuapp.com/repositories')
    })
    return (
        <div className="container container-lg mx-auto py-10 px-4 font-sans">
            <div className="box">
                <div className="flex flex-col md:items-center md:flex-row md:justify-between border-gray-500 border rounded-t-md p-4 bg-gray-600 bg-opacity-25 border-opacity-30">
                    {/* Buttons for repo and developer */}
                    <Nav />
                    <div className="flex flex-col sm:flex-row md:items-center justify-items-end mt-4 md:mt-0">
                        {/* filters */}
                        <DropDown label='Spoken Language' option={opt} />
                        <DropDown label='Language' option={opt} />
                        <DropDown label='Date range' option={opt} />
                    </div>
                </div>
                <div>
                    {
                        isLoading && (
                            <p className="text-gray-400 p-4">Loading...</p>
                        )
                    }
                    {
                        data && (
                            data.data.map(repo => (
                                <RepoItem key={repo.rank} repo={repo}/>
                            ))
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Repo
