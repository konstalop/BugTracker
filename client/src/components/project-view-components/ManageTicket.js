import React from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import { useContext, useState } from "react"

/**
 * Form to add and edit ticket.
 * @param {*} props data and trigger to close form.
 * @returns this content is displayed inside a modal.
 */

function ManageTicket(props) {
    
    const {selectedTicket, updateTicket, setSelectedTicket} = useContext(TicketContext)

    const [ticket, setTicket] = useState({
        _id: selectedTicket._id,
        project: selectedTicket.project,
        user: selectedTicket.user,
        title: selectedTicket.title,
        desc: selectedTicket.desc,
        time: selectedTicket.time,
        type: selectedTicket.type,
        priority: selectedTicket.priority,
        status: selectedTicket.status,
        date: selectedTicket.date,
        author: selectedTicket.author
    })

    const handleChange = (event) => {
        setTicket({...ticket, [event.target.name]: event.target.value})
    }

    //eslint-disable-next-line
    const {_id, project, user, title, desc, time, type, priority, status, author} = ticket

    /**
     * Handle submitting form and creating a new ticket
     * @param {*} event event 
     */
    const handleSubmit = (event) => {
        updateTicket(ticket)
        event.preventDefault() 
        props.setTrigger(false)
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
                    <h4 className='manage-ticket-h4'>Edit Ticket</h4>
                    <form className='manage-ticket-form'>
                        <label className='manage-label'>Title
                            <input 
                                className='input-ticket-title' 
                                name="title" 
                                placeholder='Title' 
                                type="text" 
                                onChange={handleChange}
                                value={title}
                            ></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea 
                                className='input-ticket-desc' 
                                rows={4} name="desc" 
                                placeholder="Describe the ticket"
                                type="text" 
                                onChange={handleChange}
                                value={desc}
                            ></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input 
                                className='input-ticket-time' 
                                type="number" 
                                name="time" 
                                placeholder="Estimated time in hours"
                                onChange={handleChange}
                                value={time}
                                ></input>
                        </label>
                        <label className='manage-label-options' htmlFor="types">Type
                            <select 
                                id="types" 
                                name="type" 
                                className='input-ticket-option' 
                                onChange={handleChange}
                                value={type}
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
                                onChange={handleChange}
                                value={priority}
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
                                onChange={handleChange}
                                value={status}
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
                            value="Update"
                        />
                    </form>
                </div>
        </div>
    )
}

export default ManageTicket