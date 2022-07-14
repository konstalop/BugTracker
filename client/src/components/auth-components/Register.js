import React from "react";
import { Link } from "react-router-dom"
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"  
import { useState } from 'react'
 
/**
 * Page to create an account on. To be made.
 * @returns register page
 */
function Register() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handlechange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    let navigate = useNavigate()
    const handleRegistering = (e) => {
        console.log(user)
        e.preventDefault()
        let path = '../app';
        navigate(path)
    }


    return (
        <div className="container-auth">
            <h1 className="header-auth">BugTracker</h1>
            <div className="container-fields-auth">
                <form className="form-auth">
                    <fieldset>
                        <h4 className="header-form">Sign up</h4> 
                            <input
                             type="text" 
                             name="firstName"
                             className="input-auth"
                             placeholder="First Name"
                             onChange={handlechange}
                            />   
                            <input
                             type="text" 
                             name="lastName"
                             className="input-auth"
                             placeholder="Last Name"
                             onChange={handlechange}
                            />            
                            <input
                             type="email" 
                             name="email"
                             className="input-auth"
                             placeholder="Email address"
                             onChange={handlechange}
                            />
                            <input 
                             type="password"
                             name="password"
                             className="input-auth"
                             placeholder="Password"
                             onChange={handlechange}
                            />
                            <input
                             type="password"
                             name="password"
                             className="input-auth"
                             placeholder="Confirm your password"
                             onChange={handlechange}
                            />
                        <input
                         type="submit"
                         value="Create account"
                         className="input-auth-submit"
                         onClick={(e) => handleRegistering(e)} 
                         />
                         <p className="new-user-text"><Link to="/" >Already an user? Sign in</Link></p>
                    </fieldset>
                </form>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Register;