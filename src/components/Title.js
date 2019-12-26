import React from 'react';
import { gteMedium, gteLarge } from '../medias';

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
                    font-size:2rem;
                }
                @media (${gteMedium}) {
                    h1 {
                        font-size:4rem;
                    }
                }
            `}</style>
        </h1>
    )
}

export default Title;