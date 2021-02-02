import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <li className="active">
                <NavLink activeClassName="active" exact to="/">About</NavLink>
            </li>
            <li className="navlinks">
                <NavLink to="/">About</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/projects">Project</NavLink>
            </li>
        </div >
    );
}

export default Navbar;
