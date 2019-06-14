import React from 'react'
import Game from './models/Game'
import LoginView from './LoginView'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: 'login'
    }
  }
  startGame(playerName, numOfPlayers) {
    const game = new Game(playerName, numOfPlayers)
    game.startGame()
    this.setState(() => {
      return {currentView: 'game'}
    })
    alert("The game is started")
  }

  render() {
    if (this.state.currentView === 'login') {
      return (
        <LoginView onLogin={this.startGame.bind(this)}/>
      )
    } else if (this.state.currentView === 'game') {

    }
  }
}

export default App
