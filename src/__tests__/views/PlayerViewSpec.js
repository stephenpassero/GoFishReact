import React from 'react'
import PlayerView from '../../views/PlayerView'
import Card from '../../models/Card'
import { mount } from 'enzyme'

describe('PlayerView', () => {
  let wrapper
  beforeEach(() => {
    const card = new Card('10', 'Diamonds')
    const card2 = new Card('2', 'Spades')
    wrapper = mount(<PlayerView
                        name={'Me!'}
                        cards={[card, card2]}
                        pairs={['10', 'J']}
                        selectedRank=''
                        updateSelectedRank={() => {}}
                      />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the player\'s name', () => {
    const name = wrapper.find('h3')
    expect(name.text()).toEqual('Me!')
  })

  it('renders the player\'s hand', () => {
    // I pass two cards in when I create the playerView
    const cards = wrapper.find('.card')
    expect(cards.length).toEqual(2)
  })

  it('shows the number of pairs the player has', () => {
    const pairs = wrapper.find('.pair')
    expect(pairs.length).toEqual(2)
  })
})
