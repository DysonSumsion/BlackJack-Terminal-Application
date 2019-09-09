const readlineSync = require('readline-sync');
let cards = require('./cards')
cards.deck["shuffle"]();
let option = ["Deal"]
let playerHand = []
let dealerHand = []
const checkAce = (hand) => {
    //modify the value of ace
    result = [];
    hand.forEach( (card) =>{
        if(card["type"] == "Ace"){
            card["value"] = 1;
        };
        result.push(card);
    });
    return result;
}
const getTotal = (hand) => {
    handTotal = hand.reduce((total, currentHand) => {
        total += currentHand.value
        return total
    }, 0);
    return handTotal;
}
const stand = (cards, playerHand, dealerHand) => {
    while(getTotal(dealerHand) < 17){
        dealerHand.push(cards.deck.deal())
        console.log("Dealer hand: ");
        console.log(dealerHand);
        console.log(`Total: ${getTotal(dealerHand)}`);
    }
    
    if(getTotal(dealerHand) > 21){
        console.log("Ace revert");
        if({type: "Ace" in dealerHand}){
            hand = checkAce(dealerHand)
            if(getTotal(hand) < 17){
               hand.push(cards.deck.deal()) 
            }
            else{
                stand(cards, playerHand, hand);
            }
        }
        else{
            console.log("Dealer Bust!");
            console.log(`Dealer Total: ${getTotal(dealerHand)}`);
            console.log(`Player Total: ${getTotal(playerHand)}`);
        }
    }
    else if(getTotal(dealerHand) == getTotal(playerHand)){
        console.log("Push");
        console.log(`Dealer Total: ${getTotal(dealerHand)}`);
        console.log(`Player Total: ${getTotal(playerHand)}`);
    }
    else if(getTotal(dealerHand) > getTotal(playerHand)){
        console.log("Dealer win!");
        console.log(`Dealer Total: ${getTotal(dealerHand)}`);
        console.log(`Player Total: ${getTotal(playerHand)}`);
    }
    else{
        console.log("Player win!");
        console.log(`Player Total: ${getTotal(playerHand)}`);
        console.log(`Dealer Total: ${getTotal(dealerHand)}`);
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
            stand(cards, playerHand, dealerHand)
        }
        else if(playerTotal < 21){
            hitOrStand(cards, hand)
        }
        else{
            if({type: "Ace" in hand}){
                hand = checkAce(dealerHand)
                if(getTotal(hand) <= 21){
                    hitOrStand(cards, hand);
                }
                else{
                    stand(cards, hand, dealerHand);
                }
            }
            else {
                console.log("Bust!, Dealer win");
            }
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
    dealerHand = []; 
    playerHand = [];
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
            main();
        case -1:
            break;
    }
}


// while(true) {
//     main()
//     if (option == -1) {
//         break;
//     }
// }
main()