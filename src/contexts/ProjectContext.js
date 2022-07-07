import { createContext, useState } from "react";
import React from "react";
import {v4 as uuidv4} from "uuid";
 

export const ProjectContext = createContext();

/**
 * Providing context for projects.
 * @param {*} props children elements 
 * @returns ProjectContextPRovider
 */
const ProjectContextProvider = (props) => {
    
    const [projects, setProjects] = useState([
        {id:uuidv4(), name: "Create bugtracker", desc: "MERN STACK", author: "konsta", tickets: [

             
        ]},
        {id:uuidv4(), name: "Create ggggggggtracker", desc: "MERN STACK", author: "konsta", tickets: [
          
        ]}

    ])


    const addTicketToProject = (ticket, projectIndex) => {
        projects[projectIndex].tickets.push(ticket)
    }


    const addProject = (name, desc, author, tickets) => {
        setProjects([...projects, {id:uuidv4(), name, desc, author, tickets}])
    }


    return (
        <ProjectContext.Provider value={{projects, addProject, addTicketToProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


