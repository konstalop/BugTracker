import React from 'react'


function Ticket({ticket}) {

        return (
            <tr className='ticket-row'>
                <td className='ticket-name'>{ticket.title}</td>
                <td className='ticket-type'>{ticket.desc}</td>
                <td className='ticket-date'>{ticket.time}</td>
            </tr>
        )
}

export default Ticket