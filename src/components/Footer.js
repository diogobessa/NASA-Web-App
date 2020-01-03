import React from 'react';

const Footer = () => {
    return (
    <footer>
        <p>NASA @ Astronomy Picture of the Day</p>
        <style jsx global>{`
            footer{
                margin:10rem 5rem 0;
                padding:2rem;
                box-sizing: border-box;
                border-top:1px solid grey;
            }
            footer > p {
                text-align: center;
                font-size: 1rem;
                padding:2rem;
            }
        `}</style>    
    </footer>
    )
}

export default Footer;