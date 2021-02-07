import React from 'react';
import ProjectCard from '../components/Cards/ProjectCard';
import projects from '../assets/data/projects';

function Projects() {
    return (
        <section className="projects-list">
            {projects.map(project => {
                return <ProjectCard project={project} />
            })}
        </section>
    );
}

export default Projects;
