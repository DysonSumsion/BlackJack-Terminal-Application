const readlineSync = require('readline-sync');

let option = ["Deal", "Quit"]

let input = readlineSync.keyInSelect(option, "Menu")

switch(input) {
    case 0:
        console.log("Hit")
        break;
    
    case 1:
        console.log("Stand");
        break;
    
    case -1:
        console.log("Quit");
        break;
}
  