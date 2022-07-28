import { createContext, useReducer } from "react";
import React from "react"
import axios from "axios";
import TicketReducer from "./TicketReducer";
import { CLEAR_SELECT_TICKET, CLEAR_TICKETS, DELETE_TICKET, FETCH_TICKETS_PROJECT, 
         FETCH_TICKETS_USER,
         NEW_TICKET,
         SELECTED_TICKET,
         UPDATE_TICKET,
} from "../actions/ReducerActions";

export const TicketContext = createContext();

/**
 * Made to handle data related to only tickets.
 * @param {*} props children props
 * @returns TicketContextProvider
 */
const TicketContextProvider = (props) => {

    const initial = {
        tickets: null,
        selectedTicket: null,
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
        try {
            const res = await axios.get(`/tickets/project/${id}`)
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
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/tickets/add', ticket, config)
            dispatch({
                type: NEW_TICKET,
                data: res.data
            })
        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Handles updating ticket
     * @param {Object} ticket data from ManageTicket form made for updating. 
     */
    const updateTicket = async (ticket) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/tickets/update/${ticket._id}`, ticket, config)

            dispatch({
                type: UPDATE_TICKET,
                data: res.data
            })

        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Handle deleting a ticket
     * @param {ObjectId} id id of ticket that is going to be deleted.
     */
    const deleteTicket = async (id) => {
        try {
            await axios.delete(`/tickets/${id}`)

            dispatch({
                type: DELETE_TICKET,
                data: id
            })

        }catch(err) {
            console.error(err)
        }
    } 

    /**
     * Fetch selected ticket from database and set it as currently selected.
     * @param {ObjectId} id ticketId
     */
    const setSelectedTicket = async (id) => {
        try {
            dispatch({
                type: SELECTED_TICKET,
                data: id
            })
        }catch(err) {
            console.error(err)
        }
    }

    /**
     * Method to clear current ticket.
     */
    const clearSelectedTicket = () => {
        dispatch({
            type: CLEAR_SELECT_TICKET
        })
    }

    /**
     * Clear tickets array from state
     */
    const clearTickets = () => {
        dispatch({
            type: CLEAR_TICKETS
        })
    }
    

    return (
        <TicketContext.Provider 
            value={{
                tickets: state.tickets,
                selectedTicket: state.selectedTicket,
                newTicket,
                fetchTicketsUser,
                fetchTicketsProject,
                setSelectedTicket,
                clearTickets,
                deleteTicket,
                updateTicket,
                clearSelectedTicket,
                }}>
            {props.children} 
        </TicketContext.Provider>
    )
}

export default TicketContextProvider
