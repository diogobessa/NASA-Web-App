import React from 'react';

const isImage = url => {
    return(url.match(/\.(jpeg|jpg|png|gif)$/) != null);
}

const isYoutubeVideo = url => {
    const youtubeRegex = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/;
    return(url.match(youtubeRegex) != null);
}

const mediaElement = url => {

    if(isImage(url)){
        return <img src={url} alt="astronomic media of the day"/>;
    }

    if(isYoutubeVideo(url)){
        return <iframe id="player" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
    }
    return <p>not an image</p>;
}

const Image = ({url}) => {
    return(
        <React.Fragment>
            {mediaElement(url)}
            <style jsx>{`
                iframe{
                    width:80vw;
                    height:calc(80vw/1.77);
                }
                img{
                    max-width: 100vw;
                    width:100%;
                }

                `}</style>
        </React.Fragment>
    )
}

export default Image;