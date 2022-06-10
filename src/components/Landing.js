import React from 'react'
import { Link } from "react-router-dom"

function Landing() {
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
            value="Login" />
            <p className="new-user-text"><Link to="/register" >Create account</Link></p>
      
         </fieldset>
        </form>
        <div className="footer-container">
          <footer className="footer-auth">© 2022 | Konsta Löppönen</footer>
        </div>
      </div>

    </div>
  );
}

export default Landing;
