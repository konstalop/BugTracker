import React from 'react'
import ManageTicket from './ManageTicket';
import { useState } from 'react'
import Modal from '../app-components/Modal';
import { useContext } from "react"
import { TicketContext } from '../../contexts/TicketContext';
import { ProjectContext } from '../../contexts/ProjectContext';

/**
 * Page for selected ticket, under work.
 * @param {*} param0 ticket data
 * @param {*} param1 projectid
 * @returns selected ticket table
 */

function Selected(props) {

    const [buttonPopup, setButtonPopup] = useState(false);
    const {tickets, deleteTicket} = useContext(TicketContext)
    const {projects, deleteTicketFromProject} = useContext(ProjectContext)
    
    const ticketIndex = tickets.findIndex(ticket => ticket.ticketId === props.ticket)
    const ticketIndexInProject = projects[props.projectIndex].tickets.findIndex(ticket => ticket.id === props.ticket)

    /**
     * Display this if no ticket currently selected.
     */
    if (ticketIndex < 0) {
        console.log(props)
        return (
            <div className='ticket-view-container'>
                <h4 className='no-selected-h4'>No ticket selected</h4>
            </div>
        )
    }

     /**
     * handle deleting from tickets and projects[i].tickets
     */
    const handleDelete = () => {
        deleteTicket(props.ticket)
        deleteTicketFromProject(props.projectIndex, ticketIndexInProject)
    }
   

    return (
        <div className='ticket-view-container'>
                    <h4 className='project-tickets-view-h4'>Selected Ticket</h4>
                    <table className='ticket-info-table'>
                        <tbody>
                    <tr>
                        <th className='ticket-info-th'>TITLE</th>
                        <th className='ticket-info-th'>DESCRIPTION</th>
                        <th className='ticket-info-th'>AUTHOR</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{tickets[ticketIndex].title}</td>
                        <td className='ticket-info-td'>{tickets[ticketIndex].desc}</td>
                        <td className='ticket-info-td'>{tickets[ticketIndex].author}</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>DATE</th>
                        <th className='ticket-info-th'>TYPE</th>
                        <th className='ticket-info-th'>PRIORITY</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{tickets[ticketIndex].date}</td>
                        <td className='ticket-info-td'>{tickets[ticketIndex].type}</td>
                        <td className='ticket-info-td'>{tickets[ticketIndex].priority}</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>STATUS</th>
                        <th className='ticket-info-th'>TIME ESTIMATE (HOURS)</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{tickets[ticketIndex].status}</td>
                        <td className='ticket-info-td'>{tickets[ticketIndex].time}</td>
                    </tr>
                   
                     </tbody>
                    </table>
                    <button
                     className='new-ticket'
                     onClick={() => setButtonPopup(true)}
                     >Edit ticket
                     </button>
                    <button 
                        className='delete-ticket'
                        onClick={() => handleDelete()}
                    >Delete ticket    
                    </button>
                    <Modal
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup}
                    >
                        <ManageTicket trigger={buttonPopup} setTrigger={setButtonPopup} currentTicket={props.ticket} projectIndex={props.projectIndex}></ManageTicket>
                    </Modal>
                   
        </div>
    )
}

export default Selected