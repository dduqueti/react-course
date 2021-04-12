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

  let incrementValues = [1, 10, 100, 1000];

  let addButtonList = incrementValues
    .map((value, index) => (
      <ChangeButton key={index} change={value} onClickFunction={changeCount} />
    ));

  let substractButtonList = incrementValues
    .map((value, index) => (
      <ChangeButton key={index} change={-value} onClickFunction={changeCount} />
    ));

  return(
    <div>
      <div className="bg-white p-4 rounded lg">
        <div className="text-center mt-4">
          <p className="text-gray-600 font-bold">Add</p>
        </div>
        <div className="flex flex-wrap space-x-1 justify-center">
          {addButtonList}
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600 font-bold">Substract</p>
        </div>
        <div className="flex flex-wrap space-x-1 justify-center">
          {substractButtonList}
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
            {memory.length > 0 ? `Memory: ${memory.toString()}` : 'No saved calculations'}
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