import React from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'

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

export default PlayerView
