import React from 'react'
import LoginView from '../../views/LoginView'
import { shallow } from 'enzyme'

describe('LoginView', () => {
  let wrapper, calledWith
  beforeEach(() => {
    const onLogin = (name) => {calledWith = name}
    wrapper = shallow(<LoginView onLogin={onLogin}/>)
  })

  it('renders a form', () => {
    expect(wrapper.find('form').length).not.toEqual(0)
  })

  it('calls the onLogin prop when submitted with name and number of players', () => {
    wrapper.find('#name').simulate('change', {target: {value: 'Me!'}})
    expect(wrapper.state().playerName).toEqual('Me!')
    wrapper.find('#submit').simulate('click', { preventDefault: () => {}})
    expect(calledWith).toEqual('Me!')
  })
})
