import React, { useContext, useEffect } from 'react'
import Sidebar from '../app-components/Sidebar'
import TeamMember from './TeamMember'
import Ticket from '../app-components/Ticket'
import Selected from './Selected'
import AddTicket from './AddTicket'
import Modal from '../app-components/Modal'
import { useState } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import { useParams } from "react-router-dom"
import Spinner from '../app-components/Spinner'
import { AuthContext } from '../../contexts/AuthContext'
import { TicketContext } from '../../contexts/TicketContext'

/**
 * Page to view project contains including Tickets and teams, and view tickets.
 * @returns Project view page at /project
 */
const ProjectView = () => {
    
    const {selected, setSelected} = useContext(ProjectContext)
    const {fetchTicketsProject, tickets, clearTickets, loading} = useContext(TicketContext)
    const {user} = useContext(AuthContext)
    const [buttonPopup, setButtonPopup] = useState(false)
    const {projectId} = useParams()

    useEffect(() => {
        clearTickets()
        setSelected(projectId)
        fetchTicketsProject(projectId)
    }, [])

    /**
     * Display loading screen if project has not been loaded yet
     */
    if (selected == null) {
        return (
            <div>
                <Sidebar/>
                <div className='project-view-container'>
                        <h1 className='project-view-name'>Attemping to load project...</h1>
                        <Spinner></Spinner>
                 </div>
            </div>
        )
    }

    return (
        <div>
            <Sidebar></Sidebar>
            <div className='project-view-container'>
                <h1 className='project-view-name'>{selected.name}</h1>
            <div className='project-team-container'>
                <h4 className='project-team-header'>Team (NOT FUNCTIONAL YET)</h4>
                <table className='team-table'>
                    <tbody>
                    <tr>
                        <th className='th-project'>MEMBER</th>
                        <th className='th-project'>EMAIL</th>
                    </tr>
                        <TeamMember user={user}/>
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
                            <th className='th3'>DATE CREATED</th>
                        </tr>
                        {
                             tickets !== null && !loading ? (
                                tickets.map(ticket => (
                                    <Ticket key={ticket._id} ticket={ticket}/>
                                ))
                            ) : (<tr></tr>)
                        }
                        </tbody>
                    </table>
                    <button onClick={() => setButtonPopup(true)}
                     className='new-ticket'>New</button>
                </div>
               <Selected></Selected>
                <Modal 
                    trigger={buttonPopup} 
                    setTrigger={setButtonPopup}
                >
                    <AddTicket 
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup} 
   
                >
                    </AddTicket>
                </Modal>
            </div>
        </div>
    )
}

export default ProjectView