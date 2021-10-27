import React from 'react'
import { NavLink } from "react-router-dom";
// import Games from "./Games"


export default function NavBar() {
    return (
        <nav>
     
        <NavLink to="/"> Games </NavLink> &nbsp;
        <NavLink to="/addGame">Add a Game</NavLink> &nbsp;
        <NavLink to="/owned">Games Owned</NavLink>&nbsp;
        {/* <NavLink to="/users">Users</NavLink> */}
        <NavLink to="/userlogin">User Login</NavLink>

            
        </nav>
    )
}
