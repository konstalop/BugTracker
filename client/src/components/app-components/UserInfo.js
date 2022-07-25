import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

/**
 * Component to display general user info at /account page.
 * @returns user info component
 */
const UserInfo = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h1 className='home-h1'>My Account</h1>
                <h5>Name</h5>
                <p>{user.firstName + " " + user.lastName}</p>
                <h5>Email</h5>
                <p>{user.email}</p>
                <h5>Date created</h5>
                <p>{user.date}</p>
        </div>
    )
}

export default UserInfo