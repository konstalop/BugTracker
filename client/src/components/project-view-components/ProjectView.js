import React, { useContext } from 'react'
import Sidebar from '../app-components/Sidebar'
import TeamMember from './TeamMember'
import Ticket from '../app-components/Ticket'
import Selected from './Selected'
import AddTicket from './AddTicket'
import Modal from '../app-components/Modal'
import { useState } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { Link, useParams } from "react-router-dom"

/**
 * Page to view project contains including Tickets and teams, and view tickets.
 * @returns Project view page at /project
 */

function ProjectView() {
    const [currentlySelected, setSelected] = useState("")
    const {projects} = useContext(ProjectContext)
    const [buttonPopup, setButtonPopup] = useState(false)
    const selectedProject = useParams();

    //Index for selected project in projects
    const projectIndex = projects.findIndex(project => project.id === selectedProject.projectId)

    /**
     * TEMPORARY SOLUTION, JUST TO MAKE DEVELOPMENT EASIER.
     * App crashing here is caused by uuidv4() generating new ids on reload.
     * database maybe should fix this problem?
     */
    if (projectIndex === -1) {
        return(
            <div>
                <Link to="/app">Return to home</Link>
            </div>
        )
    } 

    return (
        <div>
            <Sidebar></Sidebar>
            <div className='project-view-container'>
                <h1 className='project-view-name'>{projects[projectIndex].name}</h1>
            <div className='project-team-container'>
                <h4 className='project-team-header'>Team</h4>
                <table className='team-table'>
                        <tbody>
                    <tr>
                        <th className='th-project'>MEMBER</th>
                        <th className='th-project'>EMAIL</th>
                        <th className='th-project'>PHONE</th>
                    </tr>
                        <TeamMember/>
                        
                        </tbody>
                </table>
                <button className='new-button-member'>New member</button>
            </div>
                <div className='tickets-project-container'>
                    <h4 className='project-tickets-h4'>Tickets</h4>
                    <table className='project-tickets-table'>
                        <tbody>
                        <tr>
                            <th className='th1'>TITLE</th>
                            <th className='th2'>DESCRIPTION</th>
                            <th className='th3'>ESTIMATED TIME (HOURS)</th>
                        </tr>
                        {
                            projects[projectIndex].tickets.map(ticket => (
                                <Ticket key={ticket.ticketId} ticket={ticket} setSelected={setSelected}/>
                            ))
                        }
                        </tbody>
                    </table>
                    <button onClick={() => setButtonPopup(true)}
                     className='new-ticket'>New</button>
                </div>
                <Selected 
                    ticket={currentlySelected} 
                    projectIndex={projectIndex}
                />
                <Modal 
                    trigger={buttonPopup} 
                    setTrigger={setButtonPopup}
                >
                    <AddTicket 
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup} 
                        projectIndex={projectIndex}
                >
                    </AddTicket>
                </Modal>
            </div>
        </div>
    )
}

export default ProjectView