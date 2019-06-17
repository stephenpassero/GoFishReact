import React from 'react'
import CardView from '../../views/CardView'
import { shallow } from 'enzyme'

describe('CardView', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CardView cardPath={'c9'}/>)
  })
  it('renders an image', () => {
    expect(wrapper.find('img').length).toEqual(1)
  })
})
