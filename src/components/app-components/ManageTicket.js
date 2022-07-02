import React from 'react'

function ManageTicket(props) {
    return (props.trigger) ? (
        <div className='manage-ticket'> 
                <div className='manage-ticket-inner'>
                    <h4 className='manage-ticket-h4'>Create a new ticket</h4>
                    
                    <button className='decline-button' onClick={() => props.setTrigger(false)}>Decline</button>
                    {props.children}
                    <button className='save-button' onClick={() => props.setTrigger(false)}>Save</button>
                </div>
        </div>
    ) : "";
}

export default ManageTicket