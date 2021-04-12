import React from 'react'
import React from './Card.js'

const CardList = props => {
  <div>
    { props.cards.map(card => (<Card {...card} />)) }
  </div>
}

export default CardList