import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

/**
 * Component to display general user info at /account page.
 * @returns user info component
 */
const UserInfo = () => {

    const {user} = useContext(AuthContext)

    return (
        <>
        <h1 className='home-h1'>My Account</h1>
        <div className="user-container">
                <h5 className="user-stat">Name</h5>
                <p className="user-info">{user.firstName + " " + user.lastName}</p>
                <h5 className="user-stat">Email</h5>
                <p className="user-info">{user.email}</p>
                <h5 className="user-stat">Date created</h5>
                <p className="user-info">{user.date}</p>
        </div>
        </>
    )
}

export default UserInfo