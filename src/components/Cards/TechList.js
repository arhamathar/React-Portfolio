import React from 'react';

const TechList = (props) => {
    return (
        <div className="skill-info">
            <img className="skill-info__logo" src={props.skill.icon} alt={props.skill.alt} />
            <p>{props.skill.name}</p>
        </div>
    );
}

export default TechList;
