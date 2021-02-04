import React from 'react';
import SkillCard from '../components/Cards/SkillCard'
import Api from '../assets/images/api.svg';
import Backend from '../assets/images/repair.svg';
import Frontend from '../assets/images/computer.svg';
import Puzzle from '../assets/images/puzzle.svg';

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
                <SkillCard
                    image={Frontend}
                    title="Frontend Development"
                    content="I can build beautiful SPA using HTML, CSS and React.js"
                />
                <SkillCard
                    image={Backend}
                    title="Backend Development"
                    content="Handle NoSql database , Node-Express-server and Api using"
                />
                <SkillCard
                    image={Api}
                    title="API Development"
                    content="I can develop robust REST API using nodeJs & express"
                />
                <SkillCard
                    image={Puzzle}
                    title="Competitive Coder"
                    content="A daily problem solver in GeeksforGeeks"
                />
            </div>
        </div>
    );
}

export default About;
