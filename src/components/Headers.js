import React from 'react'
import "./HeadersStyles.css"
import { Link } from "react-router-dom";
function Headers() {
  return (
    <div className='header-container'>
        <h1 className='header-heading'>SAVE ANIMALS ORGANISATION</h1>
        <div className='nav-bar-container'>
      <ul>
        <li>
            <Link to="/" className='nav-link' style={{textDecoration:"none",color:"white"}}>Home</Link>
        </li>
        <li>
            <Link to='/aboutus' className='nav-link' style={{textDecoration:"none",color:"white"}}>About Us</Link>
        </li>
        <li>
            
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Headers
