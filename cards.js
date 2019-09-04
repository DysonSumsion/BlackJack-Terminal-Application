const deck = {
  cards: [{
      type: "Ace",
      symbol: "Spade",
      value: 11
    },
    {
      type: "Two",
      symbol: "Spade",
      value: 2
    },
    {
      type: "Three",
      symbol: "Spade",
      value: 3
    },
    {
      type: "Four",
      symbol: "Spade",
      value: 4
    },
    {
      type: "Five",
      symbol: "Spade",
      value: 5
    },
    {
      type: "Six",
      symbol: "Spade",
      value: 6
    },
    {
      type: "Seven",
      symbol: "Spade",
      value: 7
    },
    {
      type: "Eight",
      symbol: "Spade",
      value: 8
    },
    {
      type: "Nine",
      symbol: "Spade",
      value: 9
    },
    {
      type: "Ten",
      symbol: "Spade",
      value: 10
    },
    {
      type: "Jack",
      symbol: "Spade",
      value: 10
    },
    {
      type: "Queen",
      symbol: "Spade",
      value: 10
    },
    {
      type: "King",
      symbol: "Spade",
      value: 10
    },
    {
      type: "Ace",
      symbol: "Heart",
      value: 11
    },
    {
      type: "Two",
      symbol: "Heart",
      value: 2
    },
    {
      type: "Three",
      symbol: "Heart",
      value: 3
    },
    {
      type: "Four",
      symbol: "Heart",
      value: 4
    },
    {
      type: "Five",
      symbol: "Heart",
      value: 5
    },
    {
      type: "Six",
      symbol: "Heart",
      value: 6
    },
    {
      type: "Seven",
      symbol: "Heart",
      value: 7
    },
    {
      type: "Eight",
      symbol: "Heart",
      value: 8
    },
    {
      type: "Nine",
      symbol: "Heart",
      value: 9
    },
    {
      type: "Ten",
      symbol: "Heart",
      value: 10
    },
    {
      type: "Jack",
      symbol: "Heart",
      value: 10
    },
    {
      type: "Queen",
      symbol: "Heart",
      value: 10
    },
    {
      type: "King",
      symbol: "Heart",
      value: 10
    },
    {
      type: "Ace",
      symbol: "Clubs",
      value: 11
    },
    {
      type: "Two",
      symbol: "Clubs",
      value: 2
    },
    {
      type: "Three",
      symbol: "Clubs",
      value: 3
    },
    {
      type: "Four",
      symbol: "Clubs",
      value: 4
    },
    {
      type: "Five",
      symbol: "Clubs",
      value: 5
    },
    {
      type: "Six",
      symbol: "Clubs",
      value: 6
    },
    {
      type: "Seven",
      symbol: "Clubs",
      value: 7
    },
    {
      type: "Eight",
      symbol: "Clubs",
      value: 8
    },
    {
      type: "Nine",
      symbol: "Clubs",
      value: 9
    },
    {
      type: "Ten",
      symbol: "Clubs",
      value: 10
    },
    {
      type: "Jack",
      symbol: "Clubs",
      value: 10
    },
    {
      type: "Queen",
      symbol: "Clubs",
      value: 10
    },
    {
      type: "King",
      symbol: "Clubs",
      value: 10
    },
    {
      type: "Ace",
      symbol: "Diamond",
      value: 11
    },
    {
      type: "Two",
      symbol: "Diamond",
      value: 2
    },
    {
      type: "Three",
      symbol: "Diamond",
      value: 3
    },
    {
      type: "Four",
      symbol: "Diamond",
      value: 4
    },
    {
      type: "Five",
      symbol: "Diamond",
      value: 5
    },
    {
      type: "Six",
      symbol: "Diamond",
      value: 6
    },
    {
      type: "Seven",
      symbol: "Diamond",
      value: 7
    },
    {
      type: "Eight",
      symbol: "Diamond",
      value: 8
    },
    {
      type: "Nine",
      symbol: "Diamond",
      value: 9
    },
    {
      type: "Ten",
      symbol: "Diamond",
      value: 10
    },
    {
      type: "Jack",
      symbol: "Diamond",
      value: 10
    },
    {
      type: "Queen",
      symbol: "Diamond",
      value: 10
    },
    {
      type: "King",
      symbol: "Diamond",
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
    return this.cards
  },
  deal(){
    draw = this.cards.pop();
    console.log(draw);
    console.log(this.cards.length);
    return draw;
  }
}

deck.shuffle();
deck.deal();
deck.deal();