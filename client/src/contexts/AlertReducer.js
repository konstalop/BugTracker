import {
    SHOW_ALERT,
    REMOVE_ALERT
} from './ReducerActions'

/**
 * Reducer function to handle showing alerts etc.
 */
export default (state, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return [...state, action.data]
        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== action.data)
        default:
            return state
    }

}