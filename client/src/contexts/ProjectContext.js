import { createContext, useContext, useReducer, useState } from "react";
import React from "react";
import {v4 as uuidv4} from "uuid";
import axios from "axios";
import ProjectsReducer from "./ProjectsReducer";
import { FETCH_PROJECTS } from "./ReducerActions";


export const ProjectContext = createContext();

/**
 * Providing context for projects.
 * @param {*} props children elements 
 * @returns ProjectContextPRovider
 */
const ProjectContextProvider = (props) => {

    const initial = {
        projects: null,
        selected: null,
    }
    
    const [state, dispatch] = useReducer(ProjectsReducer, initial)

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
            const res = await axios.get('/projects/', config)
            
            dispatch({
                type: FETCH_PROJECTS,
                data: res.data
            })
        }catch(err) {
            console.error(err)
        }
    }

    
    return (
        <ProjectContext.Provider 
            value={{
                projects: state.projects, 
                fetchProjects,
                }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


