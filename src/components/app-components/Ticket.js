import React from 'react'
import { Link } from 'react-router-dom'


function Ticket() {

        let ticketName = 'Create frontend'
        let desc = 'Build frontend for bugtracker project	'
        let author = 'Konsta'

        return (
            <tr className='ticket-row'>
                <td className='ticket-name'><Link className='ticket-name' to="/project">{ticketName}</Link></td>
                <td className='ticket-type'>{desc}</td>
                <td className='ticket-date'>{author}</td>
            </tr>
        )
}

export default Ticket