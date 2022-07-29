import { createContext, useReducer } from "react";
import React from "react";
import axios from "axios";
import ProjectsReducer from "./ProjectsReducer";
import { SELECTED_PROJECT, FETCH_PROJECTS,
         NEW_PROJECT, CLEAR_SELECTION, CLEAR_PROJECTS, DELETE_PROJECT
} from "../actions/ReducerActions";


export const ProjectContext = createContext();

/**
 * Providing context for projects.
 * @param {*} props 
 * @returns ProjectContextProvider
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

    /**
     * Creates a new project API request and adds it to the database.
     * @param {Object} project project data from project form
     */
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

    /**
     * Handle deleting project
     * @param {ObjectId} id id of project
     */
    const deleteProject = async (id) => {
        try {
            await axios.delete(`/projects/${id}`)

            dispatch({
                type: DELETE_PROJECT,
                data: id
            })
            
        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Fetch selected project and set it as a selected.
     * @param {ObjectId} id projectId
     */
    const setSelected = async (id) => {
        try {
            const res = await axios.get(`/projects/${id}`)
            dispatch({
                type: SELECTED_PROJECT,
                data: res.data
            })
        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Clear currently selected state so previous project doesnt pop up for a bit while 
     * viewing a new project
     */
    const clearSelection = () => {
        dispatch({
            type: CLEAR_SELECTION,
        })
    }

    /**
     * Clear projects state
     */
    const clearProjects = () => {
        dispatch({
            type: CLEAR_PROJECTS
        })
    }

    return (
        <ProjectContext.Provider 
            value={{
                projects: state.projects,
                selected: state.selected, 
                setSelected,
                fetchProjects,
                newProject,
                clearSelection,
                clearProjects,
                deleteProject
                }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;


