import React from 'react'
import CardView from '../../views/CardView'
import { shallow } from 'enzyme'
import Card from '../../models/Card'

describe('CardView', () => {
  let wrapper
  beforeEach(() => {
    const card = new Card('A', 'Hearts')
    wrapper = shallow(<CardView card={card} updateSelectedRank={() => {}}/>)
  })
  it('renders an image', () => {
    expect(wrapper.find('img').length).toEqual(1)
  })
})
