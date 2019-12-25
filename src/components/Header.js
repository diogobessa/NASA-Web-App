import React, {useEffect, useState} from 'react';
import Logo from './Logo';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = ({date, changeDatePicker}) => {
    //const [startDate, setStartDate] = useState(new Date());

    /*useEffect(() => {
        fetchFunction(startDate);
    }, [fetchFunction]);*/

    return(
        <header>
            <Logo></Logo>
            <DatePicker selected={date} dateFormat="yyyy-MM-dd" onChange={date => changeDatePicker(date)} />

            <style jsx>{`
                header{
                    display:flex;
                    justify-content: space-between;
                    align-items: stretch;
                    background:var(--nasa-blue);
                    padding:2rem; 
                    width:100%;
                    box-sizing:border-box;
                    }

                .react-datepicker__input-container > input{
                    border:none;
                    border-radius:0.14rem;
                    padding:0.5rem;
                }
                `}</style>
        </header>
    )
}

export default Header;