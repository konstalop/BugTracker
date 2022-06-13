import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {

    let navigate = useNavigate()
    const routeTo = () => {
        let path = '../';
        navigate(path)
        
    }
    return (
        <div className="sidebar-wrapper">
            <h1 className="sidebar-h1"><span>Bug</span><span>Tracker</span></h1>
                    <p className="sidebar-text">Home</p>
                    <p className="sidebar-text">Tickets</p>
                    <p className="sidebar-text">Account</p>
                    <button className="new-button">New Project</button>
                    <button className="sidebar-logout" onClick={routeTo}>Logout</button>
        </div>
    )
}

export default Sidebar