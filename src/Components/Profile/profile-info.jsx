import { useAuth } from "../../context/authentication-context"

export const ProfileInfo = () => {

    const { authState } = useAuth();
    console.log(authState);

    return (
        <div className="content-show">
            <p><strong>Username</strong> : <span>{authState.firstName} {authState.lastName}</span></p>
            <p><strong>Email</strong> : <span>{authState.email}</span></p>
        </div>
    )
}