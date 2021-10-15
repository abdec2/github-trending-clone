import { Icon } from '@iconify/react';
import StarBtn from "./StarBtn"

function RepoItem({ repo }) {
    return (
        <article className="border-gray-500 border border-t-0 p-4 break-words bg-clip-border border-opacity-30">
            <div className="float-right">
                <div className="block">
                    <StarBtn />
                </div>
            </div>
            <h1 className="leading-tight font-semibold md:text-xl">
                <a className="text-blue-400 no-underline hover:underline" href={repo.url}>
                    <Icon className="text-gray-400 mr-2.5 align-text-bottom inline-block overflow-visible" icon="octicon:repo-16" height={16} width={16} />
                    <span className="font-normal">{repo.username} / </span>
                    {repo.repositoryName}
                </a>
            </h1>
            {repo.description && (
                <p className="text-gray-400 my-1 pr-4 text-sm w-3/4">{repo.description}</p>)
            }
            <div className="text-gray-400 text-xs mt-2">
                {repo.language && (<span className="inline-block ml-0 mr-5">{repo.language}</span>)}
                <a href={repo.url + '/stargazers'} className="inline-block mr-5 hover:text-blue-400 ">
                    <Icon className="align-text-bottom inline-block overflow-visible text-sm mr-1" icon="octicon:star-16" height={16} width={16} />
                    {repo.totalStars}
                </a>

                <a href={repo.url + '/network/members.' + repo.repositoryName} className="inline-block mr-5 hover:text-blue-400 ">
                    <Icon className="align-text-bottom inline-block overflow-visible text-sm mr-1" icon="octicon:repo-forked-16" height={16} width={16} />
                    {repo.forks}
                </a>

                {
                    repo.builtBy && (
                        <span className="inline-block mr-5">
                            Built by &nbsp;
                            {
                                repo.builtBy.map((dev, i) => (
                                    <a href={dev.url} className="inline-block" key={i}>
                                        <img className="mb-1 rounded-full inline-block overflow-hidden leading-none align-middle flex-shrink-0  bg-gray-100 bg-opacity-10" src={dev.avatar} width={20} height={20} alt="" />
                                    </a>
                                ))
                            }
                        </span>
                    )
                }

                <span className="inline-block sm:float-right">
                    <Icon className="align-text-bottom inline-block overflow-visible text-sm mr-1" icon="octicon:star-16" height={16} width={16} />
                    {repo.starsSince} stars today
                </span>
            </div>
        </article>
    )
}

export default RepoItem
