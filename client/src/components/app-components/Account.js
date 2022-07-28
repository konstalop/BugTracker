import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'
import Sidebar from "./Sidebar"
import Spinner from './Spinner'
import UserInfo from './UserInfo'

/**
 * Page to display account information.
 * @returns Page for account information
 */
const Account = () =>  {

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