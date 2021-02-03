import React from 'react';

const TechList = (props) => {
    return (
        <div className="skill-info">
            <img className="skill-info__logo" src={props.Javascript} alt="js" />
            <p>Javascript</p>
        </div>
    );
}

export default TechList;
