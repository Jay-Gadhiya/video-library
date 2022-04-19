import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authentication-context";


export const Settings = () => {

    const  { authDispatch } = useAuth();
    const  { navigate } = useNavigate();

    const logoutClickHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type : "USER_LOGOUT"});
        navigate("/");
    }

    return (
       <Link to="/" ><button onClick={logoutClickHandler} className="btn btn-primary">Logout</button></Link>
    )
}