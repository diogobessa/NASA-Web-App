import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, MediaOfTheDay, Button } from './components';
import { gteMedium } from './medias';

const App =() => {

  const [ media, setMedia ] = useState({title: "", url: "", explanation: ""});
  const [date, setDate] = useState(new Date('December 24, 2019 03:24:00'));
  const [dateIsInvalid, setDateIsInvalid] = useState(false);

  const API_KEY = "McdzPzQpZs86Qx3IX07YJkJmuOe5GLujB5djINJd";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  
  /*const createErrorMessage = () => {

    const container = document.getElementById("app");

    if(!document.getElementById("errorElement")){
      const errorElement = document.createElement("H1");
            errorElement.id = "errorElement";
            errorElement.innerText = "Error: select another day!";
            container.append(errorElement);
    }
  }

  const removeErrorMessage = () => {
    const errorElement = document.getElementById("errorElement");
    if(errorElement){ 
      errorElement.parentNode.removeChild(errorElement);
    }
  }*/

  const changeDate = date => {
    setDate(date);
  }

  const randomDate = () => {
    const excludeDates = [new Date(1995, 5, 17), new Date(1995, 5, 18), new Date(1995, 5, 19)];
    const min = new Date(1995, 5, 16);
    const max = new Date();
    let newDate;

    while(newDate === undefined || excludeDates.includes(newDate)){
        newDate = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
    }

    changeDate(newDate);
  }

  const apiDateFormat = date => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }
  useEffect(() => {

    async function fetchAPOD(date){
      let FETCH_URL = API_URL;

      if(date !== undefined){
        FETCH_URL = `${API_URL}&date=${apiDateFormat(date)}`;
      }

      const response = await fetch(FETCH_URL)
      .then(res => {
          if(res.ok){
            setDateIsInvalid(false);
            return res.json()
          }

          throw new Error("APOD not available. Choose another day.");
        })
        .catch( error => {                       
          setDateIsInvalid(true);
        });
      if(response){
        console.log(response); 
        setMedia(response);
      }
    }

    fetchAPOD(date);
  }, [date, dateIsInvalid]);

  return (
    <div className="App" id="app">
      <Header date={date} changeDatePicker={changeDate} randomDate={randomDate} error={dateIsInvalid}></Header>
      <MediaOfTheDay apod={media}></MediaOfTheDay>
      <Button className="mobile-fl-button" handleClick={randomDate}></Button>
      <style jsx global>{`
          html {
            font-size: 62.5%; /* Set root font-size to 10px so we can more easily use 'rem's everywhere */
          }
          body {
            min-width: 32rem;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          :root{
            --text-align: left;
            --nasa-blue: #105bd8;
            --white: #FFF;
          }

          #errorElement{
            background:red;
            position: relative;
          }

          .mobile-fl-button{
            width:100%;
            display:block;
          }

          @media(${gteMedium}){
            .mobile-fl-button{
                display: none;
            }
          }
      `}</style>
    </div>

  );
}

export default App;
