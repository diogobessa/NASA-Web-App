import React from 'react';

const Button = ({handleClick}) => {

    return (
        <React.Fragment>
            <button className="button" onClick={handleClick}>Feeling Lucky</button>
        </React.Fragment>
        )
}

export default Button;