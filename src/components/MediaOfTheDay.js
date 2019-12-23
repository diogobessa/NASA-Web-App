import React from 'react';

const MediaOfTheDay = ({apod}) => {
    console.log(apod);
    return(
        <div>
            <h1>{apod.title}</h1>
            <div>{apod.url}</div>
            <p>{apod.explanation}</p>
        </div>
    )
}

export default MediaOfTheDay;