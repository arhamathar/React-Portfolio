import React from 'react';

const Details = (props) => {
    console.log(props.details.title);
    return (
        <div className="details">
            <h2>{props.details.title}</h2>
            <p>
                <span className="info_name">Description:- </span><br />
                {props.details.description}
            </p>
            <p>
                <span className="info_name">Tech Used:- </span>
                {props.details.techs.map((tech, index) => {
                    return <li key={index}>{tech}</li>
                })}
            </p>
        </div>
    );
}

export default Details;
