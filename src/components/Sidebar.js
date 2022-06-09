import React from 'react'
import { NavLink } from 'react-router-dom'
//styles
import "./Sidebar.css"
import DashboardIcon from "../assets/dashboard_icon.svg"
import AddIcon from "../assets/add_icon.svg"


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
            {/* avatar and user later */}
            <p>Hey User</p>
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
