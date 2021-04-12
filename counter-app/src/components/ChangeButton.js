import React from 'react';

const ChangeButton = ({change, onClickFunction }) => {
const handleClick = () => {
  onClickFunction(change)
}

  return(
    <button
      className="flex items-center text-white space-x-1.5 px-4 py-1.5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-600"
      onClick={handleClick}>{change}
    </button>
  )
}

export default ChangeButton