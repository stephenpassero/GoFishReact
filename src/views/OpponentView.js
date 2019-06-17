import React from 'react'
import CardBack from '../img/cards/backs_red.png'
import PropTypes from 'prop-types'

class OpponentView extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    pairs: PropTypes.array
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<img alt='cardBack' key={index} className='cardBack' src={CardBack}/>)
    })
  }

  generatePairs(pairs) {
    // Do something here
    return ''
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.generateCards(this.props.cards)}
        {this.generatePairs(this.props.pairs)}
      </div>
    )
  }
}

export default OpponentView
