import React, { useState } from 'react';
import Modal from '../components/UI/Modal';
import projects from '../assets/data/projects';
import ProjectCard from '../components/Cards/ProjectCard';

function Projects() {
    const [show, setShow] = useState(false);

    const showModal = (e) => {
        setShow(true);
    }

    const closeModal = (e) => {
        setShow(false);
    }

    return (
        <section className="projects-list">
            <Modal show={show} close={closeModal} />
            {projects.map(project => {
                return <ProjectCard project={project} open={showModal} />
            })}
        </section>
    );
}

export default Projects;
