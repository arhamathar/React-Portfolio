import React from 'react';
import SkillCard from '../components/Cards/SkillCard';
import skills from '../assets/data/about';

function About() {
    return (
        <div className="about">
            <p>
                I am currently C.S.E Second Year Student at Jamia Millia
                Islamia, New Delhi.
            </p>
            <p>
                I describe myself as someone who's persistant, a quick learner
                and loves problem solving by using simple and scalable solutions.
            </p>
            <h2>What I Offer</h2>
            <div className="about-services">
                {skills.map(skill => {
                    return <SkillCard skills={skill} />
                })}
            </div>
        </div>
    );
}

export default About;
