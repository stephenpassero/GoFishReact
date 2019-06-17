import Card from '../../models/Card'

describe('Card', () => {
  it('has a rank and a suit', () => {
    const card = new Card('J', 'Spades')
    expect(card.rank()).toEqual('J')
  })

  it('has a suit', () => {
    const card = new Card('J', 'Spades')
    expect(card.suit()).toEqual('Spades')
  })
})
