import React from 'react';

const Title = ({content}) => {
    return(

        <h1>{content}

            <style jsx>{`
                h1{
                    background: var(--nasa-blue);
                    padding:2rem 8rem 2rem 2rem;
                    margin:0;
                    box-sizing: border-box;
                    text-align: var(--text-align);
                    color:var(--white);
                }
            `}</style>
        </h1>
    )
}

export default Title;