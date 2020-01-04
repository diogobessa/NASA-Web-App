import React, {useEffect, useState} from 'react';
import { gteMedium } from '../medias';
import DatePicker from 'react-datepicker';
import { Logo, Button } from '../components';

import "react-datepicker/dist/react-datepicker.css";
import { Date } from 'core-js';

const Header = ({date, changeDatePicker, randomDate, error}) => {
    const errorStatus = useState(false);
    let datePickerClass = "nasaDatePicker";
    let placeholderText = "";

    if(error){
        datePickerClass += " invalidDate";
        date = "";
        placeholderText = "select a valid date";
    }


    return(
        <header>
            <Logo className="logoWrapper"></Logo>
            <Button className="desktop-fl-button" handleClick={randomDate}></Button>
            <DatePicker 
                selected={date}
                placeholderText = {placeholderText}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
                minDate={new Date(1995, 5, 16)}
                excludeDates={[new Date(1995, 5, 17), new Date(1995, 5, 18), new Date(1995, 5, 19)]}
                onChange={date => changeDatePicker(date)} 
                className={datePickerClass}
                popperPlacement="bottom-end"
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

                header > *{
                    margin-left: 2rem;
                }

                .logoWrapper{
                    margin-left:0;
                    margin-right: auto;
                }

                .desktop-fl-button{
                    padding:1rem 1.4rem;
                    font-weight: 600;
                    font-size: 1.24rem;
                    border-radius:0.18rem;
                    text-align:center;
                    cursor:pointer;
                    border:none;
                    display:none;
                    background-color: red;
                    color:#FFF;
                    text-transform: uppercase;
                    font-weight: 900;
                    outline:none;
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

                    .desktop-fl-button{
                        display: block;
                    }
                }

            `}</style>
        </header>
    )
}

export default Header;