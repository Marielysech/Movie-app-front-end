import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useUserContext from "./UserContext";

const RequireAuth = ({children}) => {
    
    const {userInfo} = useUserContext()
    const location = useLocation()

    if(userInfo.name === "Stranger") {
        return <Navigate to='/auth/login' state={{ from : location }} replace />
    }

    return children
}

export default RequireAuth