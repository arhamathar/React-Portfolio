import React from 'react';
import TechCard from '../components/Cards/TechCard';

function Resume() {
    return (
        <div className="resume">
            <div className="qualifications">
                <div className="expirence">
                    <h2>Expirence</h2>
                    <p>
                        I have been coding for around 2 years now. I'm currently
                        working on MERN Project & looking for Open Source
                        contributions.
                    </p>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <h3><strong>BTECH</strong> (Computer Science)</h3>
                    <p>Jamia Millia Islamia <strong>(2019-2023)</strong></p>
                </div>
            </div>
            <div className="skills">
                <TechCard heading="Languages" />
                <TechCard heading="Tools" />
                <TechCard heading="Technologies" />
            </div>
        </div>
    );
}

export default Resume;
