import React from "react";
import { useState } from "react"
import {ProjectContext} from "../../contexts/ProjectContext"
import {useContext} from "react"


/**
 * Used to create and add a project
 * @param {*} props 
 * @returns 
 */

function CreateProject(props) {

    const {addProject} = useContext(ProjectContext)

    const [project, setProject] = useState({
        projectName: "",
        projectDesc: "",
        projectDate: new Date().toLocaleDateString()
    });

    const handleProjectName = (event) => {
        setProject({...project, projectName: event.target.value})
    }

    const handleProjectDesc = (event) => {
        setProject({...project, projectDesc: event.target.value})
    }


    const {projectName, projectDesc, projectDate} = project

    /**
     * handle submitting new project and handle adding it to project context
     * @param {*} e event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        addProject(projectName, projectDesc, projectDate, [])
        props.setTrigger(false)
    }

    /**
     * handle closing form without submitting it
     * @param {*} e event
     */
    const handleDecline = (e) => {
        e.preventDefault()
        props.setTrigger(false)
    }

    return (
        <div className="create-project">
            <div className="create-project-inner">
                <h4 className="new-project-h4">Create a new project</h4>
               <form className="create-project-form">
                    <label className='new-project-label'>Project name
                        <input
                        onChange={handleProjectName}
                        value={project.projectName}
                        className="input-project-title"
                        placeholder="Project name"
                        type="text"
                        ></input>
                    </label>
                    <label className="new-project-label">Description
                        <textarea
                        onChange={handleProjectDesc} 
                        className="input-project-desc" 
                        rows={4} placeholder="Describe the project" 
                        type="text"
                        value={project.projectDesc}>
                        </textarea>
                    </label>
                    <button
                        className='decline-button' 
                        onClick={(e) => handleDecline(e)}
                        >Cancel
                    </button>
                    <input
                        type="submit"
                        className='save-button'
                        onClick={(e) => handleSubmit(e)}
                        value="Create"
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateProject