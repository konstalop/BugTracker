import React from 'react'
import { Link } from 'react-router-dom'


function Ticket() {

        let ticketName = 'Create frontend'
        let type = 'feature'
        let date = '12.07.2000'

        return (
            <tr className='ticket-row'>
                <td className='ticket-name'><Link className='ticket-name' to="/ticket">{ticketName}</Link></td>
                <td className='ticket-type'>{type}</td>
                <td className='ticket-date'>{date}</td>
            </tr>
        )
}

export default Ticket