import React from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import { useContext, useState } from "react"
import { ProjectContext } from '../../contexts/ProjectContext'
import {v4 as uuidv4} from "uuid";

/**
 * Form to add and edit ticket.
 * @param {*} props data and trigger to close form.
 * @returns this content is displayed inside a modal.
 */

function ManageTicket(props) {
    

    const {tickets} = useContext(TicketContext)
    const {projects} = useContext(ProjectContext)

    const [ticket, setTicket] = useState({
        ticketId: uuidv4(),
        title: "",
        desc: "",
        time: "",
        type: "Issue",
        priority: "Low",
        status: "Open",
        date: new Date().toLocaleDateString(),
        author: "konsta"
    })

    const ticketIndex = tickets.findIndex(ticket => ticket.id === props.currentTicket)
    const ticketIndexInProject = projects[props.projectIndex].tickets.findIndex(ticket => ticket.id === props.ticket)

    console.log(props)
    console.log(ticketIndex, ticketIndexInProject)

    const handlechange = (event) => {
        setTicket({...ticket, [event.target.name]: event.target.value})
    }

   // const {ticketId, title, desc, time, type, priority, status, date, author} = ticket

    /**
     * Handle submitting form and creating a new ticket
     * @param {*} event event 
     */
    const handleSubmit = (event) => {
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
                                onChange={handlechange}
                                value={tickets[ticketIndex].title}
                            ></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea 
                                className='input-ticket-desc' 
                                rows={4} name="desc" 
                                placeholder="Describe the ticket"
                                type="text" 
                                onChange={handlechange}
                                value={tickets[ticketIndex].desc}
                            ></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input 
                                className='input-ticket-time' 
                                type="number" 
                                name="time" 
                                placeholder="Estimated time in hours"
                                onChange={handlechange}
                                value={tickets[ticketIndex].time}
                                ></input>
                        </label>
                        <label className='manage-label-options' htmlFor="types">Type
                            <select 
                                id="types" 
                                name="type" 
                                className='input-ticket-option' 
                                onChange={handlechange}
                                value={tickets[ticketIndex].type}
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
                                value={tickets[ticketIndex].priority}
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
                                value={tickets[ticketIndex].status}
                                >
                                <option value="Open">Open</option>
                                <option value="Working">Working</option>
                                <option value="Closed">Closed</option>
                            </select>
                        </label>
                        <button
                            className='decline-button' 
                            onClick={(e) => handleDecline(e)}
                            >Close
                        </button>
                        <input
                            type="submit"
                            className='save-button'
                            onClick={(event) => handleSubmit(event)}
                            value="Submit"

                        />
                    </form>
                </div>
        </div>
    )
}

export default ManageTicket