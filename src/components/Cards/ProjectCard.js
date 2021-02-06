import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <figure className="project-container">
                <a href={props.project.deployed_url}>
                    <img className="project-card__img" src={props.project.image} alt={props.project.name} />
                </a>
                <div className="project-info">
                    <h2>{props.project.name}</h2>
                    <div className="project-info__links">
                        <a href={props.project.github_url}>Repo Link</a>
                        <button>Detils</button>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default ProjectCard;
