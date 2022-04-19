import { useAuth } from "../../context/authentication-context"

export const ProfileInfo = () => {

    const { authState, getUser } = useAuth();

    return (
        <div className="content-show">
            {
                getUser
                ?
                <>
                <p><strong>Username</strong> : <span>{getUser.firstName} {getUser.lastName}</span></p>
                <p><strong>Email</strong> : <span>{getUser.email}</span></p>
                </>
                :
                <>
                <p><strong>Username</strong> : Guest User</p>
                <p><strong>Email</strong> : adarshbalika@gmail.com</p>
                </>
            }
            
        </div>
    )
}