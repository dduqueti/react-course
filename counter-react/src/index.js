import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChangeButton from './components/ChangeButton';
import ActionButton from './components/ActionButton';

function App(){
  const [count, setCount] = useState(0)
  const [memory, setMemory] = useState([])

  const changeCount = change => {
    setCount(count + change)
  }

  const saveToMemory = () => {
    setMemory(memory.concat(count))
  }

  const resetCount = () => {
    setCount(0)
  }

  const clearMemory = () => {
    setMemory([])
  }

  return(
    <div className="App">
      <div>
        <ChangeButton change={1} onClickFunction={changeCount} />
        <ChangeButton change={10} onClickFunction={changeCount} />
        <ChangeButton change={100} onClickFunction={changeCount} />
        <ChangeButton change={1000} onClickFunction={changeCount} />
      </div>
      <div>
        <ChangeButton change={-1} onClickFunction={changeCount} />
        <ChangeButton change={-10} onClickFunction={changeCount} />
        <ChangeButton change={-100} onClickFunction={changeCount} />
        <ChangeButton change={-1000} onClickFunction={changeCount} />
      </div>
      <div>
        <ActionButton onClickFunction={resetCount} label={'Reset'} />
        <ActionButton onClickFunction={saveToMemory} label={'Save to Memory'} />
        <ActionButton onClickFunction={clearMemory} label={'Clear Memory'} />
      </div>
      <div>COUNT: <span>{count}</span></div>
      <div>MEMORY: <span>{memory.toString()}</span></div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)