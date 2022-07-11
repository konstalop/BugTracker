import React from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import { useContext, useState } from "react"
import { ProjectContext } from '../../contexts/ProjectContext'

/**
 * Form to add and edit ticket.
 * @param {*} props data and trigger to close form.
 * @returns this content is displayed inside a modal.
 */

function ManageTicket(props) {
    
    const {tickets, editTicket} = useContext(TicketContext)
    const {projects, editTicketInProject} = useContext(ProjectContext)


    //Find index for ticket in tickets
    const ticketIndex = tickets.findIndex(ticket => ticket.ticketId === props.currentTicket)
    
    //Find index for ticket in project.tickets
    const ticketIndexInProject = projects[props.projectIndex].tickets.findIndex(ticket => ticket.ticketId === props.currentTicket)

    //Items in ticket that cant be edited / no need to be edited
    const ticketId = props.currentTicket
    const date = tickets[ticketIndex].date
    const author =  tickets[ticketIndex].author

    //Items that can be edited and usually need to be edited.
    const [title, setTitle] = useState(tickets[ticketIndex].title)
    const [desc, setDesc] = useState(tickets[ticketIndex].desc)
    const [time, setTime] = useState(tickets[ticketIndex].time)
    const [type, setType] = useState(tickets[ticketIndex].type)
    const [priority, setPriority] = useState(tickets[ticketIndex].priority)
    const [status, setStatus] = useState(tickets[ticketIndex].status)

    const editedTicket = {ticketId, title, desc, time, type, priority, status, date, author}

    /**
     * Handle submitting form and creating a new ticket
     * @param {*} event event 
     */
    const handleSubmit = (event) => {
        editTicket(ticketId, editedTicket)
        editTicketInProject(props.projectIndex, ticketIndexInProject, editedTicket)
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
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            ></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea 
                                className='input-ticket-desc' 
                                rows={4} name="desc" 
                                placeholder="Describe the ticket"
                                type="text" 
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            ></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input 
                                className='input-ticket-time' 
                                type="number" 
                                name="time" 
                                placeholder="Estimated time in hours"
                                onChange={(e) => setTime(e.target.value)}
                                value={time}
                                ></input>
                        </label>
                        <label className='manage-label-options' htmlFor="types">Type
                            <select 
                                id="types" 
                                name="type" 
                                className='input-ticket-option' 
                                onChange={(e) => setType(e.target.value)}
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
                                onChange={(e) => setPriority(e.target.value)}
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
                                onChange={(e) => setStatus(e.target.value)}
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