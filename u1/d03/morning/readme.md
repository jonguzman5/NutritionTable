# Let's Math!
<br>
*(codename: Look Ma' I'm mathing!)*

![pemdas](http://www.coolmath.com/sites/cmat/files/images/order-of-operations-05-06.gif#pemdas)

## Introduction
<br>
Today we're going to jump start the day with some math!<br> *(cue cheering sound)* <br> While this may seem trivial to some, a basic understanding of mathematics is very important in development. Either solve the following equations or using basic math operators `(,),^,*,/,+,-,=,>,<` make each of the following statements true.<br><br> **After solving each by hand, take a second pass and check all of your answers using JS!**
- You can practice these in JS by typing `node` into your terminal opening up a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop).

#### Solve These by placing parentheses in the correct place
1.  `(5 + 6)  * 10 = 110`

1. `2 ^ (2 + 3 ) =  32`

1. `(15 - 3 )^ (3 - 1) = 144`

#### Using `>`,`<`, or `=` fill in the underscore to make this equation true
1. `(15 + 10) - (12 + 5 - 7 + 15) _>_  15 + (10 - 12) + 5 - (7 + 15) `
29 > -4
#### Find the answer for these equations
1. `( ( 20 + 5 * 4 / 2 ) / 3 ) ^ 2 = _100_ `

1. `( ( 5 ^ 3 + 3 ) / 2 ^ 3 ) ^ (1/2) = _4_ `

#### Using [JavaScript Math class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), how would you solve each of these problems?

1. Round 18.6 to the nearest integer
math.round(19)
1. Round 10.75 down to 10
math.floor(10.75)
1. Round 5.25 up to 6
math.ceil(5.25)
1. Find the square root of 225
math.sqrt(225)
1. Using the method `Math.random()` how would you find a random integer between 1 and 10? *Hint: make sure you know what Math.random() returns*
math.round(math.random() * (10 - 1) + 1))
1. Using the method `Math.random()` how would you find a random integer between 75 and 100?
math.round(math.random() * (100 - 75) +75))
1. Given a radius of 4, how would you find the following properties of a circle?
<br> Find the circumference
function calculateCircumference(4) {
  return 2 * Math.PI * 4;
}
calculateCircumference(1);
<br> Find the area
return math.pi(4^2);
