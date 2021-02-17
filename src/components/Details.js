import React from 'react';

const Details = () => {
    return (
        <div className="details">
            <h2>Weather App</h2>
            <p>
                <span className="info_name">Description:- </span><br />
                This is a beautiful PWA weather app which uses service workers
                to cache data and works even if the users is offline.
            </p>
            <p>
                <span className="info_name">Tech Used:- </span>
                <li>Create React App</li>
                <li>Open Weather Api</li>
                <li>Service Workers</li>
            </p>
        </div>
    );
}

export default Details;
