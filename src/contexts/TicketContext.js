import { createContext, useState } from "react";
import React from "react"
import {v4 as uuidv4} from "uuid"


export const TicketContext = createContext();

const TicketContextProvider = (props) => {
    const [tickets, setTickets] = useState([
        {id: uuidv4(), title:"Create Frontenfffd", desc:"Build frontend", author:"konsta",
         date: "05.07", type: "feature", priority: "critical", status: "open" 
        },
        {id: uuidv4(), title:"Create Frontend", desc:"Build frontend", author:"konsta",
         date: "05.07", type: "feature", priority: "critical", status: "open", time:"20h" 
        }
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
