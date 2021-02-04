import React from 'react';
import TechList from './TechList';
import { languages, technologies, tools } from '../../assets/data/tech';
import './Card.css';

function TechCard(props) {
    let element;
    if (props.heading === 'Languages') {
        element = languages.map(language => {
            return <TechList skill={language} key={language.id} />
        });
    }
    else if (props.heading === 'Tools') {
        element = tools.map(tool => {
            return <TechList skill={tool} key={tool.id} />
        });
    }
    else if (props.heading === 'Technologies') {
        element = technologies.map(technology => {
            return <TechList skill={technology} key={technology.id} />
        });
    }

    return (
        <article className={`${props.heading} techcard-content`}>
            <header className="title">{props.heading}</header>
            <div className="skill-box">
                {element}
            </div>
        </article>
    );
}

export default TechCard;
