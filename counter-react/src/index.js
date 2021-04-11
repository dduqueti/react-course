import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChangeButton from './components/ChangeButton';
import ActionButton from './components/ActionButton';
import './index.css';

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
    <div>
      <div className="bg-white p-4 rounded lg">
        <div className="text-center mt-4">
          <p className="text-gray-600 font-bold">Add</p>
        </div>
        <div className="flex space-x-1 justify-center">
          <ChangeButton change={1} onClickFunction={changeCount} />
          <ChangeButton change={10} onClickFunction={changeCount} />
          <ChangeButton change={100} onClickFunction={changeCount} />
          <ChangeButton change={1000} onClickFunction={changeCount} />
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-bold">Substract</p>
        </div>
        <div className="flex flex-wrap space-x-1 justify-center">
          <ChangeButton change={-1} onClickFunction={changeCount} />
          <ChangeButton change={-10} onClickFunction={changeCount} />
          <ChangeButton change={-100} onClickFunction={changeCount} />
          <ChangeButton change={-1000} onClickFunction={changeCount} />
        </div>
      </div>
      <div className="bg-white shadow text-center mt-1">
        <div>
          <h1 className="text-xl text-gray-600 font-bold">
            Count: <span>{count}</span>
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl text-gray-600 font-bold">
            Memory: <span>{memory.toString()}</span>
          </h1>
        </div>
      </div>
      <div className="text-center mt-4">
      </div>
      <div className="flex flex-wrap space-x-1 justify-center">
        <div>
          <ActionButton onClickFunction={resetCount} label={'Reset'} />
        </div>
        <div>
          <ActionButton onClickFunction={saveToMemory} label={'Save to Memory'} />
        </div>
        <div>
          <ActionButton onClickFunction={clearMemory} label={'Clear Memory'} />
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)