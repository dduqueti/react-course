import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
  return(
    <div>
      Hello World
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)