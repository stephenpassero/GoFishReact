import React from 'react'
import OpponentView from '../../views/OpponentView'
import { shallow } from 'enzyme'
import Card from '../../models/Card'

describe('OpponentView', () => {
  let wrapper
  beforeEach(() => {
    const card = new Card('4', 'Spades')
    // The numbers are just placeholders for real card objects
    wrapper = shallow(<OpponentView
                        updateSelectedOpponent={() => {}}
                        selectedOpponent={'Player2'}
                        name={"Player3"}
                        cards={[card]}
                      />)
  })

  it('shows the bot\'s name', () => {
    const name = wrapper.find('h3')
    expect(name.text()).toEqual("Player3")
  })

  it('shows the number of cards the bot has', () => {
    // I give the OpponentView 1 card when I create it
    const cards = wrapper.find('CardView')
    expect(cards.length).toEqual(1)
  })
})
