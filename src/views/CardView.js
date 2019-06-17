import React from 'react'
import PropTypes from 'prop-types'

class CardView extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    bot: PropTypes.bool
  }

  findPathBot() {
    return require(`../img/cards/${this.props.card.getBackPath()}.png`)
  }

  findPathPlayer() {
    return require(`../img/cards/${this.props.card.imagePath()}.png`)
  }

  renderPlayerCard() {
    if (this.props.selectedRank === this.props.card.rank()) {
      return ( <img alt='cardBack' onClick={this.props.updateSelectedRank.bind(this, this.props.card.rank())} className='card selected' src={this.findPathPlayer()} /> )
    }

    return ( <img alt='cardBack' onClick={this.props.updateSelectedRank.bind(this, this.props.card.rank())} className='card' src={this.findPathPlayer()} /> )
  }

  render() {
    if (this.props.bot) {
      return (<img alt='cardBack' className='card' src={this.findPathBot()}/>)
    }
    return (
      this.renderPlayerCard()
    )
  }
}

export default CardView
