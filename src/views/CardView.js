import React from 'react'
import PropTypes from 'prop-types'
import cardBack from '../img/cards/backs_red.png'
import Deck from '../models/Deck'

let cardPaths = {}
for (const card of new Deck().cards()) {
  cardPaths[card.imagePath()] = require(`../img/cards/${card.imagePath()}.png`)
}

class CardView extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    bot: PropTypes.bool,
    selectedRank: PropTypes.string,
    updateSelectedRank: PropTypes.func.isRequired,
    pair: PropTypes.bool
  }

  findPathPlayer() {
    return cardPaths[`${this.props.card.imagePath()}`]
  }

  getClasses() {
    if (this.props.selectedRank === this.props.card.rank()) {
      return 'card selected'
    } else if (this.props.pair) {
      return 'pair'
    }
    return 'card'
  }

  render() {
    if (this.props.bot) {
      return (<img alt='cardBack' className='cardBack' src={cardBack}/>)
    }
    return (
      <img alt='cardBack' onClick={this.props.updateSelectedRank.bind(this, this.props.card.rank())} className={`${this.getClasses()}`} src={this.findPathPlayer()} />
    )
  }
}

export default CardView
