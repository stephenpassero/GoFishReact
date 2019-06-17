import React from 'react'
import OpponentView from './OpponentView'
import PropTypes from 'prop-types'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  generateOpponents() {
    return Object.values(this.props.game.botNames()).map((botName, index) => {
      const bot = this.props.game.findPlayer(botName)
      return <OpponentView className='opponent' key={index} name={botName} cards={bot.cards()} pairs={bot.pairs()}/>
    })
  }

  render() {
    return (
      <div>
        {this.generateOpponents()}
      </div>
    )
  }

}

export default GameView
