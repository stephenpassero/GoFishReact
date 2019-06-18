import React from 'react'
import OpponentView from './OpponentView'
import PropTypes from 'prop-types'
import PlayerView from './PlayerView'
import GameLog from './GameLog'
import SkipTurnButton from './SkipTurnButton'
import Deck from './Deck'

class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRank: '',
      selectedOpponent: '',
      humanPlayer: this.props.game.findPlayer(this.props.game.playerName())
    }
  }

  static propTypes = {
    game: PropTypes.object.isRequired,
    endGame: PropTypes.func.isRequired
  }

  updateSelectedRank(rank) {
    this.setState({ selectedRank: rank })
  }

  updateSelectedOpponent(opponentName) {
    this.setState({ selectedOpponent: opponentName })
  }

  generateOpponents() {
    return this.props.game.botNames().map((botName) => {
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
    return (
      <div className='player'>
        <PlayerView
          name={this.props.game.playerName()}
          cards={this.state.humanPlayer.cards()}
          pairs={this.state.humanPlayer.pairs()}
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

  runBotRounds() {
    this.props.game.skipRounds()
    this.gameOver()
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

  gameOver() {
    for (const player of Object.values(this.props.game.players())) {
      if (player.cardsLeft() > 0) {
        return false
      }
    }
    this.props.endGame()
  }

  render() {
    return (
      <div>
        <div className='flex-container'>
          {this.generateOpponents()}
        </div>
        <Deck deck={this.props.game.deck()} />
        {this.renderPlayer()}
        {this.renderRequestButton()}
        <GameLog log={this.props.game.log()} />
        <SkipTurnButton
          humanPlayer={this.state.humanPlayer}
          runNextRound={this.runBotRounds.bind(this)}
        />
      </div>
    )
  }
}

export default GameView
