import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, MediaOfTheDay } from './components';

const App =() => {

  const [ media, setMedia ] = useState([]);
  const [date, setDate] = useState(new Date());

  const API_KEY = "McdzPzQpZs86Qx3IX07YJkJmuOe5GLujB5djINJd";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  
  const changeDate = date => {
    console.log("change date", date);
    console.log("formaed date", apiDateFormat(date));
    setDate(date);
  }

  const apiDateFormat = date => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }
  useEffect(() => {

    async function fetchAPOD(date){
      let FETCH_URL = API_URL;
      console.log("fetch url =>", FETCH_URL);
      console.log("date =>", date);
      if(date !== undefined){
        console.log("date is not undefined");
        FETCH_URL = `${API_URL}&date=${apiDateFormat(date)}`;
      }
      console.log("furl", FETCH_URL);
      const response = await fetch(FETCH_URL).then(res => res.json());
      setMedia(response);
      console.log("response =>");
      console.log("response title", response.title);
      console.log("media title", media.title);
    }

    fetchAPOD(date);
  }, [date]);

  return (
    <div className="App">
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
    `}</style>
    </div>

  );
}

export default App;
