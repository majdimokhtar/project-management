import React from 'react'
import {useCollection} from "../hooks/useCollection"
import Avatar from './Avatar'

// styles
import "./OnlineUsers.css"

export default function OnlineUsers() {
    const {error,documents} = useCollection("users")
  return (
    <div className='user-list'>
        <h2>All users</h2>
        {error && <div className='error'>{error}</div>}
        {documents &&  documents.map((user)=>(
            <div key={user.id} className="user-list-item">
                {user.online &&<span className='online-user'></span>}
                <span>{user.displayName}</span>
                <Avatar src={user.photoURL} />
            </div>
        )) }
    </div>
  )
}
