import React from 'react'

function TeamMember() {

    let name = 'Konsta Löppönen'
    let email = "konlopponen@gmail.com"
    return (
        <tr className='project-row'>
            <td className='td-team'>{name}</td>
            <td className='td-team'>{email}</td>


        </tr>
    )
}

export default TeamMember