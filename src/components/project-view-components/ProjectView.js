import React, { useContext } from 'react'
import Sidebar from '../app-components/Sidebar'
import TeamMember from './TeamMember'
import Ticket from '../app-components/Ticket'
import Selected from './Selected'
import ManageTicket from './ManageTicket'
import Modal from '../app-components/Modal'
import { useState } from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import { ProjectContext } from '../../contexts/ProjectContext'
import { useParams } from "react-router-dom"
function ProjectView() {

    const {projects} = useContext(ProjectContext)

    const {tickets} = useContext(TicketContext)

    const [buttonPopup, setButtonPopup] = useState(false)

    const projectName = "Build tracker"


    const selectedProject = useParams();
    console.log('selected projectid:'+ selectedProject.projectId);
    
    const projectIndex = projects.findIndex(project => project.id === selectedProject.projectId)
    

    return (
        
        <div>
            <Sidebar></Sidebar>
            <div className='project-view-container'>
                <h1 className='project-view-name'>{projectName}</h1>
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
                                <Ticket key={ticket.ticketId} ticket={ticket}/>
                            ))
                        }
                        </tbody>
                    </table>
                    <button onClick={() => setButtonPopup(true)}
                     className='new-ticket'>New</button>
                </div>
                <Selected ticket={tickets}/>
                <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <ManageTicket trigger={buttonPopup} setTrigger={setButtonPopup}></ManageTicket>
                </Modal>
            </div>
        </div>
    )
}

export default ProjectView