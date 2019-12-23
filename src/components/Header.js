import React from 'react';
import Logo from './Logo';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = () => {

    return(
        <header>
            <Logo></Logo>
            <DatePicker></DatePicker>

            <style jsx>{`
                header{
                    display:flex;
                    justify-content: space-between;
                    align-items: stretch;
                    background:#CCC;
                    padding:2rem; 
                    width:100%
                    }
                `}</style>
        </header>
    )
}

export default Header;