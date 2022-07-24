import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectContext } from '../../contexts/ProjectContext'

/**
 * Project row displayed at home page
 * @param {*} param0 project data
 * @returns 
 */
function Project({project}) {

  

    const projectContext = useContext(ProjectContext)
    const { setSelected, clearSelection } = projectContext

    useEffect(() => {
        clearSelection()
    }, [])

    const projectLink = {
        pathname: "/project/" + project._id,
    }

    return (
        <tr className='project-row'>
            <td className='project-name' 
                onClick={() => setSelected(project._id)}
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