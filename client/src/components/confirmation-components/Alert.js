import React, { useContext } from 'react'
import { AlertContext } from '../../contexts/AlertContext'


const Alert = () => {

    const { alerts } = useContext(AlertContext)

    return (
        alerts.length > 0 && alerts.map((alert)=> 
            <div key={alert.id} className='alert-container'>
                <p className='alert-text'>{alert.msg}</p>
            </div>
         )
    )
}

export default Alert