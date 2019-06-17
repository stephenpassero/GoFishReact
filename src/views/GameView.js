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

  runRound() {
    const game = this.props.game
    game.runRound(game.playerName(), this.state.selectedOpponent, this.state.selectedRank)
    this.setState(() => {
      return {
        selectedOpponent: '',
        selectedRank: ''
      }
    })
  }

  renderRequestButton() {
    if (this.state.selectedRank !== '' && this.state.selectedOpponent !== '') {
      return (
        <div className='requestCards'>
          <button className='requestButton' onClick={this.runRound.bind(this)}>Request Cards</button>
        </div>
      )
    }
    return ''
  }

  render() {
    return (
      <div>
        <div className='flex-container'>
          {this.generateOpponents()}
        </div>
        {this.renderPlayer()}
        {this.renderRequestButton()}
      </div>
    )
  }
}

export default GameView
