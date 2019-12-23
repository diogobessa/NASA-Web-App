import React from 'react';
import Logo from './Logo';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = () => {

    return(
        <header>
            <Logo></Logo>
            <DatePicker></DatePicker>

            <style jsx>
                {`
                header{background:red; height:10px; width:100%}
                `}
            </style>
        </header>
    )
}

export default Header;