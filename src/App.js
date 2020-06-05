import React from 'react';
import './App.css';
import Larg from "./components/Larg"
import Medium from './components/Medium';
import Small from './components/Small';
import { carachters } from './generate.js'

function App() {

  return (
    <div className="App" onClick={() => window.location.reload(false)}>
      <Larg carachters={carachters}></Larg>
      <Medium carachters={carachters}></Medium>
      <Small carachters={carachters}></Small>
    </div>
  );
}

export default App;
