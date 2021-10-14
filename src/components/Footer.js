import { Icon } from '@iconify/react';


function Footer() {

    const cdate = Date.now()
    const year = new Date(cdate).getFullYear()

    return (
        <div className="footer container container-lg">
            <div className="relative flex flex-row-reverse lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-10 pb-2 mt-10 text-xs border-t border-gray-800 text-gray-400">
                <ul className="list-none flex flex-wrap w-full lg:w-5/12 justify-center lg:justify-between mb-2 lg:mb-0">
                    <li className="mr-4 lg:mr-0 text-gray-400">
                        © {year} GitHub, Inc.
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://github.com/security">Security</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://www.githubstatus.com/">Status</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://docs.github.com/">Docs</a>
                    </li>
                </ul>
                <a href="https://github.com/" className="hidden lg:block lg:mx-6 text-gray-700">
                    <Icon icon="octicon:mark-github-16" height={24} width={24} inline={true}/>
                </a>
                <ul className="list-none flex flex-wrap w-full lg:w-5/12 justify-center lg:justify-between mb-2 lg:mb-0">
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://support.github.com/?tags=dotcom-footer">Contact Github</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://github.com/pricing">Pricing</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://docs.github.com/">API</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://services.github.com/">Training</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://github.blog/">Blog</a>
                    </li>
                    <li className="mr-4 lg:mr-0 text-blue-400 hover:underline">
                        <a href="https://github.com/about">About</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
