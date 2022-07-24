import { createContext, useReducer } from "react";
import React from "react"
import axios from "axios";
import TicketReducer from "./TicketReducer";
import { FETCH_TICKETS_PROJECT, 
         FETCH_TICKETS_USER 
} from "./ReducerActions";

export const TicketContext = createContext();

/**
 * Made to handle data related to only tickets.
 * @param {*} props children props
 * @returns TicketContextProvider
 */
const TicketContextProvider = (props) => {

    const initial = {
        tickets: null,
        selected: null,
    }

    const [state, dispatch] = useReducer(TicketReducer, initial)
 
    /**
     * Fetch all tickets created by currently logged in user.
     */
    const fetchTicketsUser = async () => {
        try {
            const res = await axios.get('/tickets/')
        
            dispatch({
                type: FETCH_TICKETS_USER,
                data: res.data
            })

        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Fetch all tickets from currently selected project.
     * @param {ObjectId} id id of the project
     */
    const fetchTicketsProject = async (id) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/tickets/projects', id, config)
            dispatch({
                type: FETCH_TICKETS_PROJECT,
                data: res.data
            })
        }catch(err) {
            console.error(err)
        }
    }
 
    /**
     * Handle creating a new ticket.
     * @param {Object} ticket ticket data from addTicket form
     */
    const newTicket = async (ticket) => {
        //
    }

    /**
     * Fetch selected ticket from database and set it as currently selected.
     * @param {ObjectId} id ticketId
     */
    const setSelectedTicket = async (id) => {
        //
    }


    return (
        <TicketContext.Provider 
            value={{
                tickets: state.tickets,
                selected: state.selected,
                newTicket,
                fetchTicketsUser,
                fetchTicketsProject,
                setSelectedTicket,
                }}>
            {props.children} 
        </TicketContext.Provider>
    )
}

export default TicketContextProvider
