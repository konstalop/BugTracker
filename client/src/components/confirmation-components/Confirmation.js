import React from 'react'

const Confirmation = ({action, confirm}) => {
    return (confirm) ? (
        <div className='confirm-container' onClick={() => action(false)}>
            <div className='confirm-inner-container'>
                <h2 className='confirmation-h2'>Are you sure?</h2>
                <h4 className='confirmation-h4'>Please confirm this action.</h4>
                <button className='save-button' onClick={() => action(true)}>Confirm</button>
                <button className='decline-button' onClick={() => action(false)}>Cancel</button>
            </div>
        </div> 
    ) : ""
}

export default Confirmation