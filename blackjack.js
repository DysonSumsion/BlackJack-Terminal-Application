const cards = require('./cards')
const readlineSync = require('readline-sync');
let option = ["Deal", "Quit"]
const getTotal = (hand) => {
    handTotal = hand.reduce((total, currentHand) => {
        total += currentHand.value
        return total
    }, 0);
    return handTotal;
}
const stand = (cards, playerHand, dealerHand) => {
    while(getTotal(dealerHand) <= 17){
        dealerHand.push(cards.deck.deal())
        console.log("Dealer hand: ");
        console.log(dealerHand);
        console.log(`Total: ${getTotal(dealerHand)}`);
    }
    if(getTotal(dealerHand) > 21){
        console.log("Dealer Bust!");
    }
    else if(getTotal(dealerHand) == getTotal(playerHand)){
        console.log("Push");
    }
    else if(getTotal(dealerHand) > getTotal(playerHand)){
        console.log("Dealer win!");
    }
    else{
        console.log("Player win!");
    }
}
const hitOrStand = (cards, hand) => {
    const hit = (cards, hand) => {
        hand.push(cards.deck.deal());
        console.log("Player Hand :");
        console.log(playerHand);
        playerTotal = getTotal(hand)
        console.log(`Player total: ${playerTotal}`);
        if(playerTotal == 21){
            stand()
        }
        else if(playerTotal < 21){
            hitOrStand(cards, hand)
        }
        else{
            console.log("Bust!, Dealer win");
        }
    }
    input = readlineSync.keyInSelect(["Hit", "Stand"], "Would you like to hit or stand? ")
    switch(input){
        case 0:
            hit(cards, hand);
            break;
        case 1:
            stand(cards, playerHand, dealerHand);
            break;
        case -1:
            console.log("bye");
    }
}
const play = () => {
    playerHand = []
    dealerHand = []
    cards.deck["shuffle"]();
    playerHand.push(cards.deck.deal());
    dealerHand.push(cards.deck.deal());
    playerHand.push(cards.deck.deal());
    dealerHand.push(cards.deck.deal());
    console.log("Dealer hand ( 1 not shown )");
    console.log(dealerHand[0]);
    dealerTotal = getTotal(dealerHand);
    console.log(`Dealer total: ${dealerHand[0].value}`);
    console.log("Player Hand :");
    console.log(playerHand);
    playerTotal = getTotal(playerHand);
    console.log(`Player total: ${playerTotal}`);
    hitOrStand(cards, playerHand)
}
const main = () => {
    let input = readlineSync.keyInSelect(option, "Menu")
    switch (input) {
        case 0:
            play();
            break;
        case 1:
            stand();
            break;
        case -1:
            console.log("Quit");
            break;
    }
}
main()