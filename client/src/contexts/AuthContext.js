import { createContext } from "react";
import React from "react";
import axios from "axios"

export const AuthContext = createContext();

const AuthState = (props) => {

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
        //
    }

    //const logout

    return (
        <AuthContext.Provider value={{register, login}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState