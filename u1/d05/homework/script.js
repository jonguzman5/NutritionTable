/*1.*/
console.log("script loaded");
/*2.*/
var temperature = prompt("Please enter a temperature (°F)");
var farenheit = parseFloat(temperature);
var celsius = (farenheit -  32) * 5/9;
alert(farenheit + " degrees Farenheit is equal to " + Math.round(celsius) + " degrees Celsius");
/*3.*/
var weight = prompt("Please enter your weight(lbs)");
var pounds = parseInt(weight);
var kilograms = (pounds/2.2046);
alert(pounds + " Pounds is equal to " + kilograms.toFixed(1) + " Kilograms");
/*4.*/
var firstSide = prompt("What is the length of the first side?") ;
var secondSide = prompt("What is the length of the second side?");
var sideone = firstSide * firstSide;
var sidetwo = secondSide * secondSide;
var sidethree = Math.sqrt(sideone + sidetwo);
var thirdSide = alert("The length of the third side is " + sidethree.toFixed(3));
/*5.*/
var saySomething = prompt("Please enter some words");
function maxWord(str) {
  var words = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i<words.length; i++){
    if(words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }
  return longestWord;
}
var giveSomething = alert('The longest word is ' + maxWord.longestWord + ' with '+ maxWord(saySomething) + " characters");
