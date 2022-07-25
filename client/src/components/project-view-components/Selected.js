import React from 'react'
import ManageTicket from './ManageTicket';
import { useState } from 'react'
import Modal from '../app-components/Modal';
import { useContext } from "react"
import { useParams } from 'react-router-dom';
import { TicketContext } from '../../contexts/TicketContext';


/**
 * Used to view full data of tickets.
 * @returns component to view full data of tickets
 */
function Selected() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const {selectedTicket, deleteTicket, clearTickets, fetchTicketsProject} = useContext(TicketContext)
    const {projectId} = useParams()


    /**
     * Display this if no ticket currently selected.
     */
    if (selectedTicket == null) {
        return (
            <div className='ticket-view-container'>
                <h4 className='no-selected-h4'>No ticket selected</h4>
            </div>
        )
    }

     /**
     * handle deleting a ticket
     */
    const handleDelete = () => {
       deleteTicket(selectedTicket._id)
       fetchTicketsProject(projectId)
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
                        <td className='ticket-info-td'>{selectedTicket.title}</td>
                        <td className='ticket-info-td'>{selectedTicket.desc}</td>
                        <td className='ticket-info-td'>{selectedTicket.author}</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>DATE</th>
                        <th className='ticket-info-th'>TYPE</th>
                        <th className='ticket-info-th'>PRIORITY</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{selectedTicket.date}</td>
                        <td className='ticket-info-td'>{selectedTicket.type}</td>
                        <td className='ticket-info-td'>{selectedTicket.priority}</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>STATUS</th>
                        <th className='ticket-info-th'>TIME ESTIMATE (HOURS)</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{selectedTicket.status}</td>
                        <td className='ticket-info-td'>{selectedTicket.time}</td>
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
                        <ManageTicket trigger={buttonPopup} setTrigger={setButtonPopup}></ManageTicket>
                    </Modal>
                   
        </div>
    )
}

export default Selected