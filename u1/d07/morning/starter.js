console.log('U01D07 starter.js is connected!');

// DO WORK IN ANY ORDER YOU'D LIKE BELOW, BUT REMEMBER TO HAVE MEANINGFUL VARIABLE NAMES AND CONSOLE.LOG STATEMENTS
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var fulldeck = suits + values;

var cards = function(){
var pickedcard = fulldeck[Math.floor(Math.random() * fulldeck.length)];
return pickedcard;
};
cards();
