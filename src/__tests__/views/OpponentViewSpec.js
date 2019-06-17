import React from 'react'
import OpponentView from '../../views/OpponentView'
import { mount } from 'enzyme'
import Card from '../../models/Card'

describe('OpponentView', () => {
  let wrapper, card
  beforeEach(() => {
    card = new Card('4', 'Spades')
    // The numbers are just placeholders for real card objects
    wrapper = mount(<OpponentView
                        updateSelectedOpponent={() => {}}
                        selectedOpponent={'Player2'}
                        name={"Player3"}
                        cards={[card]}
                        pairs={['K', '3']}
                      />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('shows the bot\'s name', () => {
    const name = wrapper.find('h3')
    expect(name.text()).toEqual("Player3")
  })

  it('shows the number of cards the bot has', () => {
    // I give the OpponentView 1 card when I create it
    const cards = wrapper.find('.cardBack')
    expect(cards.length).toEqual(1)
  })

  it('shows the number of pairs the bot has', () => {
    const pairs = wrapper.find('.pair')
    expect(pairs.length).toEqual(2)
  })
})
