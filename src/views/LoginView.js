import React from 'react'
import PropTypes from 'prop-types'

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: '',
      numOfPlayers: 0
    }
  }

  static propTypes = {
    onLogin: PropTypes.func.isRequired
  }

  submit(event) {
    event.preventDefault()
    this.props.onLogin(this.state.playerName, this.state.numOfPlayers)
  }

  setPlayerName(text) {
    this.setState(() => {
      return {playerName: text}
    })
  }

  setNumOfPlayers(num) {
    this.setState(() => {
      return {numOfPlayers: num}
    })
  }

  render() {
    return (
      <form>
        <label>Player Name</label>
        <input type="text" id='name' onChange={e => this.setPlayerName(e.target.value)} className="textInput" required/>
        <label>Number of Players</label>
        <input type="number" className="textInput"
        onChange={e => this.setNumOfPlayers(e.target.value)}
        min="2" max="6" required/>
        <button id='submit' onClick={e => this.submit(e)}>Submit</button>
      </form>
    )
  }
}
export default LoginView
