import React, {useEffect, useState} from 'react';
import { gteMedium } from '../medias';
import DatePicker from 'react-datepicker';
import { Logo, Button } from '../components';

import "react-datepicker/dist/react-datepicker.css";
import { Date } from 'core-js';

const Header = ({date, changeDatePicker, error}) => {
    const errorStatus = useState(false);
    let datePickerClass = "nasaDatePicker";
    let placeholderText = "";

    if(error){
        datePickerClass += " invalidDate";
        date = "";
        placeholderText = "select a valid date";
    }

    const randomDate = () => {
        const excludeDates = [new Date(1995, 5, 17), new Date(1995, 5, 18), new Date(1995, 5, 19)];
        const min = new Date(1995, 5, 16);
        const max = new Date();
        let newDate;

        while(newDate === undefined || excludeDates.includes(newDate)){
            newDate = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
        }

        changeDatePicker(newDate);
    }

    return(
        <header>
            <Logo className="logoWrapper"></Logo>
            <Button handleClick={randomDate}></Button>
            <DatePicker 
                selected={date}
                placeholderText = {placeholderText}
                dateFormat="yyyy-MM-dd" 
                onChange={date => changeDatePicker(date)} 
                className={datePickerClass}
            />

            <style jsx>{`
                header{
                    display:flex;
                    justify-content: flex-end;
                    align-items: center;
                    background:var(--nasa-blue);
                    padding:2rem; 
                    width:100%;
                    box-sizing:border-box;
                    z-index:100;
                    position:relative;
                }

                .logoWrapper{
                    margin-right: auto;
                }

                .nasaDatePicker{
                    width:8rem;
                }

                .nasaDatePicker.invalidDate{
                    background:red;
                    color:#FFF;
                }

                .react-datepicker__input-container > input{
                    border:none;
                    border-radius:0.18rem;
                    padding:1rem;
                    font-weight: 600;
                    font-size: 1.24rem;
                    display: inline-block;
                    text-align: center;
                }

                @media(${gteMedium}){
                    .nasaDatePicker{
                        width: auto;
                    }
                }

            `}</style>
        </header>
    )
}

export default Header;