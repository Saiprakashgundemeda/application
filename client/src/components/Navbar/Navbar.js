import { RiProductHuntLine } from "react-icons/ri"; 
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container bg-primary">
      <div className="left-navbar-container">
       <RiProductHuntLine className="icon-container" size={40}/>
       <p className="m-2">Prakash</p>
      </div>
      <ul className="right-navbar-container m-2">
        <Link to="/" >
          <li className="text-white">
            Home
          </li>
        </Link>
        <Link to="/profile" >
          <li className="text-white">
            Profile
          </li>
        </Link>
        <Link to="/logout" >
          <li className="text-white">
            Logout
          </li>
        </Link>
        
      </ul> 
    </div>
  )
}

export default Navbar
