import React, { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import Ticket from './Ticket'



function TicketView() {

    const {tickets} = useContext(TicketContext)

    return (
        <div className='tickets-wrapper'>
        <h1 className='tickets-h1'>My Tickets</h1>
        <div className='tickets-container'>
            <h2 className='tickets-h2'>Tickets</h2>
            <table className='tickets-table'></table>
            <tbody>
            <tr>
                <th className='th1'>NAME</th>
                <th className='th2'>TYPE</th>
                <th className='th3'>DATE</th>
            </tr>
            {
                            tickets.map(ticket => (
                                <Ticket key={ticket.id} ticket={ticket}/>
                            ))
            }
            </tbody>
        </div>
    </div>
    )
}

export default TicketView