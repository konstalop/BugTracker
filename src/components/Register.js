import React from "react";

function Register() {
    return (
        <div className="container-auth">
            <h1 className="header-auth">BugTracker</h1>
            <div className="container-fields-auth">
                <form className="form-auth">
                    <fieldset>
                        <h4 className="header-form">Sign up</h4>  
                            <input
                             type="text" 
                             name="Name"
                             className="input-auth"
                             placeholder="Username"
                            />              
                            <input
                             type="email" 
                             name="email"
                             className="input-auth"
                             placeholder="Email address"
                            />
                            <input 
                             type="password"
                             name="password"
                             className="input-auth"
                             placeholder="Password"
                            />
                            <input
                             type="password"
                             name="password"
                             className="input-auth"
                             placeholder="Confirm your password"
                            />
                        <input
                         type="submit"
                         value="Create account"
                         className="input-auth-submit" 
                         />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;