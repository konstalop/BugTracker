import React from 'react'
/**
 * show a confirmation box if action needs confirming.
 * @param {Boolean} action confirm action
 * @param {Boolean} confirm show confirm box if set to true
 * @returns 
 */
const Confirmation = ({action, confirm, message, message2}) => {
    return (confirm) ? (
        <div className='confirm-container' onClick={() => action(false)}>
            <div className='confirm-inner-container'>
                <h2 className='confirmation-h2'>Confirm your action</h2>
                <h4 className='confirmation-h4'>{message}</h4>
                <p className='confirmation-p'>{message2}</p>
                <button className='save-button' onClick={() => action(true)}>Confirm</button>
                <button className='decline-button' onClick={() => action(false)}>Cancel</button>
            </div>
        </div> 
    ) : ""
}

export default Confirmation