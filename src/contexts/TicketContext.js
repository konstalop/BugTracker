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

    const addTicket = (id, title, desc, time, type, priority, status, date, author) => {
        setTickets([...tickets, {id, title, desc,time, type, priority, status, author, date}])
    }


    return (
        <TicketContext.Provider value={{tickets, addTicket}}>
            {props.children} 
        </TicketContext.Provider>
    )
}

export default TicketContextProvider
