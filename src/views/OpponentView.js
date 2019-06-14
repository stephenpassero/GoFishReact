import React from 'react'
import CardBack from '../img/cards/backs_red.png'

class OpponentView extends React.Component {
  constructor(props) {
    super(props)
  }

  generateCards(cards) {
    return cards.map((card, index) => {
      return (<img alt='cardBack' key={index} className='cardBack' src={CardBack}/>)
    })
  }

  generatePairs(pairs) {
    // Do something here
    return ''
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.generateCards(this.props.cards)}
        {this.generatePairs(this.props.pairs)}
      </div>
    )
  }
}

export default OpponentView
