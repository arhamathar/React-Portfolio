import React from 'react';
import ProjectCard from '../components/Cards/ProjectCard';
import projects from '../assets/data/projects';

function Projects() {
    return (
        <div className="projects">
            <section className="projects-list">
                {projects.map(project => {
                    return <ProjectCard project={project} />
                })}
            </section>
        </div>
    );
}

export default Projects;
