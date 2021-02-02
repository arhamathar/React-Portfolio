import React from 'react';
import SkillCard from '../components/Cards/SkillCard'
import api from '../assets/api.svg';
import backend from '../assets/backend.svg';

function About() {
    return (
        <div className="about">
            <p>
                I am currently Computer Science Second Year Student at Jamia Millia
                Islamia, New Delhi.

            </p>
            <p>
                I describe myself as someone who's persistant, a quick learner
                and loves problem solving by using simple and scalable solutions.
            </p>
            <h2>What I Offer</h2>
            <div className="about-services">
                <SkillCard
                    image={api}
                    title="Frontend Development"
                    content="I can build a beautiful and scalable SPA using HTML, CSS and React.js"
                />
                <SkillCard
                    image={backend}
                    title="Backend Development"
                    content="Handle NoSql database MongoDb, Node-Express-server and Api using"
                />
                <SkillCard
                    image={api}
                    title="API Development"
                    content="I can develop robust REST API using nodeJs & express"
                />
                <SkillCard
                    image={backend}
                    title="Competitive Coder"
                    content="A daily problem solver in GeeksforGeeks"
                />
            </div>
        </div>
    );
}

export default About;
