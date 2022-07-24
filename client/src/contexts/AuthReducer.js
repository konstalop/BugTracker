import {
    REGISTER_OK,
    REGISTER_FAILURE,
    USER_LOADED,
    AUTH_FAILURE,
    LOGIN_OK,
    LOGIN_FAILURE,
    LOGOUT,
    CLEAR_FAILURES
} from './ReducerActions'

/**
 * Reducer function to handle different states for authentication
 */
export default (state, action) => {
    switch(action.type) {
        case REGISTER_OK:
        case REGISTER_FAILURE:
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.data
            }
        case AUTH_FAILURE:
        case LOGIN_OK:
            return {
                ...state,
                ...action.data,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FAILURE:
        case LOGOUT:
            localStorage.removeItem('accessToken')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
        case CLEAR_FAILURES:
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}