import React from 'react';
import Github from '../../assets/images/github.svg';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <figure className="project-container">
                <a
                    href={props.project.deployed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="project-card__img" src={props.project.image} alt={props.project.name} />
                </a>
                <div className="project-info">
                    <h3>{props.project.name}</h3>
                    <div className="project-info__links">
                        <a
                            href={props.project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Github} alt="github" />&nbsp;
                            <span>Repo Link</span>
                        </a>
                        <button className="links-btn">Detils</button>
                    </div>
                </div>
            </figure>
        </div>
    );
}

export default ProjectCard;
