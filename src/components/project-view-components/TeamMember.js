import React from 'react'

function TeamMember() {

    let name = 'Testi Henkilö'
    let email = "testiemaili@email.com"
    let phone = "0123456789"
    return (
        <tr className='project-row'>
            <td className='td-team'>{name}</td>
            <td className='td-team'>{email}</td>
            <td className='td-team'>{phone}</td>
        </tr>
    )
}

export default TeamMember