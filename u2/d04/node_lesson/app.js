var printHello = require("./greet.js").sayHello//();//used to export  //wo ./ node thinks you're looking for a package
var printGoodBye = require("./greet.js").sayGoodBye;
// console.log(printHello)
printHello(" heidi"); //can be place here or at the end of printHello requirement
// printGoodBye();

// module.exports = printHello;
