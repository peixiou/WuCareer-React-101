import {Outlet, Link} from 'react-router-dom'

function Layout(){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/users">user list</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Layout