import React from 'react';
import Avatar from '../../assets/images/avatar.svg';
import Github from '../../assets/images/github.svg';
import Download from '../../assets/images/download.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar-avatar" src={Avatar} alt="avatar" />
            <h2>Arham <span>Athar</span></h2>
            <div>
                <h4>Web Developer</h4>
            </div>
            <a href="/">
                <div className="info">
                    <img src={Download} alt="download" />
                        Download Resume
                    </div>
            </a>
            <a
                href="https://github.com/arhamathar"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="info">
                    <img className="sidebar-icon" src={Github} alt="github" />
                    <h4>Github</h4>
                </div>
            </a>
            <div className="contact">
                <p>Delhi, India</p>
                <p>123-456-7890</p>
                <p>arhamathar789@gmail.com</p>
            </div>
            <div className="social-contact">
                <a href="https://www.facebook.com/Arham.athar.789">
                    <img className="sidebar-icon" src={Facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/athararham/">
                    <img className="sidebar-icon" src={Instagram} alt="instagram" />
                </a>
                <a href="https://www.linkedin.com/in/arham-athar-4b29bb1ab">
                    <img className="sidebar-icon" src={Linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
