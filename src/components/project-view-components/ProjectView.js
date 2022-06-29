import React from 'react'
import Sidebar from '../app-components/Sidebar'
import TeamMember from './TeamMember'
import Ticket from '../app-components/Ticket'

function ProjectView() {

    const projectName = "Build bugtracker"

    return (
        
        <div>
            <Sidebar></Sidebar>
            <div className='project-view-container'>
                <h1 className='project-view-name'>{projectName}</h1>
            <div className='project-team-container'>
                <h4 className='project-team-header'>Team</h4>
                <table className='team-table'>
                    <tr>
                        <th className='th-project'>MEMBER</th>
                        <th className='th-project'>EMAIL</th>
                        <th className='th-project'>PHONE</th>
                    </tr>
                        <TeamMember></TeamMember>
                        <button className='new-button-member'>New member</button>
                </table>
            </div>
                <div className='tickets-project-container'>
                    <h4 className='project-tickets-h4'>Tickets</h4>
                    <table className='project-tickets-table'>
                        <tr>
                            <th className='th1'>NAME</th>
                            <th className='th2'>TYPE</th>
                            <th className='th3'>DATE</th>
                        </tr>
                        <Ticket/>
                        <Ticket/>
                        <Ticket/>
                        <Ticket/>
                        <Ticket/>
                    </table>
                    <button className='new-ticket'>New</button>
                </div>
                <div className='ticket-view-container'>

                </div>
            </div>
        </div>
    )
}

export default ProjectView