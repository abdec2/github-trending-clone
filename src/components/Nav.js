import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <NavLink to="/" exact activeClassName="bg-blue-600" className="px-4 py-1 border-gray-500 border border-r-0 rounded-l-md leading-5 text-gray-200 text-sm font-medium border-opacity-30">Repositories</NavLink>
            <NavLink to="/developers" activeClassName="bg-blue-600" className="px-4 py-1 border-gray-500 border border-l-0 rounded-r-md leading-5 text-gray-200 text-sm font-medium border-opacity-30">Developers</NavLink>
        </nav>
    )
}

export default Nav
