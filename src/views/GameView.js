import React from 'react'
import OpponentView from './OpponentView'
import PropTypes from 'prop-types'
import PlayerView from './PlayerView'

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

  renderPlayer() {
    const game = this.props.game
    const player = game.findPlayer(game.playerName())
    return <PlayerView name={game.playerName()} cards={player.cards()} pairs={player.pairs()} />
  }

  render() {
    return (
      <div>
        {this.generateOpponents()}
        {this.renderPlayer()}
      </div>
    )
  }

}

export default GameView
