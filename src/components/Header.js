import React, {useState} from 'react';
import Logo from './Logo';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <header>
            <Logo></Logo>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

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