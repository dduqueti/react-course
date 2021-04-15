import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import CardList from './components/CardList'
import './index.css';

const App = () => {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  const handleRemove = id => {
    const newCards = cards.filter((card) => card.id !== id)
    setCards(newCards)
  }

  return(
    <div className="p-4">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} onRemove={handleRemove} />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)