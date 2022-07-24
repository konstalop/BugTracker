import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal';
import CreateProject from './CreateProject';
import { AuthContext } from '../../contexts/AuthContext';

/**
 * Side bar which appears at all pages, contains logout and new project. Also links for navigation.
 * @returns Sidebar with navigation menu and logout/create a new project 
 */
function Sidebar() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const authContext = useContext(AuthContext)
    const {logout, user} = authContext

    let navigate = useNavigate()

    let userName = ''

    /**
     * Load users firstname, dont display a name if its null
     */
    if (user == null) {
        userName = ''
    } else {
        userName = user.firstName
    }

    /**
     * Logout functionality from sidebar, handle logging out
     */
    const handleLogout = () => {
        logout()
        let path = '../';
        navigate(path)
        
    }

    return (
        <div className="sidebar-wrapper">
            <h1 className="sidebar-h1"><span>Bug</span><span>Tracker</span></h1>
                    <p className="gp">Welcome {userName}</p>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/app">Home</Link></p>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/tickets">Tickets</Link></p>
                    <p className="sidebar-text"><Link className='sidebar-link'to="/account">Account</Link></p>
                    <button 
                        className="new-button"
                        onClick={() => setButtonPopup(true)}
                        >New Project
                    </button>   
                    <button className="sidebar-logout" onClick={handleLogout}>Logout</button> 
                    <Modal 
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup}
                    >
                        <CreateProject 
                            trigger={buttonPopup} 
                            setTrigger={setButtonPopup}
                        >
                        </CreateProject>
                    </Modal>               
        </div>
    )
}

export default Sidebar