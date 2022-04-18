import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../Reducer/authReducer";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer, { token : null, firstName: "adarsh", lastName : "balika", email: "adarshbalika@123", password: "123" });
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

