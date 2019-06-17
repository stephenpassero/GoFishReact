import React from 'react'
import PropTypes from 'prop-types'
import cardBack from '../img/cards/backs_red.png'

class CardView extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    bot: PropTypes.bool,
    selectedRank: PropTypes.string,
    updateSelectedRank: PropTypes.func
  }

  findPathPlayer() {
    return require(`../img/cards/${this.props.card.imagePath()}.png`)
  }

  getClasses() {
    if (this.props.selectedRank === this.props.card.rank()) {
      return 'card selected'
    }
    return 'card'
  }

  render() {
    if (this.props.bot) {
      return (<img alt='cardBack' className='card' src={cardBack}/>)
    }
    return (
      <img alt='cardBack' onClick={this.props.updateSelectedRank.bind(this, this.props.card.rank())} className={`${this.getClasses()}`} src={this.findPathPlayer()} />
    )
  }
}

export default CardView
