import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, MediaOfTheDay } from './components';

const App =() => {

  const [ media, setMedia ] = useState({title: "", url: "", explanation: ""});
  const [date, setDate] = useState(new Date('December 24, 2019 03:24:00'));

  const API_KEY = "McdzPzQpZs86Qx3IX07YJkJmuOe5GLujB5djINJd";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  
  const changeDate = date => {
    setDate(date);
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
            return res.json()
          }

          throw new Error("APOD not available. Choose another day.");
        })
        .catch( error => {                       
          console.log('Request failed', error);
          date.setDate(date.getDate()-1);
        });
      if(response){
        const errorElement = document.getElementById("errorElement");
        if(errorElement){ 
          errorElement.parentNode.removeChild(errorElement);
        }
        setMedia(response);


      }else{
        const errorElement = document.createElement("H1");
        const container = document.getElementById("app");
        errorElement.id = 'errorElement';
        container.append(errorElement);
        errorElement.innerText = "Error! Select another date";

        
      }
      console.log(response);
    }

    fetchAPOD(date);
  }, [date]);

  return (
    <div className="App" id="app">
      <Header date={date} changeDatePicker={changeDate}></Header>
      <MediaOfTheDay apod={media}></MediaOfTheDay>
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
      `}</style>
    </div>

  );
}

export default App;
