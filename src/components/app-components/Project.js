import React from 'react'
import { Link } from 'react-router-dom'

function Project({project}) {

    return (
        <tr className='project-row'>
            <td className='project-name'><Link className='project-name' to="/project">{project.name}</Link></td>
            <td className='project-desc'>{project.desc}</td>
            <td className='project-author'>{project.author}</td>
        </tr>
    )
}

export default Project