import React from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'
import Card from '../models/Card'

class PlayerView extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    pairs: PropTypes.array,
    updateSelectedRank: PropTypes.func.isRequired,
    selectedRank: PropTypes.string.isRequired
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<CardView
                key={index}
                selectedRank={this.props.selectedRank}
                updateSelectedRank={this.props.updateSelectedRank}
                card={card}
              />)
    })
  }

  generatePairs(pairs) {
    if (pairs.length !== 0) {
      return pairs.map((rank, index) => {
        return <CardView key={index} pair={true} updateSelectedRank={() => {}} card={new Card(rank, 'Spades')} />
      })
    }
    return ''
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.generateCards(this.props.cards)}
        <div className='pairs'>
          {this.generatePairs(this.props.pairs)}
        </div>
      </div>
    )
  }
}

export default PlayerView
