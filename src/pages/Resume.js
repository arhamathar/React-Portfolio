import React from 'react'
import Cpp from '../assets/images/cpp.svg';
import Python from '../assets/images/python.svg';
import Javascript from '../assets/images/js.svg';

function Resume() {
    return (
        <div className="resume">
            <div >
                <div className="education"></div>
                <div className="expirence"></div>
            </div>
            <div className="skills">
                <article className="languages">
                    <h3>Languages</h3>
                    <div>
                        <div className="skill-info">
                            <img className="skill-info__logo" src={Javascript} alt="js" />
                            <p>Javascript</p>
                        </div>
                        <div className="skill-info">
                            <img className="skill-info__logo" src={Python} alt="python" />
                            <p>Python</p>
                        </div>
                        <div className="skill-info">
                            <img className="skill-info__logo" src={Cpp} alt="c++" />
                            <p>C++</p>
                        </div>
                    </div>
                </article>
                <article className="technologies">
                    <h3>Technologies</h3>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Javascript} alt="js" />
                        <p>Javascript</p>
                    </div>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Python} alt="python" />
                        <p>Python</p>
                    </div>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Cpp} alt="c++" />
                        <p>C++</p>
                    </div>
                </article>
                <article className="tools">
                    <h3>Tools</h3>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Javascript} alt="js" />
                        <p>Javascript</p>
                    </div>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Python} alt="python" />
                        <p>Python</p>
                    </div>
                    <div className="skill-info">
                        <img className="skill-info__logo" src={Cpp} alt="c++" />
                        <p>C++</p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Resume;
