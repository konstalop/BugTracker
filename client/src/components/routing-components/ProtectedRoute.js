import React, {useContext} from "react";
import { Outlet} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Landing from "../auth-components/Landing";

/**
 * Handle creating private routes
 * @returns a protected route which can be only viewed when you are authenticated.
 */
const ProtectedRoute = () => {
    const authContext = useContext(AuthContext)
    const {isAuthenticated} = authContext

    return (
        isAuthenticated ? <Outlet/> : <Landing/>
    )

}

export default ProtectedRoute