import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout} from "../hooks/useLogout"

// styles
import "./Navbar.css"
import Temple from "../assets/temple.svg"

export default function Navbar() {
  const {logout,isPending}=useLogout()
  return (
<div className='navbar'>
<ul>
    <li className='logo'>
    <img src={Temple} alt="logo" />
    <span>Majdi.</span>
    </li>
    <li>
        <Link to="/login">Login</Link>
    </li>
    <li>
        <Link to="/signup">Signup</Link>
    </li>
    <li>
      {!isPending && <button onClick={logout} className='btn'>Logout</button>}
      {isPending && <button disabled className='btn'>Logging out...</button>}

    </li>
</ul>
</div>

  )
}
