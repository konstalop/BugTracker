import React from 'react'
import Sidebar from "./Sidebar"

function Tickets() {

    return (
        <div>
            <Sidebar></Sidebar>
            <div className='tickets-wrapper'>
                <h1 className='tickets-h1'>My Tickets</h1>
                <div className='tickets-container'>
                    <h2 className='tickets-h2'>Tickets</h2>
                    <table className='tickets-table'></table>
                    <tr>
                        <th className='th-tickets'>NAME</th>
                        <th className='th-tickets'>TYPE</th>
                        <th className='th-tickets'>SEVERITY</th>
                        <th className='th-tickets'>DATE</th>
                    </tr>
                </div>
            </div>
        </div>

        

    )
}

export default Tickets