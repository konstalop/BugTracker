import React from 'react'

function Selected() {
    return (
        <div className='ticket-view-container'>
                    <h4 className='project-tickets-view-h4'>Selected Ticket</h4>
                    <table className='ticket-info-table'>
                    <tr>
                        <th className='ticket-info-th'>NAME</th>
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
                        <th className='ticket-info-th'>Severity</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>12.07.2000</td>
                        <td className='ticket-info-td'>Feature</td>
                        <td className='ticket-info-td'>0</td>
                    </tr>
                    <tr>
                        <th className='ticket-info-th'>Status</th>
                        <th className='ticket-info-th'>Priority</th>
                    </tr>
                    <tr>
                        <td className='ticket-info-td'>Open</td>
                        <td className='ticket-info-td'>Immediate</td>
                    </tr>
                    <button className='new-ticket'>Edit ticket</button>
                    </table>
        </div>
    )
}

export default Selected