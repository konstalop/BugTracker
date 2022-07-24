import axios from 'axios';

/**
 * Set a default header token used for authorizating users.
 * @param {String} token users accaesstoken
 */
const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log("deleting")
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setToken;