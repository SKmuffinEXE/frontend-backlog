import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
     
        <NavLink to="/"> Games </NavLink>
        <NavLink to="/addGame">Add a Game</NavLink>
        <NavLink to="/owned">Games Owned</NavLink>
        {/* <NavLink to="/userlogin">User Login</NavLink> */}

            
        </nav>
    )
}
