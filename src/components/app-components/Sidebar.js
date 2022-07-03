import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal';
import CreateProject from './CreateProject';
function Sidebar() {

    const [buttonPopup, setButtonPopup] = useState(false);

    let navigate = useNavigate()
    const routeTo = () => {
        let path = '../';
        navigate(path)
        
    }
    return (
        <div className="sidebar-wrapper">
            <h1 className="sidebar-h1"><span>Bug</span><span>Tracker</span></h1>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/app">Home</Link></p>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/tickets">Tickets</Link></p>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/account">Account</Link></p>
                    <button 
                        className="new-button"
                        onClick={() => setButtonPopup(true)}
                        >New Project
                    </button>   
                    <button className="sidebar-logout" onClick={routeTo}>Logout</button>                
        </div>
    )
}

export default Sidebar