exports.deck = {
  cards: [{
      type: "Ace",
      suit: "Spade",
      value: 11
    },
    {
      type: "Two",
      suit: "Spade",
      value: 2
    },
    {
      type: "Three",
      suit: "Spade",
      value: 3
    },
    {
      type: "Four",
      suit: "Spade",
      value: 4
    },
    {
      type: "Five",
      suit: "Spade",
      value: 5
    },
    {
      type: "Six",
      suit: "Spade",
      value: 6
    },
    {
      type: "Seven",
      suit: "Spade",
      value: 7
    },
    {
      type: "Eight",
      suit: "Spade",
      value: 8
    },
    {
      type: "Nine",
      suit: "Spade",
      value: 9
    },
    {
      type: "Ten",
      suit: "Spade",
      value: 10
    },
    {
      type: "Jack",
      suit: "Spade",
      value: 10
    },
    {
      type: "Queen",
      suit: "Spade",
      value: 10
    },
    {
      type: "King",
      suit: "Spade",
      value: 10
    },
    {
      type: "Ace",
      suit: "Heart",
      value: 11
    },
    {
      type: "Two",
      suit: "Heart",
      value: 2
    },
    {
      type: "Three",
      suit: "Heart",
      value: 3
    },
    {
      type: "Four",
      suit: "Heart",
      value: 4
    },
    {
      type: "Five",
      suit: "Heart",
      value: 5
    },
    {
      type: "Six",
      suit: "Heart",
      value: 6
    },
    {
      type: "Seven",
      suit: "Heart",
      value: 7
    },
    {
      type: "Eight",
      suit: "Heart",
      value: 8
    },
    {
      type: "Nine",
      suit: "Heart",
      value: 9
    },
    {
      type: "Ten",
      suit: "Heart",
      value: 10
    },
    {
      type: "Jack",
      suit: "Heart",
      value: 10
    },
    {
      type: "Queen",
      suit: "Heart",
      value: 10
    },
    {
      type: "King",
      suit: "Heart",
      value: 10
    },
    {
      type: "Ace",
      suit: "Clubs",
      value: 11
    },
    {
      type: "Two",
      suit: "Clubs",
      value: 2
    },
    {
      type: "Three",
      suit: "Clubs",
      value: 3
    },
    {
      type: "Four",
      suit: "Clubs",
      value: 4
    },
    {
      type: "Five",
      suit: "Clubs",
      value: 5
    },
    {
      type: "Six",
      suit: "Clubs",
      value: 6
    },
    {
      type: "Seven",
      suit: "Clubs",
      value: 7
    },
    {
      type: "Eight",
      suit: "Clubs",
      value: 8
    },
    {
      type: "Nine",
      suit: "Clubs",
      value: 9
    },
    {
      type: "Ten",
      suit: "Clubs",
      value: 10
    },
    {
      type: "Jack",
      suit: "Clubs",
      value: 10
    },
    {
      type: "Queen",
      suit: "Clubs",
      value: 10
    },
    {
      type: "King",
      suit: "Clubs",
      value: 10
    },
    {
      type: "Ace",
      suit: "Diamond",
      value: 11
    },
    {
      type: "Two",
      suit: "Diamond",
      value: 2
    },
    {
      type: "Three",
      suit: "Diamond",
      value: 3
    },
    {
      type: "Four",
      suit: "Diamond",
      value: 4
    },
    {
      type: "Five",
      suit: "Diamond",
      value: 5
    },
    {
      type: "Six",
      suit: "Diamond",
      value: 6
    },
    {
      type: "Seven",
      suit: "Diamond",
      value: 7
    },
    {
      type: "Eight",
      suit: "Diamond",
      value: 8
    },
    {
      type: "Nine",
      suit: "Diamond",
      value: 9
    },
    {
      type: "Ten",
      suit: "Diamond",
      value: 10
    },
    {
      type: "Jack",
      suit: "Diamond",
      value: 10
    },
    {
      type: "Queen",
      suit: "Diamond",
      value: 10
    },
    {
      type: "King",
      suit: "Diamond",
      value: 10
    }
  ],
  shuffle(){
    afterShuffle = [];
    while(afterShuffle.length !== 52){
      // console.log(this.cards.length);
      randomNum = Math.floor(Math.random() * this.cards.length);
      afterShuffle.push(this.cards[randomNum])
      this.cards.splice(randomNum, 1);
    }
    this.cards = afterShuffle;
    // console.log(`Number of Cards: ${this.cards.length}`);
  },
  deal(){
    draw = this.cards.pop();
    // console.log(draw);
    // console.log(this.cards.length);
    return draw;
  }
}

// deck.shuffle();
// deck.deal();
// deck.deal();