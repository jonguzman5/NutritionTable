var greetings = {};

greetings.sayHello = function(person){
  console.log("hello" + person + "!");
}

greetings.sayGoodBye = function(){
  console.log("goodbye")
}

module.exports = greetings;
