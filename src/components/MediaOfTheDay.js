import React from 'react';
import Title from './Title';
import Image from './Image';

const MediaOfTheDay = ({apod}) => {
    return(
        <div>
            <Title content={apod.title}></Title>
            <Image url={apod.url}></Image>
            <p>{apod.explanation}</p>

            <style jsx>{`
                p{
                    font-size: 1.5rem;
                    padding: 2rem;
                    text-align: left;                
                }
            `}</style>
        </div>
    )
}

export default MediaOfTheDay;