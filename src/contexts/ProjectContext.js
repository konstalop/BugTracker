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
        {id:uuidv4(), name: "Create bugtracker", desc: "MERN STACK", date: "07/09/22", tickets: [

             
        ]},
        {id:uuidv4(), name: "Create ggggggggtracker", desc: "MERN STACK", date: "07/09/22", tickets: [
          
        ]}

    ])


    const addTicketToProject = (ticket, projectIndex) => {
        projects[projectIndex].tickets.push(ticket)
    }

    const deleteTicketFromProject = (projectIndex, ticketIndex) => {
        projects[projectIndex].tickets.splice(ticketIndex, 1)
    }


    const addProject = (name, desc, date, tickets) => {
        setProjects([...projects, {id:uuidv4(), name, desc, date, tickets}])
    }


    return (
        <ProjectContext.Provider value={{projects, addProject, addTicketToProject, deleteTicketFromProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


