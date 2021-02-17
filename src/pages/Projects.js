import React from 'react';
import projects from '../assets/data/projects';
import ProjectCard from '../components/Cards/ProjectCard';

function Projects(props) {
    return (
        <section className="projects-list">
            {projects.map(project => {
                return <ProjectCard project={project} open={props.showModal} />
            })}
        </section>
    );
}

export default Projects;
