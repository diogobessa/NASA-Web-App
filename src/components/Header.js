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

                .logoWrapper{
                    margin-right: auto;
                }

                .desktop-fl-button{
                    display:none;
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