import React, {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: '',
    login: (token)=> {},
    logout: ()=>{},

})

export const AuthContextProvider = (props)=>{
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (tok)=> {
        setToken(tok)
    };

    const logouthandler = ()=> {
        setToken(null)
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