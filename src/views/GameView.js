import React from 'react'
import OpponentView from './OpponentView'

class GameView extends React.Component {
  constructor(props) {
    super(props)
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
