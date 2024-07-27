import { React, createContext, useContext} from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function criaContexto() {
    const logado =  Cookies.get('accessToken')
    let authContext
    if(logado) {
        authContext = createContext(true);
    } else {
        authContext = createContext(false)
    }

    return authContext
}

export function AuthPrivate ({ children }) {
    const contextCriado = criaContexto()
    const user = useContext(contextCriado)

    return user ? children : <Navigate to={'/login'}/>
}

