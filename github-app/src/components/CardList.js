import React from 'react'
import Card from './Card.js'

const CardList = ({ cards, onRemove}) => (
  <div>
    { cards.map((card, index) => (<Card key={index} onRemove={onRemove} {...card} />)) }
  </div>
)

export default CardList