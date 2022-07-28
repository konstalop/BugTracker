import React, { useContext } from 'react'
import { AlertContext } from '../../contexts/alerts/AlertContext'

/**
 * Alert which is going to be displayed if data being submitted has issues.
 * @returns alert component
 */
const Alert = () => {

    const { alerts } = useContext(AlertContext)

    return (
            alerts.map((alert)=> 
            <div key={alert.id} className='alert-container'>
                <p className='alert-text'>{alert.msg}</p>
            </div>
         )
    )
}

export default Alert