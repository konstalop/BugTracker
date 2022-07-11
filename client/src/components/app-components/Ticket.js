import React from 'react'


/**
 * Tablerow item to display ticket data
 * @param {*} param0 ticket data
 * @returns ticket row
 */
function Ticket(props) {

    const viewTicket = () => {
        props.setSelected(props.ticket.ticketId)
    }

        return (
            <tr className='ticket-row'  onClick={viewTicket}>
                <td className='ticket-name'>{props.ticket.title}</td>
                <td className='ticket-type'>{props.ticket.desc}</td>
                <td className='ticket-date'>{props.ticket.time}</td>
            </tr>
        )
}

export default Ticket