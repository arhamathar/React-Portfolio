import React from 'react';
import './Card.css';

function SkillCard(props) {
    return (
        <div className="skillCard">
            <img className="skillCard-logo" src={props.skills.icon} alt={props.skills.alt} />
            <div className="skillCard-body">
                <h5>{props.skills.title}</h5>
                <p>{props.skills.content}</p>
            </div>
        </div>
    );
}

export default SkillCard;
