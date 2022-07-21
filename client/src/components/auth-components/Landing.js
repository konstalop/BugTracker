import React, {useContext, useState}from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer';
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext';

/**
 * page when you open the application. Login is to be made.
 * @returns login page
 */
function Landing() {
let navigate = useNavigate()

const authContext = useContext(AuthContext)
const { login } = authContext

const [user, setUser] = useState({
  email: "",
  password: "",
  
})

const { email, password } = user

const handleChange = (event) => {
  setUser({...user, [event.target.name]: event.target.value})
}

const handleLogin = (e) => {
  if (email === '' || password === '') {
    console.log('Please fill all fields!')
  } else {
    login({
      email,
      password
    })

  e.preventDefault()
  let path = 'app';
  navigate(path)
  }
}

  return (
    <div className="container-auth">
      <h1 className='header-auth'>BugTracker</h1>
      <div className="container-fields-auth">
        <form className="form-auth" onSubmit={handleLogin}>
          <fieldset>
            <h4 className="header-form">Sign in</h4>
              <input
               type="text"
               name="email" 
               placeholder="Email Address"
               className="input-auth"
               onChange={handleChange}
              />
              <input
               type="password" 
               name="password" 
               placeholder="Password"
               className="input-auth" 
               onChange={handleChange}
              />
              <input 
              type="submit"
              className="input-auth-submit" 
              value="Login"
             />
            <p className="new-user-text"><Link to="/register" >Create account</Link></p>
            <p className="new-user-text"><Link to="/">Forgot password?</Link></p>
         </fieldset>
        </form>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default Landing;
