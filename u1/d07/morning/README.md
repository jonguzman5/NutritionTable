![](http://i.giphy.com/5u1BmupTSGSA0.gif)

## JavaScript Warm Up

Let's limber up our JavaScript muscles before we get into DOM manipulation!

## Setup

There's a provided ` index.html ` and ` starter.js `. Open the ` index.html ` file in your browser, and open the Developer Tools -> Console (COMMAND+OPTION+J).

Work in ` starter.js ` and refresh the browser to test your work! You'll notice ` starter.js ` is empty except for a log statement to show that the file is connected - feel free to define any variables you think you'll need and to organize the code in any way (comments, any order of steps, etc).

## Completion

There are 3 questions and a bonus! Aim to complete the first 2. Feel free to work by yourselves or with a partner.

## Assignment

#### House of Cards
1. Given the two arrays below, write a function that returns a new array that contains the full deck of 52 cards in this format: "5H" for five of hearts, "QD" for Queen of Diamonds, etc. Set a variable `cards` equal to this function when it is invoked.
 - `Hint` - Use a nested loop to access elements in both arrays.

```javascript
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
```

1. After you construct your deck, write a function that will return the value of a single card (J, Q, K have a value of 10, and A has a value of 11). This function should accept an item from the cards array as an argument.

1. Next, write a function that randomly grabs 2 cards from the cards array, calls on `cardValues` to determine the values of the two cards, and returns a string stating the value of the cards.
 `Hint` - Use a nested loop to access elements in both arrays.

1. After you construct your deck, write a function that will return the value of a card (J, Q, K have a value of 10, and A has a value of 11). This function should accept an item from the cards array as an argument.



## Bonus
#### Race to the White House
- Given the array below, write a function that loops through the array and returns the name of the youngest candidate.

```javascript
var candidates = [
  {
    name: "Bernie Sanders",
    age: 74
  },
  {
    name: "Hillary Clinton",
    age: 68
  },
  {
    name: "Jeb Bush",
    age: 62
  },
  {
    name: "Gary Johnson",
    age: 63
  },
  {
    name: "Donald Trump",
    age: 69
  },
  {
    name: "Frank Underwood",
    age: 55
  },
  {
    name: "John Kasich",
    age: 63
  },
  {
    name: "Marco Rubio",
    age: 44
  }
]
```


- Michael Bloomberg (age 73) is considering entering the race. Write a `runForOffice` function that will take two arguments, a name and an age, and return a candidate object like the ones above. Use it to push Bloomberg to the array.  
