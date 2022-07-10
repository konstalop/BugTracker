import React, { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import Ticket from './Ticket'

/**
 * Returns a full list of tickets
 * @returns table of tickets at /tickets
 */

function TicketView() {

    const {tickets} = useContext(TicketContext)

    return (
        <div className='tickets-wrapper'>
        <h1 className='tickets-h1'>My Tickets</h1>
        <div className='tickets-container'>
            <h2 className='tickets-h2'>Tickets</h2>
            <table className='tickets-table'>
            <tbody>
            <tr>
                <th className='th1'>NAME</th>
                <th className='th2'>DESCRIPTION</th>
                <th className='th3'>AUTHOR</th>
            </tr>
            {
                    tickets.map(ticket => (
                        <Ticket key={ticket.ticketId} ticket={ticket}/>
                    ))
            }
            </tbody>
            </table>
        </div>
    </div>
    )
}

export default TicketView