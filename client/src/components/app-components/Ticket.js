import React, { useContext } from 'react'
import { TicketContext } from '../../contexts/TicketContext'


/**
 * Tablerow item to display ticket data
 * @param {*} param0 ticket data
 * @returns ticket row
 */
function Ticket(props) {

    const {setSelectedTicket} = useContext(TicketContext)
    const viewTicket = () => {
        setSelectedTicket(props.ticket._id)
    }

        return (
            <tr className='ticket-row'  onClick={viewTicket}>
                <td className='ticket-name'>{props.ticket.title}</td>
                <td className='ticket-type'>{props.ticket.desc}</td>
                <td className='ticket-date'>{props.ticket.date}</td>
            </tr>
        )
}

export default Ticket