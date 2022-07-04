import React from "react"
import Sidebar from "./Sidebar"
import Home from "./Home"
import ProjectContextProvider, { ProjectContext } from "../../contexts/ProjectContext"

function Dashboard() {

    return (
        <div className="app-wrapper">
        <ProjectContext.Provider>
            <Sidebar></Sidebar>
            <Home> </Home>
        </ProjectContext.Provider>
        </div>
    )
}

export default Dashboard