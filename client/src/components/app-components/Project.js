import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Project row displayed at home page
 * @param {*} param0 project data
 * @returns 
 */
function Project({project}) {

    const projectLink = {
        pathname: "/project/" + project.id,
        state: {stateParam: project.id}  
    }


    return (
        <tr className='project-row'>
            <td className='project-name' 
                onClick={() => console.log(project.id)}
                >
                <NavLink 
                    className='project-name' 
                    to={projectLink}
                >
                {project.name}
                </NavLink>
            </td>
            <td className='project-desc'>{project.desc}</td>
            <td className='project-author'>{project.date}</td>
        </tr>
    )
}

export default Project