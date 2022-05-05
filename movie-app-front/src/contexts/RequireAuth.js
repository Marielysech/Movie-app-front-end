import React, {useContext} from "react";
import { Navigate, useLocation } from "react-router-dom";

import {useUserContext, UserContext} from '../contexts/UserContext'

const RequireAuth = ({children}) => {
    
    const {userInfo} = useUserContext()
    console.log(userInfo)
    const location = useLocation()

    if(userInfo.name === "Stranger") {
        return <Navigate to="/auth/login" state={{ from : location }} replace />
    }

    return children
}

export default RequireAuth