import React from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'

class OpponentView extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    pairs: PropTypes.array,
    updateSelectedOpponent: PropTypes.func.isRequired
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<CardView key={index} card={card} bot={true} />)
    })
  }

  generatePairs(pairs) {
    // Do something here
    return ''
  }

  render() {
    return (
      <div className='opponent' onClick={this.props.updateSelectedOpponent.bind(this, this.props.name)}>
        <h3>{this.props.name}</h3>
        {this.generateCards(this.props.cards)}
        {this.generatePairs(this.props.pairs)}
      </div>
    )
  }
}

export default OpponentView
