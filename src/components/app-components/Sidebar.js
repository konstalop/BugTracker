import React from 'react'


function Sidebar() {
    return (
        <div className="sidebar-wrapper">
            <h1 className="sidebar-h1"><span>Bug</span><span>Tracker</span></h1>
                    <p className="sidebar-text">Home</p>
                    <p className="sidebar-text">Tickets</p>
                    <p className="sidebar-text">Account</p>
                    <button className="sidebar-logout" onClick="">Logout</button>
        </div>
    )
}

export default Sidebar