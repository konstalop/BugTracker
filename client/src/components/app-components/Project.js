import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectContext } from '../../contexts/projects/ProjectContext'

/**
 * Project row displayed at home page
 * @param {*} param0 project data
 * @returns 
 */
const Project = ({project}) => {
    
    const projectContext = useContext(ProjectContext)
    const {clearSelection } = projectContext

    useEffect(() => {
        clearSelection()
    }, [])

    /**
     * Generates link for the projectview page.
     */
    const projectLink = {
        pathname: "/project/" + project._id,
        param: project._id
    }

    return (
        <tr className='project-row'>
            <td className='project-name' 
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