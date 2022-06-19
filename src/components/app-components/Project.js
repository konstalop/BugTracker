import React from 'react'
import { Link } from 'react-router-dom'

function Project() {

    let projectName ='Build bugtracker'
    let desc = 'Build bugtracker using MERN stack'
    let author = 'Konsta'
    return (
        <tr className='project-row'>
            <td className='project-name'><Link className='project-name' to="/project">{projectName}</Link></td>
            <td className='project-desc'>{desc}</td>
            <td className='project-author'>{author}</td>
        </tr>
    )
}

export default Project