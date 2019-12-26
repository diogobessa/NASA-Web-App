import React from 'react';

const Image = ({url}) => {

    return(
        <React.Fragment>
            <img src={url} alt="astronomic media of the day"/>

            <style jsx>{`
                
                img{
                    max-width: 100vw;
                    width:100%;
                }

                `}</style>
        </React.Fragment>
    )
}

export default Image;