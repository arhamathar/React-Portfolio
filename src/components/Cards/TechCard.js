import React from 'react';

function TechCard(props) {
    return (
        <article className="languages">
            <h3>Languages</h3>
            <div>
                <div className="skill-info">
                    <img className="skill-info__logo" src={props.Javascript} alt="js" />
                    <p>Javascript</p>
                </div>
                <div className="skill-info">
                    <img className="skill-info__logo" src={props.Python} alt="python" />
                    <p>Python</p>
                </div>
                <div className="skill-info">
                    <img className="skill-info__logo" src={props.Cpp} alt="c++" />
                    <p>C++</p>
                </div>
            </div>
        </article>
    );
}

export default TechCard;
