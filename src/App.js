import React, { useEffect, useState } from 'react';
import './App.css';
import { Header, MediaOfTheDay } from './components';

const App =() => {

  const [ media, setMedia ] = useState([]);
  const API_KEY = "McdzPzQpZs86Qx3IX07YJkJmuOe5GLujB5djINJd";
  const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  
  useEffect(() => {

    async function fetchAPOD(){
      const response = await fetch(API_URL).then(res => res.json());
      console.log(response);
      setMedia(response);
    }

    fetchAPOD();
  }, []);

  return (
    <div className="App">
      <Header></Header>
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
