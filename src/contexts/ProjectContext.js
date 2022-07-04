import { createContext, useState } from "react";
import React from "react";
 
export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    
    const [projects, setProjects] = useState([
        {name: "create tracker", desc: "mern stack", auhor: "konsta"},
        {name: "add functinoality", desc: "make aworking project saving system", author: "konsta"}
    ])

    const addProject = (name, desc, author) => {
        setProjects([...projects, {name, desc, author}])
    }


    return (
        <ProjectContext.Provider value={{projects}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider


