import React from 'react';

const Button = ({className, handleClick}) => {

    return (
        <React.Fragment>
            <button className={className} onClick={handleClick}>Feeling Lucky</button>
        </React.Fragment>
        )
}

export default Button;