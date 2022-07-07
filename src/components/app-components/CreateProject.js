import React from "react";
import { useState } from "react"
import {ProjectContext} from "../../contexts/ProjectContext"
import {useContext} from "react"



function CreateProject(props) {

    const {addProject} = useContext(ProjectContext)

    const [project, setProject] = useState({
        projectName: "",
        projectDesc: "",
        projectAuthor: "konsta"
    });

    const handleProjectName = (event) => {
        setProject({...project, projectName: event.target.value})
    }

    const handleProjectDesc = (event) => {
        setProject({...project, projectDesc: event.target.value})
    }


    const {projectName, projectDesc, projectAuthor} = project

    /**
     * handle submitting new project and handle adding it to project context
     * @param {*} e event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        addProject(projectName, projectDesc, projectAuthor, [{}])
        console.log(project)
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
                            >Close
                    </button>
                    <input
                            type="submit"
                            className='save-button'
                            onClick={(event) => handleSubmit(event)}
                            value="Submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateProject