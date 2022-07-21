import axios from 'axios'

/**
 * set session token for currently logged in user
 * @param {*} token jwt token from backend
 */
const setAccessToken = (token) => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAccessToken