import React from 'react';
import './Card.css';

function SkillCard(props) {
    return (
        <div className="skillCard">
            <img className="skillCard-logo" src={props.image} alt="" />
            <div className="skillCard-body">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default SkillCard;
