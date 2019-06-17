import React from 'react'
import GameView from '../../views/GameView'
import Game from '../../models/Game'
import { shallow, mount } from 'enzyme'

describe('GameView', () => {
  let wrapper, game
  beforeEach(() => {
    game = new Game('HumanPlayer', 5)
    game.startGame()
    wrapper = shallow(<GameView game={game}/>)
  })

  it('renders the correct number of bots', () => {
    expect(wrapper.find('.opponent').length).toEqual(4)
  })

  it('renders the player', () => {
    expect(wrapper.find('PlayerView')).not.toEqual(undefined)
  })

  it('updates selectedRank state when a card is clicked', () => {
    const newWrapper = mount(<GameView game={game}/>)
    const playerCard = newWrapper.find('.card').first()
    playerCard.simulate('click')
    const gameView = newWrapper.find('GameView')
    expect(gameView.state().selectedRank).not.toEqual('')
    newWrapper.unmount()
  })

  it('updates selectedOpponent state when an opponent is clicked', () => {
    const newWrapper = mount(<GameView game={game}/>)
    const opponent = newWrapper.find('.opponent').first()
    opponent.simulate('click')
    const gameView = newWrapper.find('GameView')
    expect(gameView.state().selectedOpponent).not.toEqual('')
    newWrapper.unmount()
  })
})
