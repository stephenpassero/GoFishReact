import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })
  it('renders a component', () => {
    expect(wrapper.debug()).toContain('<LoginView')
  })
})
