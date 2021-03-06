import React from 'react'
import "./Spinner.css"

export default function Spinner() {
  return (
    <>
        <main className='main-spinner'>
        <div className="container">
          <svg className="spinner" width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="circleAnimation" cx="77.5" cy="77.5" r="60" stroke="currentColor" strokeWidth="35"/>
            <path d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" stroke="currentColor" strokeWidth="35"/>
          </svg>
          <p>Loading</p>
        </div>
      </main>
    </>
  )
}
