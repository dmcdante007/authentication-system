import React, {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: '',
    login: (token)=> {},
    logout: ()=>{},

})

export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (tok)=> {
        setToken(tok);
        localStorage.setItem('token', tok);
       
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