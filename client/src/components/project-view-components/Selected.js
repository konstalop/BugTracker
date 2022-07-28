import React from 'react'
import ManageTicket from './ManageTicket';
import { useState } from 'react'
import Modal from '../app-components/Modal';
import { useContext } from "react"
import { TicketContext } from '../../contexts/TicketContext';
import Confirmation from '../confirmation-components/Confirmation';


/**
 * Used to view full data of tickets.
 * @returns component to view full data of tickets
 */
const Selected = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const {selectedTicket, deleteTicket} = useContext(TicketContext)
    const [confirm, setConfirm] = useState(false)

    /**
     * Display No ticket selected text if no ticket is currently selected.
     */
    if (selectedTicket == null) {
        return (
            <div className='ticket-view-container'>
                <h4 className='no-selected-h4'>No ticket selected</h4>
            </div>
        )
    }

    /**
     * Pop up a confirm box to confirm delete.
     */
    const confirmDelete = () => {
        setConfirm(true)
    }

     /**
     * handle deleting a ticket
     */
    const handleDelete = (choose) => {
        if (choose) {
            deleteTicket(selectedTicket._id)
            setConfirm(false)
        } else {
            setConfirm(false)
        }
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
                        <th className='ticket-info-th'>TIME ESTIMATE (HOURS)</th>
                       
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{selectedTicket.title}</td>
                        <td className='ticket-info-td'>{selectedTicket.desc}</td>
                        <td className='ticket-info-td'>{selectedTicket.author}</td>
                        <td className='ticket-info-td'>{selectedTicket.time}</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>DATE</th>
                        <th className='ticket-info-th'>TYPE</th>
                        <th className='ticket-info-th'>PRIORITY</th>
                        <th className='ticket-info-th'>STATUS</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>{selectedTicket.date}</td>
                        <td className='ticket-info-td'>{selectedTicket.type}</td>
                        <td className='ticket-info-td'>{selectedTicket.priority}</td>
                        <td className='ticket-info-td'>{selectedTicket.status}</td>
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
                        onClick={() => confirmDelete()}
                    >Delete ticket    
                    </button>
                    <Confirmation
                        action={handleDelete}
                        confirm={confirm}
                    />
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
