import React from 'react';
import Title from './Title';
import Image from './Image';
import { gteMedium } from '../medias';
const MediaOfTheDay = ({apod}) => {
    return(
        <React.Fragment>
            <div className="backgroundExtend"></div>
            <div className="apodWrapper">
                <Title content={apod.title}></Title>
                <Image url={apod.url}></Image>
                <p>{apod.explanation}</p>

                <style jsx>{`
                    p{
                        font-size: 1.5rem;
                        padding: 2rem;
                        text-align: left;
                        margin-bottom: 0;               
                    } 

                    .apodWrapper{
                        z-index:2;
                        position: relative;
                        margin-bottom:4rem;
                    }

                    .backgroundExtend{
                        display:none;
                    }
                    @media(${gteMedium}){
                        div.apodWrapper{
                            max-width: 80vw;
                            margin: auto;
                        }

                        p{
                            font-size: 2rem;
                            padding: 0 12rem 0 2rem;
                        }

                        .backgroundExtend{
                            display: inherit;
                            z-index:0;
                            height: 22rem;
                            width:100%;
                            position: absolute;
                            top:0;
                            left:0;
                            background:var(--nasa-blue);
                        }
                    }

                `}</style>
            </div>
        </React.Fragment>
    )
}

export default MediaOfTheDay;