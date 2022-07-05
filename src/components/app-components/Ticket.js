import React from 'react'
import { Link } from 'react-router-dom'


function Ticket({ticket}) {

        return (
            <tr className='ticket-row'>
                <td className='ticket-name'><Link className='ticket-name' to="/project">{ticket.title}</Link></td>
                <td className='ticket-type'>{ticket.desc}</td>
                <td className='ticket-date'>{ticket.author}</td>
            </tr>
        )
}

export default Ticket