import { createContext, useReducer } from "react";
import React from "react";
import axios from "axios"
import setToken from "../misc/setToken";
import authReducer from './AuthReducer'
import { LOGIN_FAILURE,
         LOGIN_OK, 
         REGISTER_FAILURE, 
         REGISTER_OK,
         LOGOUT, 
         USER_LOADED
} from "./ReducerActions";

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

        if (localStorage.accessToken) {
            setToken(localStorage.accessToken)
        }

        try {
            const res = await axios.get('/auth/')

            dispatch({
                type: USER_LOADED,
                data: res.data
            })

        }catch(err) {
            console.error(err)
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
            dispatch({
                type: REGISTER_OK,
                data: res.data
            })
            
        }catch(err) {
            dispatch({
                type: REGISTER_FAILURE,
                data: err.response.data.msg
            })
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
            localStorage.setItem('accessToken', res.data.accessToken)
    
            dispatch({
                type: LOGIN_OK,
                data: res.data
            })

            loadUser()
        }catch(err) {
            dispatch({
                type: LOGIN_FAILURE,
                data: err.response.data.msg
            })
        }
    }

    const logout = () => {
        dispatch({
            type: LOGOUT

        })
    }
    return (
        <AuthContext.Provider 
            value={{
                register,
                login,
                loadUser,
                logout,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                accessToken: state.accessToken,
                }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState