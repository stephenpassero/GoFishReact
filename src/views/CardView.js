import React from 'react'
import PropTypes from 'prop-types'

class CardView extends React.Component {
  static propTypes = {
    cardPath: PropTypes.string.isRequired
  }

  findPath() {
    return require(`../img/cards/${this.props.cardPath}.png`)
  }

  render() {
    return (
      <img alt='cardBack' className='card' src={this.findPath()}/>
    )
  }
}

export default CardView
