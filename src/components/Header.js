import React, {useEffect, useState} from 'react';
import { gteMedium } from '../medias';
import Logo from './Logo';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Header = ({date, changeDatePicker, error}) => {
    let datePickerClass = "nasaDatePicker";
    console.log("error", error);
    console.log("render header");
    if(error){
        datePickerClass += " invalidDate";
    }

    useEffect(() => {
        console.log("error", error);
    }, [error])
    //const [startDate, setStartDate] = useState(new Date());

    /*useEffect(() => {
        fetchFunction(startDate);
    }, [fetchFunction]);*/

    return(
        <header>
            <Logo></Logo>
            <DatePicker 
                selected={date} 
                dateFormat="yyyy-MM-dd" 
                onChange={date => changeDatePicker(date)} 
                className={datePickerClass}
            />

            <style jsx>{`
                header{
                    display:flex;
                    justify-content: space-between;
                    align-items: stretch;
                    background:var(--nasa-blue);
                    padding:2rem; 
                    width:100%;
                    box-sizing:border-box;
                    z-index:100;
                    position:relative;
                }

                .nasaDatePicker{
                    width:8rem;
                }

                .nasaDatePicker.invalidDate{
                    border:2px solid blue !important;
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