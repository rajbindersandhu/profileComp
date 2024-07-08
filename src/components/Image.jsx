import panda from "../images/Panda.jpeg"
import "./Images.css"
export function Image(){
    return (
        <div>
            <img id="profile_image" src={panda} alt="Profile Image"/>
        </div>
    )
}