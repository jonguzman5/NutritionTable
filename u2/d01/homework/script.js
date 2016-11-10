var frameworks = {
  "frontEnd": [
    {
      "name": "React",
      "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces."
    },
    {
      "name": "Angular",
      "description": "HTML enhanced for web apps"
    },
    {
      "name": "Backbone",
      "description": "Give your JS App some Backbone with Models, Views, Collections, and Events"
    }
  ], // ends frontEnd array
  "backEnd": [
    {
      "name": "Express",
      "description": "A minimalist framework for building a host of web and mobile applications as well as application programming interfaces (APIs)"
    },
    {
      "name": "Meteor",
      "description": "An open-source, model-view controller (MVC) framework for building websites and web/mobile applications."
    },
    {
      "name": "Sails",
      "description": "Sails.js offers a model-view controller (MVC) pattern for implementing data-driven application programming interfaces (APIs)."
    }
  ] // ends backendArray
} // ends data json object

// var modifiedFrontEnd = frameworks.frontEnd.map(function(addjs){
//   return addjs.name + ".js";
// });
// console.log(modifiedFrontEnd);

// var filteredFrontEnd = frameworks.frontEnd.filter(function(front){
//  return front.description.length > 30;
// });
// console.log(filteredFrontEnd);

// var filteredBackEnd = frameworks.backEnd.filter(function(vowel){
// return vowel.name.charAt(0) === 'A' ||
//            vowel.name.charAt(0) === 'E' ||
//            vowel.name.charAt(0) === 'I' ||
//            vowel.name.charAt(0) === 'O' ||
//            vowel.name.charAt(0) === 'U'
// });
// console.log(filteredBackEnd);

// var frontEndNames = frameworks.frontEnd.reduce(function(bla, blabla) {
//   return bla += blabla.name;
// }, "");
// console.log(frontEndNames);

var frontNames = frameworks.frontEnd.map(function(addjs){
  return addjs.name + ".js";
});
(frontNames);

var backNames = frameworks.backEnd.map(function(addjs){
  return addjs.name + ".js";
});
(backNames);

var concatenatedFront = frontNames.reduce(function(nombre, combiner, equalizer, normalizer) {
    if(equalizer === normalizer.length-1)
       return nombre += combiner + " are back end frameworks"
  return nombre += combiner + ",";
}, "");
console.log(concatenatedFront);







































































