import React from 'react'
import PropTypes from 'prop-types'

class SkipTurnButton extends React.Component {
  static propTypes = {
    runNextRound: PropTypes.func.isRequired,
    humanPlayer: PropTypes.object.isRequired
  }
  render() {
    if (this.props.humanPlayer.cardsLeft() === 0) {
      return (
        <div className='runNextRound'>
          <button onClick={this.props.runNextRound.bind(this)}>Run Next Round</button>
        </div>
      )
    }
    return ''
  }
}

export default SkipTurnButton
