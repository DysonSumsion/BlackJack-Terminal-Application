const cards = require('./cards.js')
const readlineSync = require('readline-sync');
let option = ["Deal", "Quit"]
const play = () => {
    playerHand = []
    dealerHand = []
    cards.deck["shuffle"]();
    playerHand.push(cards.deck["deal"]());
    dealerHand.push(cards.deck["deal"]());
    playerHand.push(cards.deck["deal"]());
    dealerHand.push(cards.deck["deal"]());
    console.log("Player Hand :");
    console.log(playerHand);
    console.log("Dealer hand ( 1 not shown )");
    console.log(dealerHand[0]);
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