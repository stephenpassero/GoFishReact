import React from 'react'
import CardView from './CardView'
import PropTypes from 'prop-types'

class EndGameView extends React.Component {
  static propTypes = {
    rankings: PropTypes.array.isRequired
  }

  generateHTMLRankings() {
    return (
      <div className='rankings'>
        <h2>Rankings: </h2>
        {this.props.rankings.map((ranking, index) => {
          return <h3 key='index' className="rankedItem">{index + 1}. {ranking.playerName}: {ranking.points}</h3>
        })}
      </div>
    )
  }

  renderWinner() {
    const rankings = this.props.rankings
    if (rankings[0].points !== rankings[1].points) {
      return <h1 className='winner'>{rankings[0].playerName} is the winner!</h1>
    }
    return ''
  }

  render() {
    return (
      <div className='endGame'>
        {this.renderWinner()}
        {this.generateHTMLRankings()}
      </div>
    )
  }
}

export default EndGameView
