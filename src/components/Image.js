import React from 'react';

const Image = ({url}) => {

    return(
        <React.Fragment>
            <img src={url} alt="astronomic media of the day"/>

            <style jsx>{`
                
                img{
                    max-width: 100vw;
                }

                `}</style>
        </React.Fragment>
    )
}

export default Image;