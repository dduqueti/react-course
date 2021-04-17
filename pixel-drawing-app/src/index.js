import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return(
    <div>
      Hello Pixel Art App
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)