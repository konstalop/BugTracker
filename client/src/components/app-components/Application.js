import React, { useContext, useEffect } from "react"
import Sidebar from "./Sidebar"
import Home from "./Home"
import { AuthContext } from "../../contexts/AuthContext"

/**
 * Application wrapper
 * @returns 
 */

function Dashboard() {

    const authContext = useContext(AuthContext)
    
    useEffect(() => {
        authContext.loadUser()
    }, [])

    return (
        <div className="app-wrapper">
            <Sidebar></Sidebar>
            <Home></Home>
        </div>
    )
}

export default Dashboard