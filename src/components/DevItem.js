import { Icon } from '@iconify/react';
import FollowBtn from "./FollowBtn"
function DevItem({ dev }) {
    return (
        <article className="border-gray-500 border-opacity-30 border border-t-0 p-4 break-words bg-clip-border flex">
            <a className="text-gray-400 text-xs" href={"#pa-" + dev.username} style={{ width: '16px' }}> {dev.rank} </a>
            <div className="mx-4">
                <a href={dev.url}>
                    <div className="w-12 h-12 rounded-full ">
                        <img className="rounded-full" src={dev.avatar} alt={"@" + dev.username} />
                    </div>
                </a>
            </div>
            <div className="sm:flex flex-auto">
                <div className="w-8/12 md:flex">
                    <div className="w-1/2">
                        <h1 className="leading-tight font-semibold md:text-xl text-blue-400">
                            <a href={dev.url}>{dev.name}</a>
                        </h1>
                        <p className="text-base font-normal mb-1 text-gray-400 hover:underline hover:text-blue-400">
                            <a href={dev.url}>{dev.username}</a>
                        </p>
                    </div>
                    <div className="w-1/2">
                        <div className="mt-2 mb-4 md:my-0">
                            {
                                dev.popularRepository.repositoryName && (
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase mb-1">
                                            <Icon className="text-yellow-600 mr-1 align-text-bottom inline-block overflow-visible" icon="octicon:flame-16" width="16" height="16" />
                                            Popular repo
                                        </div>
                                        <h1 className="leading-tight font-semibold text-base">
                                            <a href={dev.popularRepository.url} className="truncate inline-block align-top leading-5 text-blue-400 hover:underline">
                                                <Icon className="text-gray-400 mr-1 align-text-bottom inline-block overflow-visible" icon="octicon:repo-16" width="16" height="16" />
                                                &nbsp;{dev.popularRepository.repositoryName}
                                            </a>
                                        </h1>
                                        <div className="text-xs text-gray-400 mt-1">{dev.popularRepository.description}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="w-4/12 flex sm:justify-end sm:ml-4">
                    <div>
                        <FollowBtn />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default DevItem
