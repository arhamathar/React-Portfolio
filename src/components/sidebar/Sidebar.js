import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.svg';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar-avatar" src={Avatar} alt="avatar" />
            <h3>Arham <span>Athar</span></h3>
            <div>
                <h4>Web Developer</h4>
                <Link to="">
                    <div>
                        Download Resume
                </div>
                </Link>
            </div>
            <a
                href="https://github.com/arhamathar"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>
            <div className="contact">
                <p>Delhi, India</p>
                <p>1234567890</p>
                <p>arhamathar789@gmail.com</p>
            </div>
            <div className="social-contact">
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">LinkedIn</a>
            </div>
        </div>
    );
}

export default Sidebar;
