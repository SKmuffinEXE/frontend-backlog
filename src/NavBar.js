import React from 'react'
import { NavLink } from "react-router-dom";
// import Games from "./Games"


export default function NavBar() {




    return (
        <nav id="navstyle">
     
        <NavLink to="/"> Games 🕹️ </NavLink>
        <NavLink to="/addGame">Add a Game 🕹️</NavLink>
        <NavLink to="/owned">Games Owned 🕹️</NavLink>
        {/* <NavLink to="/users">Users</NavLink> */}
        <NavLink to="/userlogin">User Login 🕹️</NavLink>

            
        </nav>
    )
}


