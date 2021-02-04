import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <figure className="project-container">
                <a href={props.deployed_url}>
                    <img src={props.image} alt={props.title} />
                </a>
                <div className="project-info">
                    <h2>{props.title}</h2>
                    <div>
                        <a href={props.github_url}>Repo Link</a>
                        <button>Detils</button>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default ProjectCard;
