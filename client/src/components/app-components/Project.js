import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectContext } from '../../contexts/projects/ProjectContext'
import { TicketContext } from '../../contexts/tickets/TicketContext'
import Confirmation from '../confirmation-components/Confirmation'

/**
 * Project row displayed at home page
 * @param {*} param0 project data
 * @returns 
 */
const Project = ({project}) => {
    
    const projectContext = useContext(ProjectContext)
    const {clearSelection, deleteProject} = projectContext
    const {deleteTicketsProject} = useContext(TicketContext)
    const [style, setStyle] = useState({display: 'none'});
    const [confirm, setConfirm] = useState(false)

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

    const deleteMessage = `Delete ${project.name}`

    /**
     * Pop up a confirm box to confirm delete.
     */
     const confirmDelete = () => {
        setConfirm(true)
    }

    /**
     * Handle deleting project
     */
    const handleDelete= (choose) => {
        if (choose) {
            deleteTicketsProject(project._id)
            deleteProject(project._id)
            setConfirm(false)
        } else {
            setConfirm(false)
        }
    }

    return (
        <tr className='project-row'
        onMouseEnter={e => {
            setStyle({display: 'table', backgroundColor: 'red', padding: '4px', color: 'white', border: 0, borderRadius: '5px', 
                    fontSize: '12px', float: 'left', width: '80px', cursor: 'pointer', margin: 0});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}>
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
            <td className='project-desc' 
                >
                <button style={style} onClick={confirmDelete}>
                    Delete
                </button>
            <Confirmation
            action={handleDelete}
            confirm={confirm}
            message={deleteMessage}
            message2='ALL TICKETS WILL BE LOST'
            >    
            </Confirmation>
            </td>
        </tr>
    )
}

export default Project