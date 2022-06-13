import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout} from "../hooks/useLogout"
import {useAuthContext} from "../hooks/useAuthContext"

// styles
import "./Navbar.css"
import Temple from "../assets/temple.svg"

export default function Navbar() {
  const {logout,isPending}=useLogout()
  const {user} = useAuthContext()
  return (
<div className='navbar'>
<ul>
    <li className='logo'>
    <img src={Temple} alt="logo" />
    <span>Management.</span>
    </li>

    {/* user not logged in */}
    {!user && (
      <>
    <li>
        <Link to="/login">Login</Link>
    </li>
    <li>
        <Link to="/signup">Signup</Link>
    </li>
    </>
    )}
    {/* user logged in */}
    {user && (
    <>
    <li>
      {!isPending && <button onClick={logout} className='btn'>Logout</button>}
      {isPending && <button disabled className='btn'>Logging out...</button>}

    </li>
    </>
    )}
</ul>
</div>

  )
}
