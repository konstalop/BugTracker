import { createContext, useState } from "react";
import React from "react";
import {v4 as uuidv4} from "uuid";
 
export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    
    const [projects, setProjects] = useState([
    ])

    const addProject = (name, desc, author) => {
        setProjects([...projects, {id:uuidv4(), name, desc, author}])
    }


    return (
        <ProjectContext.Provider value={{projects, addProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


