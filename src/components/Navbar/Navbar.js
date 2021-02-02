import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('About');

    const onClickHandler = (e) => {
        console.log(e);
        setActive(e)
    }

    return (
        <div className="navbar">
            <li className="active">
                <h3 className="acitve-heading">{active}</h3>
            </li>
            <li className="navlinks">
                {active !== 'About' && (
                    <NavLink
                        onClick={() => onClickHandler('About')}
                        to="/"
                    >About</NavLink>
                )}
                {active !== 'Resume' && (
                    <NavLink
                        onClick={() => onClickHandler('Resume')}
                        to="/resume"
                    >Resume</NavLink>
                )}
                {active !== 'Projects' && (
                    <NavLink
                        onClick={() => onClickHandler('Projects')}
                        to="/projects"
                    >Projects</NavLink >
                )}
            </li >
        </div >
    );
}

export default Navbar;
