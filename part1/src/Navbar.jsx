import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
  return (
    <nav>

       <Link to="/contact"
       style={{color : location.pathname === '/contact' ? "red" : "blue"}}
       >
        Contact
       </Link>
       <Link to="/hehe"
       style={{color : location.pathname === '/hehe' ? "green" : "yellow"}}
       >
        hehe
       </Link>


        <NavLink
        to="/"
        className={({isActive})=>isActive? 'bg-amber-950 text-black border-2 p-2' : "bg-yellow-800"}
        >
            Home
        </NavLink>
        <div>
            
        </div>
        <NavLink
        to="/about"
        className={({isActive})=>isActive? 'bg-amber-950 text-black border-2 p-2' : "bg-yellow-800"}
        >
            About
        </NavLink>
    </nav>
  )
}

export default Navbar
