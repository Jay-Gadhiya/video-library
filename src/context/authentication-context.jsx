import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../Reducer/authReducer";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null, firstName: "", lastName : "", email: "", password: "" });
    const getToken = localStorage.getItem("token");

    useEffect(() => {
        authDispatch({type : "CHECK_TOKEN", payload : getToken });
    }, [])


    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };

