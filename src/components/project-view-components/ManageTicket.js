import React from 'react'
import { TicketContext } from '../../contexts/TicketContext'
import { useContext, useState } from "react"

function ManageTicket(props) {
    
    const {addTicket} = useContext(TicketContext)

    const [ticket, setTicket] = useState({
        title: "",
        desc: "",
        time: "",
        type: "",
        priority: "",
        status: "",
        date: "05.07.22",
        author: "konsta"
    })


    const handlechange = (event) => {
        setTicket({...ticket, [event.target.name]: event.target.value})
    }

    const {title, desc, time, type, priority, status, date, author} = ticket

    const handleSubmit = (event) => {
        props.setTrigger(false)
        addTicket(title, desc, time, type, priority, status, date, author);
        console.log(ticket)
    }



    return (
        <div className='manage-ticket'> 
                <div className='manage-ticket-inner'>
                    <h4 className='manage-ticket-h4'>Manage Ticket</h4>
                    <form className='manage-ticket-form'>
                        <label className='manage-label'>Title
                            <input className='input-ticket-title' name="title" placeholder='Title' type="text" onChange={handlechange}></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea className='input-ticket-desc' rows={4} name="desc" placeholder="Describe the ticket"type="text" onChange={handlechange}></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input className='input-ticket-time' type="number" name="time" placeholder="Estimated time in hours"onChange={handlechange} ></input>
                        </label>
                        <label className='manage-label-options' htmlFor="types">Type
                            <select id="types" name="type" className='input-ticket-option' onChange={handlechange}>
                                <option value="issue">Issue</option>
                                <option value="feature">Feature</option>
                                <option value="suggestion">Suggestion</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Priority
                            <select id="priority" name="priority" className='input-ticket-option'
                                onChange={handlechange}
                                >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Status
                            <select id="status" name="status" className='input-ticket-option' onChange={handlechange}>
                                <option value="open">Open</option>
                                <option value="working">Working</option>
                                <option value="closed">Closed</option>
                            </select>
                        </label>
                        <button
                            className='decline-button' 
                            onClick={() => props.setTrigger(false)}
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