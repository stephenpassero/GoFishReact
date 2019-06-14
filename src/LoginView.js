import React from 'react'

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      numOfPlayers: 0
    }
  }

  submit(event) {
    event.preventDefault()
    this.props.onLogin(this.state.playerName, this.state.numOfPlayers)
  }

  setPlayerName(text) {
    console.log(`Player name ${text}`)
    this.setState(() => {
      return {playerName: text}
    })
  }

  setNumOfPlayers(num) {
    console.log(`Num of players ${num}`)
    this.setState(() => {
      return {numOfPlayers: num}
    })
  }

  render() {
    return (
      <form>
        <label>Player Name</label>
        <input type="text" onChange={e => this.setPlayerName(e.target.value)} className="textInput" required/>
        <label>Number of Players</label>
        <input type="number" className="textInput"
        onChange={e => this.setNumOfPlayers(e.target.value)}
        min="2" max="6" required/>
        <input type="submit" onClick={(e) => this.submit(e)} value="Submit"/>
      </form>
    )
  }
}
export default LoginView
