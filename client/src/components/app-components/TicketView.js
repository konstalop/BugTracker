import React, { useContext, useEffect } from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import Ticket from './Ticket'
import Spinner from './Spinner'

/**
 * Returns a full list of tickets created by current user
 * @returns table of tickets at /tickets
 */
function TicketView() {
    const {tickets, loading, fetchTicketsUser} = useContext(TicketContext)

    useEffect(() => {
        fetchTicketsUser()
    }, [])

    /**
     * Render a loading screen if tickets are not loaded yet
     */
    if (tickets == null) {
        return (
            <div className='home-wrapper'>
                <h1 className='home-h1'>Loading tickets...</h1>
                <Spinner></Spinner>
            </div>
        )
    }

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
                <th className='th3'>DATE</th>
            </tr>
            {
                    tickets !== null && !loading ? (
                        tickets.map(ticket => (
                            <Ticket key={ticket._id} ticket={ticket}/>
                        ))
                    ) : (<tr></tr>)
            }
            </tbody>
            </table>
        </div>
    </div>
    )
}

export default TicketView