import React from 'react'
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className="container-auth">
      <h1 className='header-auth'>BugTracker</h1>
      <p className="newUserText"> New user? Register <Link to="/register">here </Link> </p>
      <div className="container-fields-auth">
        <form className="form-auth">
          <fieldset>
            <h4 className="header-form">Login</h4>
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
         </fieldset>
        </form>
      </div>

    </div>
  );
}

export default Landing;
