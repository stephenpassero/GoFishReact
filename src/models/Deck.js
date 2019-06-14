import Card from './Card'

class Deck {
  constructor() {
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    this._cards = []
    for (const suit of suits) {
      for (const rank of ranks) {
        this._cards.push(new Card(rank, suit)) // eslint-disable-line no-undef
      }
    }
  }

  cards() {
    return this._cards
  }

  cardsLeft() {
    return this._cards.length
  }

  deal(numOfCards) {
    return this._cards.splice(0, numOfCards)
  }

  shuffle() {
    const cards = this._cards
    let { length } = cards
    while (length) {
      const i = Math.floor(Math.random() * length--);
      [cards[length], cards[i]] = [cards[i], cards[length]]
    }
    this._cards = cards
  }
}

export default Deck
