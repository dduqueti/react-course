import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'

const App = () => {
  return(
    <div className="App">
      <ColorPicker />
      <Canvas />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)