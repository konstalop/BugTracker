import { 
    CLEAR_SELECT_TICKET,
    CLEAR_TICKETS,
    DELETE_TICKET,
    FETCH_TICKETS_PROJECT, 
    FETCH_TICKETS_USER, 
    NEW_TICKET, 
    SELECTED_TICKET,
    UPDATE_TICKET
} from "../actions/ReducerActions";

/**
 * Reducer for handling different ticket states.
 */
export default (state, action) => {
    switch(action.type) {
        case NEW_TICKET:
            return {
                ...state, 
                tickets: [...state.tickets, action.data],
                loading: false
            }
        case FETCH_TICKETS_PROJECT:
            return {
                ...state,
                tickets: action.data,
                loading: false
            }
        case FETCH_TICKETS_USER:
            return {
                ...state,
                tickets: action.data,
                loading: false
            }
        case SELECTED_TICKET:
            return {
                ...state,
                selectedTicket: state.tickets.find(ticket => ticket._id === action.data)
            }
        case CLEAR_SELECT_TICKET: 
            return {
                ...state,
                selectedTicket: null,
            }
        case DELETE_TICKET: 
            return {
                ...state,
                tickets: state.tickets.filter((ticket) => ticket._id !== action.data),
                loading: false,
                selectedTicket: null,
            }
        case UPDATE_TICKET: {
            return {
                ...state,
                tickets: state.tickets.map((ticket) => ticket._id === action.data._id ? action.data : ticket),
                selectedTicket: action.data,
            }      
        }
        case CLEAR_TICKETS: {
            return {
                ...state,
                tickets: null
            }
        }
        default:
            return state
    }
}