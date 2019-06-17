import React from 'react'
import GameView from '../../views/GameView'
import Game from '../../models/Game'
import Card from '../../models/Card'
import { shallow, mount } from 'enzyme'

describe('GameView', () => {
  let wrapper, game
  beforeEach(() => {
    game = new Game('HumanPlayer', 2)
    game.startGame()
    wrapper = shallow(<GameView game={game}/>)
  })

  it('renders the correct number of bots', () => {
    expect(wrapper.find('.opponent').length).toEqual(1)
  })

  it('renders the player', () => {
    expect(wrapper.find('PlayerView')).not.toEqual(undefined)
  })

  it('updates selectedRank state when a card is clicked', () => {
    const mountedWrapper = mount(<GameView game={game}/>)
    const playerCard = mountedWrapper.find('.card').first()
    playerCard.simulate('click')
    expect(playerCard.html()).toContain('selected')
    mountedWrapper.unmount()
  })

  it('updates selectedOpponent state when an opponent is clicked', () => {
    const mountedWrapper = mount(<GameView game={game}/>)
    const opponent = mountedWrapper.find('.opponent').first()
    opponent.simulate('click')
    expect(opponent.html()).toContain('selected')
    mountedWrapper.unmount()
  })

  it('can request cards', () => {
    const player = game.findPlayer('HumanPlayer')
    const bot = game.findPlayer('Player2')
    const card = new Card('J', 'Diamonds')
    const card2 = new Card('5', 'Spades')
    const card3 = new Card('J', 'Hearts')
    player.setHand(card)
    bot.setHand(card2, card3)
    const mountedWrapper = mount(<GameView game={game}/>)
    const playerCard = mountedWrapper.find('.card').first()
    const opponent = mountedWrapper.find('.opponent').first()
    playerCard.simulate('click')
    opponent.simulate('click')
    const requestButton = mountedWrapper.find('.requestButton')
    requestButton.simulate('click')
    expect(mountedWrapper.find('.card').length).toEqual(2)
  })
})
