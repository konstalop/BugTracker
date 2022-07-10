import { createContext, useState } from "react";
import React from "react"




export const TicketContext = createContext();

/**
 * Made to handle data related to only tickets.
 * @param {*} props children props
 * @returns TicketContextProvider
 */
const TicketContextProvider = (props) => {
    const [tickets, setTickets] = useState([
    ])

    /**
     * Method to adding new tickets.
     * 
     * @param {*} ticketId Tickets id
     * @param {*} title tickets title
     * @param {*} desc tickets description
     * @param {*} time tickets estimated time
     * @param {*} type tickets type
     * @param {*} priority tickets priority
     * @param {*} status tickets status
     * @param {*} date tickets creation date
     * @param {*} author tickets author
     */
    const addTicket = (ticketId, title, desc, time, type, priority, status, date, author) => {
        setTickets([...tickets, {ticketId, title, desc,time, type, priority, status, author, date}])
    }

    /**
     * Method to delete ticket from tickets
     * @param {*} id ticket that needs to be deleted
     */
    const deleteTicket = (id) => {
        setTickets(tickets.filter(ticket => ticket.ticketId !== id))
    }

    /**
     * Method to edit wanted ticket
     * @param {*} id ticket that is going to be edited
     * @param {*} editedTicket new data for ticket
     */
    const editTicket = (id, editedTicket) => {
        setTickets(tickets.map((ticket) => ticket.ticketId === id ? editedTicket : ticket))
    }


    return (
        <TicketContext.Provider value={{tickets, addTicket, deleteTicket, editTicket}}>
            {props.children} 
        </TicketContext.Provider>
    )
}

export default TicketContextProvider
