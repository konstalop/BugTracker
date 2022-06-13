import React from "react"
import Sidebar from "./Sidebar"
import Home from "./Home"

function Dashboard() {

    return (
        <div className="app-wrapper">
            <Sidebar></Sidebar>
            <Home> </Home>
        </div>
    )
}

export default Dashboard