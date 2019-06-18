import React from 'react'
import CardView from './CardView'
import PropTypes from 'prop-types'

class Deck extends React.Component {
  static propTypes = {
    deck: PropTypes.object.isRequired
  }

  render() {
    if (this.props.deck.cardsLeft() > 0) {
      return (
        <div className='deck'>
          <CardView bot={true} card={{}} updateSelectedRank={() => {}} />
        </div>
      )
    }
    return ''
  }
}

export default Deck
