import {useParams , useNavigate} from 'react-router-dom'

function User () {
    const {userId} = useParams()
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={()=>navigate(0)}>返回</button>
            <p>User {userId}</p>
        </div>
    )
}

export default User