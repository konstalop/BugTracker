import React from 'react'

/**
 * Row of teammember data. NOT FULLY FUNCTIONAL YET
 * @returns teammember row
 */
const TeamMember = ({user}) => {

    if (user == null) {
        return (
            <tr></tr>
        )
    }

    return (
        <tr className='project-row'>
            <td className='td-team'>{user.firstName+ " " + user.lastName}</td>
            <td className='td-team'>{user.email}</td>
        </tr>
    )
}

export default TeamMember