import { userContext } from "../App"
import { useContext } from "react"

function Button (props) {
    const user = useContext(userContext)
    return (
        <div>
            <button>{user.user}</button>
            <button>{user.gender}</button>
        </div>
    )
}

export default Button