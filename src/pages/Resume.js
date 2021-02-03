import React from 'react';
import TechCard from '../components/Cards/TechCard';

function Resume() {
    return (
        <div className="resume">
            <div >
                <div className="education"></div>
                <div className="expirence"></div>
            </div>
            <div className="skills">
                <TechCard className="languages" heading="Languages" />
                <TechCard className="technologies" heading="Technologies" />
                <TechCard className="tools" heading="Tools" />
            </div>
        </div>
    );
}

export default Resume;
