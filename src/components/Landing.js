import React from 'react'
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className="landingText">
      <h1>BugTracker</h1>
      <p className="newUserText"> New user? Register <Link to="/register">here </Link> </p>
      <div className="loginDiv">
        <form className="loginForm">
          <fieldset>
            <h4>Login</h4>
         <label className='userLabel'> Username
         <input type="text" name="username" placeholder="Username"/>
         </label>
         <label className='pwLabel'> Password
         <input type="password" name="password" placeholder="Password"/>
         </label>
         <input type="submit" value="Login" />
         </fieldset>
        </form>
      </div>

    </div>
  );
}

export default Landing;
