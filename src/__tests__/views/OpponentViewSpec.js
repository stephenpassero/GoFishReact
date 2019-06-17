import React from 'react'
import OpponentView from '../../views/OpponentView'
import { shallow } from 'enzyme'

describe('OpponentView', () => {
  let wrapper
  beforeEach(() => {
    // The numbers are just placeholders for real card objects
    wrapper = shallow(<OpponentView name={"Player3"} cards={[1, 2, 3, 4, 5, 6]}/>)
  })

  it('shows the bot\'s name', () => {
    const name = wrapper.find('h3')
    expect(name.text()).toEqual("Player3")
  })

  it('shows the number of cards the bot has', () => {
    // I give the OpponentView 6 card when I create it
    const cards = wrapper.find('.cardBack')
    expect(cards.length).toEqual(6)
  })
})
