import React from 'react'
import OpponentView from './OpponentView'
import PropTypes from 'prop-types'
import PlayerView from './PlayerView'

class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRank: '',
      selectedOpponent: ''
    }
  }
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  updateSelectedRank(rank) {
    this.setState(() => {
      return { selectedRank: rank }
    })
  }

  updateSelectedOpponent(opponentName) {
    this.setState(() => {
      return { selectedOpponent: opponentName }
    })
  }

  generateOpponents() {
    return Object.values(this.props.game.botNames()).map((botName) => {
      const bot = this.props.game.findPlayer(botName)
      return <OpponentView
        className='opponent'
        key={botName}
        name={botName}
        cards={bot.cards()}
        pairs={bot.pairs()}
        selectedOpponent={this.state.selectedOpponent}
        updateSelectedOpponent={this.updateSelectedOpponent.bind(this)}
      />
    })
  }

  renderPlayer() {
    const game = this.props.game
    const player = game.findPlayer(game.playerName())
    return (
      <div className='player'>
        <PlayerView
          name={game.playerName()}
          cards={player.cards()}
          pairs={player.pairs()}
          selectedRank={this.state.selectedRank}
          updateSelectedRank={this.updateSelectedRank.bind(this)}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='flex-container'>
          {this.generateOpponents()}
        </div>
        {this.renderPlayer()}
      </div>
    )
  }
}

export default GameView
