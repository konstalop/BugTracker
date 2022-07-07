import React, { useContext } from 'react'
import ManageTicket from './ManageTicket';
import { useState } from 'react'
import Modal from '../app-components/Modal';
function Selected({ticket}) {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='ticket-view-container'>
                    <h4 className='project-tickets-view-h4'>Selected Ticket</h4>
                    <table className='ticket-info-table'>
                        <tbody>
                    <tr>
                        <th className='ticket-info-th'>TITLE</th>
                        <th className='ticket-info-th'>DESCRIPTION</th>
                        <th className='ticket-info-th'>AUTHOR</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>Create frontend</td>
                        <td className='ticket-info-td'>Build frontend for bugtracker project for portfolio.</td>
                        <td className='ticket-info-td'>Konsta</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>DATE</th>
                        <th className='ticket-info-th'>TYPE</th>
                        <th className='ticket-info-th'>PRIORITY</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>12.07.2000</td>
                        <td className='ticket-info-td'>Feature</td>
                        <td className='ticket-info-td'>Critical</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>STATUS</th>
                        <th className='ticket-info-th'>TIME ESTIMATE (HOURS)</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>Open</td>
                        <td className='ticket-info-td'>20</td>
                    </tr>
                   
                     </tbody>
                    </table>
                    <button
                     className='new-ticket'
                     onClick={() => setButtonPopup(true)}
                     >Edit ticket
                     </button>
                    <Modal
                        trigger={buttonPopup} 
                        setTrigger={setButtonPopup}
                    >
                        <ManageTicket trigger={buttonPopup} setTrigger={setButtonPopup}></ManageTicket>
                    </Modal>
                   
        </div>
    )
}

export default Selected