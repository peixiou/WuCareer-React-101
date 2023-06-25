import Button from "./Button"

function Card (props) {
    return (
        <div>
            <Button user={props.user}/>
        </div>
    )
}

export default Card