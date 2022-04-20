import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { authReducer } from "../Reducer/authReducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null });
    const [user, setUser] = useState("");

    const getToken = localStorage.getItem("token");
    const getUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        authDispatch({type : "CHECK_TOKEN", payload : getToken });
    }, [])


    return (
        <AuthContext.Provider value={{authState, authDispatch, getUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };