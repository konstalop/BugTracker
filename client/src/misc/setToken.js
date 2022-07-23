import axios from 'axios';

const setToken = (token) => {
  if (token) {
    console.log(token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    console.log("deleting")
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setToken;