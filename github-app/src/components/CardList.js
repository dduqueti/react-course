import React from 'react'
import Card from './Card.js'

const CardList = props => (
  <div>
    { props.cards.map((card, index) => (<Card key={index} {...card} />)) }
  </div>
)

export default CardList