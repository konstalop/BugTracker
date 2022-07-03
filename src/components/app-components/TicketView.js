import React from 'react'
import Ticket from './Ticket'


function TicketView() {
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
            <Ticket/>
            </tbody>
        </div>
    </div>
    )
}

export default TicketView