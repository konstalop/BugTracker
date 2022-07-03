import React from 'react'

function ManageTicket(props) {
  

    return (props.trigger) ? (
        <div className='manage-ticket'> 
                <div className='manage-ticket-inner'>
                    <h4 className='manage-ticket-h4'>Manage Ticket</h4>
                    <form className='manage-ticket-form'>
                        <label className='manage-label'>Title
                        <input className='input-ticket-title' placeholder='Title' type="text"></input>
                        </label>
                        <label className='manage-label'>Description
                            <textarea className='input-ticket-desc' rows={4} placeholder="Describe the ticket"type="text"></textarea>
                        </label>
                        <label className='manage-label'>Time estimate (Hours)
                            <input className='input-ticket-time' type="number" placeholder="Estimated time in hours"></input>
                        </label>
                        <label className='manage-label-options' for="types">Type
                            <select id="types" name="type" className='input-ticket-option'>
                                <option value="issue">Issue</option>
                                <option value="feature">Feature</option>
                                <option value="suggestion">Suggestion</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Priority
                            <select id="priority" name="priority" className='input-ticket-option'>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </label>
                        <label className='manage-label-options'>Status
                            <select id="status" name="status" className='input-ticket-option'>
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
                            onClick={() => props.setTrigger(false)}
                            value="Submit"
                        />
                    </form>
                </div>
        </div>
    ) : "";
}

export default ManageTicket