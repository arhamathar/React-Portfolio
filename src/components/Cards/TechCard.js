import React from 'react';
import TechList from '../TechList';

function TechCard(props) {
    return (
        <article className={props.className}>
            <header>{props.heading}</header>
            <div>
                <TechList />
                <TechList />
                <TechList />
            </div>
        </article>
    );
}

export default TechCard;
