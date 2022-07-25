import { 
    CLEAR_TICKETS,
    FETCH_TICKETS_PROJECT, 
    FETCH_TICKETS_USER, 
    NEW_TICKET, 
    SELECTED_TICKET,
    CLEAR_SELECTED_TICKET
} from "./ReducerActions";

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
                selectedTicket: action.data
            }
        case CLEAR_TICKETS: 
            return {
                ...state,
                tickets: null,
                selectedTicket: null,
            }
        default:
            return state
    }
}