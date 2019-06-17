import React from 'react'
import Game from './models/Game'
import LoginView from './views/LoginView'
import GameView from './views/GameView'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: 'login',
      game: ''
    }
  }

  startGame(playerName, numOfPlayers) {
    const game = new Game(playerName, numOfPlayers)
    game.startGame()
    this.setState(() => {
      return {
        currentView: 'game',
        game
      }
    })
  }

  endGame() {
    alert('the game has ended')
    this.setState(() => {
      return { currentView: 'endGame' }
    })
  }

  render() {
    if (this.state.currentView === 'login') {
      return <LoginView onLogin={this.startGame.bind(this)}/>
    } else if (this.state.currentView === 'game') {
      return <GameView endGame={this.endGame.bind(this)} game={this.state.game}/>
    } else if (this.state.currentView === 'endGame') {
      return 'end game'//<EndGameView game={this.state.game} />
    }
  }
}

export default App
