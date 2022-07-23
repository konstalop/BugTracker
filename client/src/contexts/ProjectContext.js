import { createContext, useContext, useState } from "react";
import React from "react";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const ProjectContext = createContext();

/**
 * Providing context for projects.
 * @param {*} props children elements 
 * @returns ProjectContextPRovider
 */
const ProjectContextProvider = (props) => {
    
    const authContext = useContext(AuthContext)
    const [projects, setProjects] = useState([])

    const { user } = authContext

    /**
     * Fetch all projets from currently logged in user
     */
    const fetchProjects = async () =>  {

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.get('/projects/', user._id, config)
            console.log(res.data)
        }catch(err) {
            console.error(err)
        }
    }




    /**
     * Add wanted ticket to project
     * @param {*} ticket ticket data
     * @param {*} projectIndex index of project
     */
    const addTicketToProject = (ticket, projectIndex) => {
        projects[projectIndex].tickets.push(ticket)
    }

    /**
     * Delete wanted ticket from project
     * @param {*} projectIndex index of project that contains the ticket
     * @param {*} ticketIndex index of the ticket that needs to be deleted
     */
    const deleteTicketFromProject = (projectIndex, ticketIndex) => {
        projects[projectIndex].tickets.splice(ticketIndex, 1)
    }

    /**
     * Edit wanted ticket in projects
     * @param {*} projectIndex index of project that contains the ticket
     * @param {*} ticketIndex index of ticket that needs to be edited
     * @param {*} editedTicket new ticket data
     */
    const editTicketInProject = (projectIndex, ticketIndex, editedTicket) => {
        console.log(projectIndex, ticketIndex, editedTicket)
        projects[projectIndex].tickets[ticketIndex] = editedTicket
    }

    /**
     * Add a new project to projects
     * @param {*} name name of the project
     * @param {*} desc description for the project
     * @param {*} date creation daet
     * @param {*} tickets tickets for the project, when creating its just an empty array
     */
    const addProject = (name, desc, date, tickets) => {
        setProjects([...projects, {id:uuidv4(), name, desc, date, tickets}])
    }

    return (
        <ProjectContext.Provider 
            value={{
                projects, 
                fetchProjects,
                addProject, 
                addTicketToProject, 
                deleteTicketFromProject, 
                editTicketInProject
                }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


