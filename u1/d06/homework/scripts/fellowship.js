console.log("Linked.");

// Our heros
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector

//1//
var makeMiddleEarth = function(){
body = document.querySelector('body');
body.innerHTML+="<section id = 'middle-earth'></section>";
sect = document.querySelector('section');
for(i = 0; i < lands.length; i++){
 sect.innerHTML += '<article id = "Shire">'+lands[i]+'</article>';
}};
makeMiddleEarth();

//2//
var makeHobbits = function(){
var getShire = document.querySelectorAll('#Shire')[0];
getShire.innerHTML += "<ul>"
for(i = 0; i<hobbits.length; i++){
getShire.innerHTML += `<li class=${hobbits[i].toLowerCase().split(' ')[0]}>${hobbits[i]}</li>`;
getShire.innerHTML += "</ul>";
}};
makeHobbits();
//3//
var keepItSecretKeepItSafe = function(){
var div = document.createElement('div');
div.id = "the-ring";
div.class = 'magic-imbued-jewelry';
document.getElementsByClassName('frodo').innerHTML += ('the-ring');
}
keepItSecretKeepItSafe();
//4//

