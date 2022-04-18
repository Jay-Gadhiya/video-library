import { useAuth } from "../../context/authentication-context"

export const ProfileInfo = () => {

    return (
        <div className="content-show">
            <p><strong>Username</strong> : <span>Adarsh Balika</span></p>
            <p><strong>Email</strong> : <span>adarshbalika@gmail.com</span></p>
        </div>
    )
}