import React from "react";

function Register() {
    return (
        <div className="regDiv">
            <h1>BugTracker</h1>
            <div>
                <form>
                    <fieldset>
                        <h4>Register here</h4>
                        <label className="nameReg">Name
                            <input type="text" name="Name"/>
                        </label>
                        <label className="emailReg">Email address
                            <input type="email" name="email"/>
                        </label>
                        <label className="pwReg" name="password"> Password
                            <input type="password" name="password"/>
                        </label>
                        <label className="confirmPwReg"> Confirm your password
                            <input type="password" name="password" />
                        </label>
                        <input type="submit" value="Register" />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;