import { createContext, useReducer } from "react";
import React from "react";
import axios from "axios";
import ProjectsReducer from "./ProjectsReducer";
import { FETCH_PROJECTS,
         NEW_PROJECT
} from "./ReducerActions";


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
        try {
            const res = await axios.get('/projects/')
            dispatch({
                type: FETCH_PROJECTS,
                data: res.data
            })
        }catch(err) {
            console.error(err)
        }
    }

    const newProject = async (project) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        
        try {
            const res = await axios.post('/projects/add', project, config)

            dispatch({
                type: NEW_PROJECT,
                data: res.data
            })
            
        }catch(err) {
            console.error('There was an error while adding a project ' + err)
        }
    }

    
    return (
        <ProjectContext.Provider 
            value={{
                projects: state.projects, 
                fetchProjects,
                newProject,
                }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


