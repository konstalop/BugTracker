import React from 'react'
import Sidebar from '../app-components/Sidebar'
import TeamMember from './TeamMember'
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
                    </tr>
                        <TeamMember></TeamMember>
                        <button className='new-button-member'>New member</button>
                </table>
            </div>
            <div className='tickets-container'>
                
            </div>
            </div>
        </div>
    )
}

export default ProjectView