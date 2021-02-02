import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('');
    const query = useLocation();

    useEffect(() => {
        if (query.pathname === "/") {
            setActive("About");
        }
        else if (query.pathname === "/resume") {
            setActive("Resume");
        }
        else if (query.pathname === "/projects") {
            setActive("Projects");
        }
    }, [query]);

    const onClickHandler = (e) => {
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
