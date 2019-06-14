import React from 'react'
import LoginView from '../views/LoginView'
import { shallow } from 'enzyme'

describe('LoginView', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LoginView/>)
  })

  it('renders a form', () => {
    expect(wrapper.find('form')).not.toEqual(undefined)
  })
})
