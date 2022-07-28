import React from 'react'
import { TicketContext } from '../../contexts/tickets/TicketContext'
import { useContext, useState } from "react"
import { ProjectContext } from '../../contexts/projects/ProjectContext'
import {AlertContext} from '../../contexts/alerts/AlertContext'
import Alert from "../confirmation-components/Alert"

/**
 * Form to add and edit ticket.
 * @param {*} props data and trigger to close form.
 * @returns this content is displayed inside a modal.
 */

const AddTicket = (props) => {
    
    const {newTicket} = useContext(TicketContext)
    const {selected} = useContext(ProjectContext)
    const {showAlert} = useContext(AlertContext)

    const [ticket, setTicket] = useState({
        id: selected._id,
        title: "",
        desc: "",
        time: "",
        type: "Issue",
        priority: "Low",
        status: "Open",
    })

    /**
     * Function to handle events and get values from form.
     * @param {*} event listening to this event
     */
    const handlechange = (event) => {
        setTicket({...ticket, [event.target.name]: event.target.value})
    }

    /**
     * Handle submitting form and creating a new ticket to tickets and projects[i].tickets
     * @param {*} e event 
     */
    const handleSubmit = (e) => {
        e.preventDefault() 
        if (ticket.title === "" || ticket.desc === "" || ticket.time === "") {
            showAlert('Please fill all of the fields!')
        }
        else {
            newTicket(ticket)
            props.setTrigger(false)
        }
    }

    /**
     * Handle declining form and not submitting data in it
     * @param {*} e event
     */
    const handleDecline = (e) => {
        e.preventDefault()
        props.setTrigger(false)
    }

    return (
        <div className='manage-ticket'> 
                <div className='manage-ticket-inner'>
                    <h4 className='manage-ticket-h4'>Create a new ticket</h4>
                    <Alert></Alert>
                    <form className='manage-ticket-form'>
                        <label className='manage-label'>Title
                            <input 
                                className='input-ticket-title' 
                                name="title" 
                                placeholder='Title' 
                                type="text" 
                                onChange={handlechange}
                            ></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea 
                                className='input-ticket-desc' 
                                rows={4} name="desc" 
                                placeholder="Describe the ticket"
                                type="text" 
                                onChange={handlechange}
                            ></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input 
                                className='input-ticket-time' 
                                type="number" name="time" 
                                placeholder="Estimated time in hours"
                                onChange={handlechange} 
                            ></input>
                        </label>
                        <label className='manage-label-options' htmlFor="types">Type
                            <select 
                                id="types" 
                                name="type" 
                                className='input-ticket-option' 
                                onChange={handlechange}
                            >
                                <option value="Issue">Issue</option>
                                <option value="Feature">Feature</option>
                                <option value="Suggestion">Suggestion</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Priority
                            <select 
                                id="priority" 
                                name="priority" 
                                className='input-ticket-option'
                                onChange={handlechange}
                                >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Status
                            <select 
                                id="status" 
                                name="status" 
                                className='input-ticket-option' 
                                onChange={handlechange}
                            >
                                <option value="Open">Open</option>
                                <option value="Working">Working</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </label>
                        <button
                            className='decline-button' 
                            onClick={(e) => handleDecline(e)}
                            >Cancel
                        </button>
                        <input
                            type="submit"
                            className='save-button'
                            onClick={(event) => handleSubmit(event)}
                            value="Create"
                        />
                    </form>
                </div>
        </div>
    )
}

export default AddTicket