/*1. The code will print 1-9 with the string*/
 1 is 1 number closer to 10
 2 is 1 number closer to 10
 3 is 1 number closer to 10
 4 is 1 number closer to 10
 5 is 1 number closer to 10
 6 is 1 number closer to 10
 7 is 1 number closer to 10
 8 is 1 number closer to 10
 9 is 1 number closer to 10
/*2. It will print 5, 4, 5.
Thisi is because it is printing the last index value and the function's "i" has a reassigned value.
*/
5
4
5
/*3. The second function because the function has no name, but associated with a variable with the name "sayGoodbye"*/
/*4. A parameter is the declared value within a function however a argument is the variable used when calling a function.*/
/*5. It will print "The length is 5", "["dude","up",  "is", "what","hello"] ", "If the array was a single string, it would look like ["dude","up",  "is", "what","hello"] !"*/
The length is 5
["dude", "up", "is", "what", "hello"]
If the array was a single string, it would look like 'dude up is what hello'!
/*6*/
 var input = prompt("What is your name?");
alert("YOUR NAME IS " + input.toUpperCase());
/*7.*/
var response = function(statement) {
return "NAME: " + statement.toUpperCase();
};
var input = prompt("Please enter your name");
alert(response(input));
console.log(response(input));
/*8*/
var userPrompt = prompt("Enter a calculation");
var num1 = parseInt(userPrompt.split(" ")[0]);
var num2 = parseInt(userPrompt.split(" ")[2]);
var operator = userPrompt.split(" ")[1];
console.log(userPrompt, operator, num1, num2);

var doMath = function(stuff){
  if(* === "*")
  return num1*num2;
  else if
  (/ === "/");
  return num1/num2;
  else if
  (+ === "+");
  return num1+num2;
  else if
  (- === "-");
  return num1-num2;
alert("The result is: " + doMath);
};
console.log(doMath(userPrompt));





