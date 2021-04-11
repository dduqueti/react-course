import React from 'react';

const ActionButton = ({ label, onClickFunction}) => {
  const handleClick = () => {
    onClickFunction()
  }

  return <button onClick={handleClick}>{label}</button>
}

export default ActionButton