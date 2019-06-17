import React from 'react'
import GameView from '../../views/GameView'
import Game from '../../models/Game'
import { shallow } from 'enzyme'

describe('GameView', () => {
  let wrapper
  beforeEach(() => {
    const game = new Game('HumanPlayer', 5)
    game.startGame()
    wrapper = shallow(<GameView game={game}/>)
  })

  it('renders the correct number of bots', () => {
    expect(wrapper.find('.opponent').length).toEqual(4)
  })
})
