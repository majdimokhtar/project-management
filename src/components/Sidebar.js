import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from "../assets/dashboard_icon.svg"
import AddIcon from "../assets/add_icon.svg"
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'

//styles
import "./Sidebar.css"


export default function Sidebar() {
    const {user} =useAuthContext()
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
            {/* avatar and user later */}
            <Avatar src={user.photoURL} />
            <p>Hey {user.displayName} </p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to="/" >
                            <img src={DashboardIcon} alt="Dashboard icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" >
                            <img src={AddIcon} alt="Add icon" />
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    </div>
  )
}
