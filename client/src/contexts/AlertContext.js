import React, { useReducer, createContext } from 'react'
import { REMOVE_ALERT, SHOW_ALERT } from './ReducerActions'
import {v4 as uuidv4} from 'uuid'
import AlertReducer from './AlertReducer'

export const AlertContext = createContext()

const AlertState = (props) => {
    const initial = [
        
    ]

    const [state, dispatch] = useReducer(AlertReducer, initial)

    const showAlert = (msg) => {
        const id = uuidv4()
        dispatch({
            type: SHOW_ALERT,
            data: {msg, id}
        })
        
        setTimeout(() => dispatch({type: REMOVE_ALERT, data: id}), 5000)

    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            showAlert,
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState


