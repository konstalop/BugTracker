import React from 'react'
import ManageTicket from './ManageTicket';
import { useState } from 'react'
import Modal from '../app-components/Modal';
import { useContext } from "react"
import { TicketContext } from '../../contexts/TicketContext';

/**
 * Page for selected ticket, under work.
 * @param {*} param0 ticket data
 * @returns selected ticket table
 */

function Selected(selectedId) {

    const [buttonPopup, setButtonPopup] = useState(false);
    const {tickets} = useContext(TicketContext)

    console.log(selectedId)
    const ticketIndex = tickets.findIndex(ticket => ticket.id === selectedId.ticket)
    console.log(tickets, ticketIndex)

    if (ticketIndex == -1) {
        return (
            <div className='ticket-view-container'>
                <h4 className='project-tickets-view-h4'>No ticket selected</h4>
            </div>
        )
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