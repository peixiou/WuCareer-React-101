import {Link} from 'react-router-dom'
function UserList () {
    return (
        <div>
            <p>User List</p>
            <ul>
                <li>
                    <Link to="/user/a">user A</Link>
                </li>
                <li>
                    <Link to="/user/b">user B</Link>
                </li>
                <li>
                    <Link to="/user/c">user C</Link>
                </li>
            </ul>
        </div>
    )
}
export default UserList