$(function(){
console.log("followship.js loaded");

var makeMiddleEarth = function() {
   var $body = ('body')
   var $section = $("<section id='middle-earth'>")
   for(var i in lands){
    $section.append("<article class ='land'><h1 class = 'land'>" + lands[i] + "</h1></article");
   }

  $($body).append($section);
}
setTimeout(makeMiddleEarth, 2000)

var makeHobbits = function() {
  var $hobbitsList = $('<ul id="hobbits"></ul>');
  for (var i in hobbits) {
    $hobbitsList.append("<li class='hobbit'>"+ hobbits[i]+" </li>");
  }
  var $shire = $('article').first();
  $shire.append($hobbitsList);
}
setTimeout(makeHobbits, 2000)

var keepItSecretKeepItSafe = function() {
  var $ringdiv = $('<div id="the-ring"></div>');
  var $frodo = $('#middle-earth .land #hobbits .hobbit')[0];
  $ringdiv.attr('class', 'magic-imbued-jewelry');
  $($ringdiv).click(function(){
    $(nazgulScreech);
  });
  $($frodo).append($ringdiv);
  }
setTimeout(keepItSecretKeepItSafe, 2000);

var makeBuddies = function() {
  var $aside = $('<aside></aside>')
  var $buddies = $('<ul id ="buddies"></ul>')
  $($aside).append($buddies);
  for(var j in buddies){
  $buddies.append("<li class='buddy'>"+ buddies[j]+" </li>");
  var $rivendell = $('article.land:nth-child(2)').append($buddies)
  $($rivendell).append($aside);
 }
}
setTimeout(makeBuddies, 2000);

var beautifulStranger = function() {
  var $strider = $('#middle-earth .land #buddies .buddy')
  $strider.innerText = 'Aragorn';
  $strider.color = 'green';
}
setTimeout(beautifulStranger, 2000);

var leaveTheShire = function() {
  $($rivendell).append($hobbits);
}
setTimeout(leaveTheShire, 2000);

var forgeTheFellowShip = function() {
  // Create a div with an id of 'the-fellowship' within the section.land for "Rivendell"
  var $rivdiv = $('<div id = "the-fellowship"></div>');
  var $hobbits = $('#middle-earth .land #hobbits');
  var $buddies = $('#middle-earth .land #buddies');
  var $rivendell = $('#middle-earth .land #rivendell');
  $($rivendell).append($rivdiv);
  // Add each hobbit and buddy one at a time to 'div#the-fellowship'
  $($rivdiv).append($hobbits);
  $($rivdiv).append($buddies);
  // After each character is added make an alert that they have joined your party
  alert('The hobbits and buddies have joined your party!')
}
setTimeout(forgeTheFellowShip, 2000);
})

