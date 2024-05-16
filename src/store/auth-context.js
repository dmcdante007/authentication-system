import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: '',
    login: (token)=> {},
    logout: ()=>{},

})

export const AuthContextProvider = (props)=>{
    const history = useHistory()
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (tok)=> {
        setToken(tok);
        localStorage.setItem('token', tok);

        setTimeout(()=>{
            logouthandler();
            
        }, 5000)
       
    };

    const logouthandler = ()=> {
        setToken(null)
        localStorage.removeItem('token')
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logouthandler,

    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;