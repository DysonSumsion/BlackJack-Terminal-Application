const cards = require('./cards')
const readlineSync = require('readline-sync');
let option = ["Deal", "Quit"]
const hitOrStand = () => {
    input = readlineSync.keyInSelect(["Hit", "Stand"], "Would you like to hit or stand? ")
    switch(input){
        case 0:
            hit();
            break;
        case 1:
            stand();
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
    dealerTotal = dealerHand.reduce((total, currentHand) => {
        total += currentHand.value
        return total
    }, 0)
    console.log(`Dealer total: ${dealerHand[0].value}`);
    console.log("Player Hand :");
    console.log(playerHand);
    playerTotal = playerHand.reduce((total, currentHand) => {
        total += currentHand.value
        return total
    }, 0)
    console.log(`Player total: ${playerTotal}`);
    hitOrStand()
}
const main = () => {
    let input = readlineSync.keyInSelect(option, "Menu")
    switch (input) {
        case 0:
            play();
            break;
        case 1:
            console.log("Stand");
            break;
        case -1:
            console.log("Quit");
            break;
    }
}
main()