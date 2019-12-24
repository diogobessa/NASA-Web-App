import React from 'react';

const Image = ({url}) => {

    return(
        <React.Fragment>
            <img src={url} alt="featured image"/>

            <style jsx>{`
                
                img{
                    max-width: 100vw;
                }

                `}</style>
        </React.Fragment>
    )
}

export default Image;