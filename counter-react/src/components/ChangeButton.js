import React from 'react';

const ChangeButton = ({change, onClickFunction }) => {
const handleClick = () => {
  onClickFunction(change)
}

  return <button onClick={handleClick}>{change}</button>
}

export default ChangeButton