import React from "react";
import { useState } from "react"
import {ProjectContext} from "../../contexts/ProjectContext"
import {useContext} from "react"


/**
 * Used to create and add a project
 * @param {*} props props, like modal trigger.
 * @returns modal to create project.
 */

const CreateProject = (props) => {

    const projectContext = useContext(ProjectContext)
    const { newProject } = projectContext
    const [project, setProject] = useState({
        name: "",
        desc: "",
    });

    /**
     * Handle input changes from create project form
     * @param {*} event events from input field
     */
    const handleChange = (event) => {
        setProject({...project, [event.target.name]: event.target.value})
    }

    /**
     * New project
     */
    const {name, desc} = project

    /**
     * handle submitting new project and handle adding it to project context
     * @param {*} e event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        newProject(project)
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
                        onChange={handleChange}
                        value={name}
                        className="input-project-title"
                        placeholder="Project name"
                        type="text"
                        name="name"
                        ></input>
                    </label>
                    <label className="new-project-label">Description
                        <textarea
                        onChange={handleChange} 
                        className="input-project-desc" 
                        rows={4} placeholder="Describe the project" 
                        type="text"
                        value={desc}
                        name="desc"
                        >
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