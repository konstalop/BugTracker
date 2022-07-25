import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Sidebar from "./Sidebar"
import Spinner from './Spinner'
import UserInfo from './UserInfo'

/**
 * Page to display account information, currently under work.
 * @returns Page for account
 */
function Account() {

    const {user, loading} = useContext(AuthContext)

    return (
        <div> 
        <Sidebar/>
            <div className='account-wrapper'>
                {
                    user !== null && !loading ? <UserInfo/> : 
                        <div>
                            <h1 className='home-h1'>Loading user...</h1>
                            <Spinner/>
                        </div>
                }
            </div>
        </div>
    )
}

export default Account