import React, {useContext} from "react";
import { Outlet} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Landing from "../auth-components/Landing";

function ProtectedRoute() {
    const authContext = useContext(AuthContext)
    const {isAuthenticated} = authContext

    return (
        isAuthenticated ? <Outlet/> : <Landing/>
    )

}
export default ProtectedRoute