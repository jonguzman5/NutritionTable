# Dino Digging!

  Someone has stolen our specimens and damaged our data! It's your job to help the team make sense of the data that's left, and help us reorganize.

![Chris Pratt Being King of the Raptors](http://i.imgur.com/jSKkQhS.gif)

## Learning Objectives

  - Iterating over objects and arrays to find data

## Setup

  You'll be working in your own code snippets for this assignment, but when you're done save your work in today's morning exercise folder in a file called `dino-digging.js`

### Part 1 - Warming Up



```javascript
var buenosAires = {
  location: "Buenos Aires",
  depthInMeters: "400",
  annualBudget: 1000000,
  specimens: ["Dilophosaurus","Brachiosaurus"]
};

var mexico = { l
  location: "Mexico",
  depthInMeters: "350",
  annualBudget: 900000,
  specimens: ["Gallimimus","Parasaurolophus"]
};

var snakewaterMontana = {
  location: "SnakewaterMontana",
  depthInMeters: "10",
  annualBudget: 150000,
  specimens: ["Velociraptor","Brachiosaurus"]
};

var nicaragua = {
  location: "Nicaragua",
  depthInMeters: "200",
  annualBudget: 1500000,
  specimens: ["Tyrannosaurus Rex","Stegosaurous","Triceratops","Velociraptor"]
};

```

  - Use a `for` loop to output the specimens in each dig site

  - Calculate the average depth of all dig sites.

### Part 2 - Get Assets in Order

Push each variable above into a new array called `hammondsMines`.

Now that we have some usable data, continue working in your code snippet and help us crunch some numbers!

 - Use `for` loops to iterate through `hammondsMines` and perform each of the following( separately ).

    - Output the location names of each dig site to the console.

    - Calculate the total annual budget to run all dig sites.

### Part 3 - Start Optimizing

  Due to dinosaur-related lawsuits, we're over budget!

  - Use a `for` loop to calculate the cumulative depth dug across all dig sites.

    -Calculate the cost/meter of digging.

  - Use a `for` loop to find the dig site that costs the most to run, so we can send the message along to close it down.

### Part 4 - The Big One

  After our dino lawsuit, gov't agencies are requiring our data formatted differently, in string of course...

  Use a `for` loop to iterate over each location in hammondsMines. You'll need to use a `for in` loop to console.log all the information in a single string for each dig site. If the property is an array, don't include it in your string (`Hint` - use the `typeOf` method to determine if the property is a string). Your output should look like:

  ``` javascript
"SnakewaterMontana has a budget of $1500000 and goes 200 meters"

etc..

  ```
