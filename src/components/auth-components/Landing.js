import React from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer';
import { useNavigate } from "react-router-dom"

function Landing() {

let navigate = useNavigate()
const routeTo = () => {
  let path = 'app';
  navigate(path)
}


  return (
    <div className="container-auth">
      <h1 className='header-auth'>BugTracker</h1>
      <div className="container-fields-auth">
        <form className="form-auth">
          <fieldset>
            <h4 className="header-form">Sign in</h4>
              <input
               type="text"
               name="username" 
               placeholder="Username"
               className="input-auth"
              />
              <input
               type="password" 
               name="password" 
               placeholder="Password"
               className="input-auth" 
              />
            <input 
            type="submit"
            className="input-auth-submit" 
            value="Login"
            onClick={routeTo}
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
