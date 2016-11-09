![](https://cdn.meme.am/instances/58589628.jpg)

# Homework - Map, Filter, Reduce!
Now that we are going to start working with lots of data, it's time to get comfortable parsing through big data blocks. Map, Filter, and Reduce are some array methods that will make your life much easier once you get the hang of them.

### For tonight's assignment we will be using the functions `.map()`, `.filter()`, and `.reduce()` to grab data from JSON objects!

Completion: Parts 1 - 2

More is better, healthy living is best.

## Resources
 - [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 - [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 - [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Setup
`script.js` has already been provided for you. Put your answers in this file. You either test your methods in the terminal with Node, or in the Chrome Dev Tools.

You will be working with the following JSON Object:

```js

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
```


#### Part 1 - .map()
As you may already know, the `map` method will take an array and return a new, modified version of it.

Example:
``` js
var backendTech = ["Node", "Express", "Handlebars"];
var modifiedTech = backendTech.map(function(tool){
  return tool + "!";
});

console.log(modifiedTech);
  => ["Node!", "Express!", "Handlebars!"]
```


1. The client isn't happy with the format of our data. Let's grab the `frontEnd` array from the `frameworks` JSON object and use `map()` to return a new array. This array should be modified so that each framework's `name` will end in '.js'.
 - Save this array into a variable called 'modifiedFrontEnd' and print it to the console.

2. The client is back! They were very pleased with the results of your previous work! However, they need the same thing done to the `backEnd` array. Use `map()` to return a new array so each framework's name ends in '.js'.
 - Save this array to a variable called 'modifiedBackEnd' and print it to the console.

#### Part 2 - .filter()
We've seen `.filter()` before, but to recap - `filter()` takes an array and returns a new array of the elements that pass a boolean test.

Example:
``` js
var animals = [
  {
    "name": "Fluffykins",
    "species": "cat"
  },
  {
    "name": "Hamilton",
    "species": "dog"
  },
  {
    "name": "Shadow",
    "species": "dog"
  },
  {
    "name": "Sassy",
    "species": "cat"
  }
];

var dogs = animals.filter(function(animal){
  if (animal.species === "dog") {
    return animal;
  }
});

console.log(dogs);
  => [
       {
          "name": "Hamilton",
          "species": "dog"
        },
        {
          "name": "Shadow",
          "species": "dog"
        }
      ]
```

1. Going back to our frameworks JSON object, let's use `.filter()` to create a new array out of the `frontEnd` array. This new array should contain every object whose description is more than 30 characters long.
 - store this new array as 'filteredFrontEnd' and print it to the console.

2. Once more, with `.filter()` let's make a new array from the `backEnd` array in our `frameworks` JSON file. This array should contain every backEnd framework whose `name` begins with a vowel.
  - store this new array as 'filteredBackEnd' and print it to the console

## Bonus

#### Part 3 - .reduce()
`reduce` is a kind of Swiss Army Knife for arrays. One of it's best uses is adding up elements. It takes a callback function with two arguments, the first we can call `sum`. We can add each item of the array to the sum. The second argument is current, which is each element in the array as we iterate through it.

Example:
```js
var numbers = [0, 1, 2, 3];
var total = numbers.reduce(function(sum, current) {
  return sum += current;
});

console.log(total);
  => 6
```

1. Using `reduce()`, let's iterate over the `frontEnd` array in our `frameworks` JSON object and concatenate all the names together in a single string.
 - save this string in a variable called "frontEndNames" and print it to the console.

2. Now let's combine some of these methods. Take the `frameworks` object and use `map` to add '.js' to the end of each name for both frontEnd and backEnd arrays. Keep track of both arrays in their own variables.
 - Use `reduce` to concatenate all of the front end framework names together, followed by " are the front end frameworks", and store this string into a new array.
  - Use `reduce` to concatenate all of the back end framework names together, followed by " are the back end frameworks", and store this string as the second element in your new array.
  - Last! Iterate over this final array (containing the two concatenated strings) and use `reduce` to concatenate these into 1 string. Print this string to the console.
