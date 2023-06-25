
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
function Error () {
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(() => {
            navigate("/")
        }, 3000);
    },[])
    return (
        <div>
            <p>Error</p>
        </div>
    )
}

export default Error