import React from 'react'
import EndGameView from '../../views/EndGameView'
import { shallow } from 'enzyme'

describe('EndGameView', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<EndGameView rankings={[{playerName: 'player2', points: 7}, {playerName: 'player3', points: 4}, {playerName: 'player1', points: 2}]}/>)
  })

  it('shows rankings', () => {
    const rankings = wrapper.find('.rankings')
    expect(rankings.length).not.toEqual(0)
    expect(rankings.text()).toContain('1.')
  })

  it('shows a who won if there is a clear winner', () => {
    expect(wrapper.text()).toContain('player2 is the winner!')
  })
})
