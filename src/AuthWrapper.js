import { useContext , React } from "react"
import { AppContext } from "./contextProvider"

import { Navigate, useLocation } from "react-router-dom"

export const AuthWrapper =({children})=>{

    const { isLoggedIn } = useContext(AppContext)


    const location = useLocation()

    

    

    return(
        isLoggedIn ? children : <Navigate to="/login"  state={{from :location}}/>
    )
}