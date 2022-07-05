import { createContext, useState } from "react";
import React from "react"
import {v4 as uuidv4} from "uuid"


export const TicketContext = createContext();

const TicketContextProvider = (props) => {
    const [tickets, setTickets] = useState([
    ])

    const addTicket = (title, desc, time, type, priority, status, date, author) => {
        setTickets([...tickets, {id:uuidv4(), title, desc,time, type, priority, status, author, date}])
    }


    return (
        <TicketContext.Provider value={{tickets, addTicket}}>
            {props.children}
        </TicketContext.Provider>
    )
}

export default TicketContextProvider
