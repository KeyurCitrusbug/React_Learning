import { useState } from "react"
export const UseStateExample=()=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const handleLogin =() => {
        setIsLoggedIn(true)
    }
    const handleLogout =() => {
        setIsLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>LogOut</button>
            <h4>User is {isLoggedIn? 'Logged-In':'Log-Out'}</h4>
        </div>
    )
}