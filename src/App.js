import React from 'react';
import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header></Header>

    <style jsx>{`
    html {
      font-size: 62.5%; /* Set root font-size to 10px so we can more easily use 'rem's everywhere */
    }
    body {
      min-width: 32rem;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `}</style>
    </div>

  );
}

export default App;
