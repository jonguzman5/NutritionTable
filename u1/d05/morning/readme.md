# Javascript for Breakfast!
<br>
“There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.”
-C.A.R. Hoare
## Introduction
<br>
Today we're going to jump start the day by checking out some Javascript functions and reviewing other concepts!<br>
- You can practice these in JS by using the console in your browser's developer tools.
- Type out your answers in the attached script.js file.

#### 1. Given the following JS code, what should be the output?
``` Javascript
var counter = 1;
while (counter < 10) {
  console.log(counter + " is 1 number closer to 10");
  counter++;
}
```

#### 2. Given the following JS code, what should be the output?
``` Javascript
for (var i = 0; i < 5; i++){
  // just increment i
}

function numberLogger() {
  var i = 4;
  console.log(i);
}

console.log(i);
numberLogger();
console.log(i);
```

 - Can you explain the result with your understanding of scope?

#### 3. Which of the following is an anonymous function?
``` Javascript
function sayHi() {
  console.log("Hi");
}

var sayGoodbye = function() {
  console.log("Goodbye");
}
```

#### 4. What is the difference between an argument and a parameter in a JS function
``` Javascript
```

#### 5. Given the following JS code, what should be the output?
``` Javascript
var words = ["hello", "what", "is", "up", "dude"];

var lengthFinder = function(collection) {
  return "The length is " + collection.length;
};

var arrayReverse = function(collection) {
  return collection.reverse();
};

var arrayJoiner = function(collection) {
  return "If the array was a single string, it would look like '" + collection.join(" ") + "'!";
};

console.log(lengthFinder(words));
console.log(arrayReverse(words));
console.log(arrayJoiner(words));
```

#### 6. Using `prompt` and `alert` how would you ask the user for their name, and respond with it in all caps?
``` Javascript
```

#### 7. Now try using an anonymous function to handle the login of the previous problem. For example:
``` Javascript
// similar to previous problem

var input = prompt("Say something about Oreos");
// user enters "Oreos are technically vegan"
alert(input + "?");
// alerts: Oreos are technically vegan?


// using a function

var response = function(statement) {
  return "Just because " + statement + " doesn't mean they are good for you";
};

var input = prompt("Say something about Oreos");
// user enters "Oreos are technically vegan"
alert(response(input));
// alerts: Just because Oreos are technically vegan doesn't mean they are good for you
```

#### 8. Create program that prompts the user for a calculation, uses an anonymous function to handle the calculation, and alerts the result to the user.
Write your program so that it works with addition, subtraction, multiplication, and division.
Your user flow should look something like:

   > Enter in a calculation for us to figure out:

   > 8 / 2

   > 4
