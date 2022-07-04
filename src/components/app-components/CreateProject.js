import React from "react";


function CreateProject(props) {

    return (
        <div className="create-project">
            <div className="create-project-inner">
                <h4 className="new-project-h4">Create a new project</h4>
                <form className="create-project-form">
                    <label className='new-project-label'>Project name
                        <input className="input-project-title" placeholder="Project name" type="text"></input>
                    </label>
                    <label className="new-project-label">Description
                        <textarea className="input-project-desc" rows={4} placeholder="Describe the project" type="text"></textarea>
                    </label>
                    <button
                            className='decline-button' 
                            onClick={() => props.setTrigger(false)}
                            >Close
                    </button>
                    <input
                            type="submit"
                            className='save-button'
                            onClick={() => props.setTrigger(false)}
                            value="Submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateProject