import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './components/Canvas'

const App = () => {
  return(
    <div className="App">
      <Canvas />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)