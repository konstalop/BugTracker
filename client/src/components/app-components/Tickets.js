import React from 'react'
import Sidebar from "./Sidebar"
import TicketView from './TicketView'

/**
 * Tickets page
 * @returns page for tickets
 */
function Tickets() {

    return (
        <div>
            <Sidebar/>
            <TicketView/>
        </div>
    )
}

export default Tickets