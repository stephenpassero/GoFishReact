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

  render() {
    if (this.state.currentView === 'login') {
      return (
        <LoginView onLogin={this.startGame.bind(this)}/>
      )
    } else if (this.state.currentView === 'game') {
      return (
        <GameView game={this.state.game}/>
      )
    }
  }
}

export default App
