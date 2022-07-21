import { createContext, useReducer } from "react";
import React from "react";
import axios from "axios"
import authReducer from './AuthReducer'
import setAccessToken from "../misc/setAccessToken";

export const AuthContext = createContext();

const AuthState = (props) => {
    

    const initial = {
        token: localStorage.getItem('accessToken'),
        isAuthenticated: false,
        user: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initial)

    /**
     * Load currently authorized user
     */
    const loadUser = async () => {
        if (localStorage.token) {
            setAccessToken(localStorage.accessToken)
        }
    }

    /**
     * Handle registering
     * @param {*} formData data from register form
     */
    const register = async (formData) => {
        const conf = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/users/register', formData, conf)
            console.log(res)
            
        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Handle login
     * @param {*} formData data from login form
     */
    const login = async (formData) => {
        const conf = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/auth/login', formData, conf)
            console.log(res)
            loadUser()
        }catch(err) {
            console.error(err)
        }
    }

    //const logout

    return (
        <AuthContext.Provider value={{register, login}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState