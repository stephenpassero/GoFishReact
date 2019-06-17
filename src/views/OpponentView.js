import React from 'react'
import PropTypes from 'prop-types'
import CardView from './CardView'
import Card from '../models/Card'

class OpponentView extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    pairs: PropTypes.array,
    updateSelectedOpponent: PropTypes.func.isRequired,
    selectedOpponent: PropTypes.string.isRequired
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<CardView updateSelectedRank={() => {}} key={index} card={card} bot={true} />)
    })
  }

  getClasses() {
    if (this.props.selectedOpponent === this.props.name) {
      return 'opponent selected'
    }
    return 'opponent'
  }

  generatePairs(pairs) {
    if (pairs.length !== 0) {
      return pairs.map((rank, index) => {
        return <CardView pair={true} key={index} updateSelectedRank={() => {}} card={new Card(rank, 'Spades')} />
      })
    }
    return ''
  }

  render() {
    return (
      <div className={`${this.getClasses()}`} onClick={this.props.updateSelectedOpponent.bind(this, this.props.name)}>
        <h3>{this.props.name}</h3>
        {this.generateCards(this.props.cards)}
        <div className="pairs">
          {this.generatePairs(this.props.pairs)}
        </div>
      </div>
    )
  }
}

export default OpponentView
