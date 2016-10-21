# Weekend Homework!
![](http://i.giphy.com/nLhdSinRtaL2E.gif)


"After three days without programming, life becomes meaningless"
- [The Tao of Programming](http://www.mit.edu/~xela/tao.html)

## Setup
Start this assignment by going into your class repository on your computer and running `git pull upstream master`. You will be be working in the `index.html` and `script.js` provided in the `d05/homework` folder. The html and js files are blank! So your first task will be to set up the html file and link it to the js file. Open up the the dev tools in your browser and get ready for some JS reps!

###### Completion
Do through the end of part 5. Remember, more is better, healthy living is best.

## Assignment

*** Note *** All input from alerts will be returned as String values. If your math is calculating strangely, make sure you convert your input from a String into a Number using Javascript's `Number()` method. Example:
 - `"5" + 15` = `"515"`
 - `Number("5") + 15` = `20`

Separate each problem in `script.js` with a comment like `// 1.`
 - You will want to comment out each problem in your js file once you've finished it (otherwise you'll have lots of alerts every time you load the page!)

##### 1. Add the following code to your JS file:
``` Javascript
  console.log("script loaded");
```
  - This will log `script loaded` to your browser's console when the page loads.
  - A console log at the beginning of a script file can help determine if your js file is set up correctly
  - If you don't see the anything logged to the console when the page loads, checkout your html file and make sure you have the `script.js` linked to `index.html` correctly.
<br><br>

##### 2. Temperature conversion

How would you convert temperature in Fahrenheit to Celsius?
Don't know? Google might! :smile:

 `prompt()` the user for temperature in Fahrenheit and `alert()` the given degrees in Celsius (round to the nearest whole number).


 The user flow should look something like this (except with prompt windows..)

> Give a temperature in Fahrenheit:

> 78

> 78 degrees in Fahrenheit is equal to 26 Celsius.
<br><br>

##### 3. Basic Conversion - Pounds to kg

 How would you convert weights in pounds to kilograms?

  `prompt()` the user for weights in pounds and `alert()` the given weight in kilograms.

The user flow should look something like this (except with prompt windows..)

> Give a weight in pounds:

> 345

> 345 pounds is equal to 156.489 kg.
<br><br>

##### 4. Pythagorean Theorem
Write a JavaScript statement that can solve the pythagorean theorem.
<br><br>
The program should use `prompt()` to get input from the user. And the answer should be returned through an `alert()`.
<br><br>
The user flow should look something like this (except with prompt windows..)

> What is the length of the first side?

> 10

> What is the length of the second side?

> 20

> The length of the third side is 22.36.

 - The last sentence should be an addition of strings and variable values.
 <br><br>


##### 5. Longest Word
Write a program that prompts the user for a statement and alerts back the longest word.

The user flow should look something like this (except with prompt windows..)

> Say something:

> The arsonist has an oddly shaped foot.

> The longest word was "arsonist"



# Bonus
### Camel Case & Snake Case
Different programming languages have different conventions! Javascript's convention for variable names is to use Camel Case. In Camel Case there are no spaces, the first word is lowercase, and every word after is capitalized. Meanwhile, in Ruby it's all about Snake Case, which uses all lowercase with underscores instead of spaces. See examples below:
 - iAmWrittenInCamelCase
 - snake_case_is_easy_to_read


##### Part 1 - Camel Case
`prompt()` the user for a statement and `alert()` the same string with the following modifications.
  - No spaces
  - All words should be capitalized, except for the first word.


  The user flow should look something like this (except with prompt windows..)

    > Let's format a string of words into camel case:

    > In Javascript the number 0 is a falsey value

    > inJavascriptTheNumber0IsAFalseyValue

***Hint***: check out Javascript's `toLowerCase` and `toUpperCase` String methods
<br><br>

##### Part 2 - Snake Case
Even though we won't be working in Ruby for a little while, let's just try to convert a string to snake case for fun! <br><br>
`prompt()` the user for a statement and `alert()` the same string with the following modifications.
  - Replace spaces with underscores
  - All words should be lowercase


    The user flow should look something like this (except with prompt windows..)

    > Let's format a string of words into snake case:

    > Java is to Javascript as car is to carpet

    > java_is_to_javascript_as_car_is_to_carpet

<br><br>
## Old Modems
##### Part 1
How long would it take to download a 25GB ripped copy of Blade Runner over a
$200 56k/s modem from 1995? That's kbps, **kilobit**, not kilobyte. You're going to have to dig for conversion here. Save the calculated answer to a variable and then output the answer in an `alert()`.
- **_note: make sure your answer is converted in the form of hours:minutes:seconds. This can be done with the modulus operator(%)_**

> All this work will one day fade, like tears in the rain.

##### Part 2
Now, `prompt()` the user for input on how many GB's a file contains and `alert()` the correct time that it would take to download at 56k/s.

# Super Bonus
If you've made this far, congratulations! You are well on your way to becoming a Javascript wizard!

If you solved the above problems without anonymous functions, like this perhaps:
``` javascript
var input = prompt("Enter a number and we'll triple it!");
alert("The answer is: " + Number(input) * 3);
```
Go back through the problems in this assignment and use anonymous functions to handle your logic. Example:
``` javascript
var tripler = function(number) {
  number = Number(number);
  return "The answer is: " + number * 3;
}

var inputForSuperBonus = prompt("Enter a number and we'll triple it!");

alert(tripler(inputForSuperBonus));
```
