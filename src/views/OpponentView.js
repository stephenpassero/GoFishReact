import React from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'
import Card from '../models/Card'

class OpponentView extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    pairs: PropTypes.array
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<CardView key={index} cardPath={Card.getBackPath()} />)
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
