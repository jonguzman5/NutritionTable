# Morning Exercise - Objects!

![Javascript the Good Parts](http://www.laurencegellert.com/content/uploads/2012/03/goodparts1.jpg)

## Setup
For this morning's exercises, work out your code in the Chrome console and save your answers in the provided `script.js`.

You will be creating an `About Me` object that holds some data about you! Feel free to work with each other on this assignment.

### Quick Review
``` javascript
// anyonmous function
var example = function() {
  return "An anyonmous function";
}

// named function
function anotherExample() {
  return "This is a named function ";
}

// object literal
var ron = {
  fullName: "Ron Weasely",
};

// key-value pairs
ron.fullName = "Ron Weasely";
//ron = object, fullName = key, "Ron Weasley" = value

// dot notation
ron.school = "Hogwarts";

// bracket notation
ron["house"] = "Gryffindor";

// object methods
ron.greeting = function() {
  alert("Hi, I am " + this.fullName);
}

ron.greeting();
  => "Hi, I am Ron Weasely";
```

### Resources
[Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

[Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_methods)

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### About Me Object

1. Create an empty object literal
 - Example:

  ``` javascript
  var harry = {};

  ```

1. Use dot notation to add the following information to your object:
  - firstName (string)
  - lastName (string)
  - age (integer)
  - Example:

1. Add another key value pair to your object, where the key is `hobbies` and the value is an array of strings.

1. Write a function that will print your first and last name to the console. This function should accept your object as an argument.

1. Now use dot notation to make that function into a method that belongs to your About Me object with the key `printName`. Don't forget to use the `this` keyword to access information inside of the object!
Example:

  ``` javascript
  harry.age = 11;

  harry.sayAge = function() {
    console.log(this.age);
  }

  harry.sayAge()
    => 11
  ```

1. Add another method to your object that prints a single string (including your first name, last name, and all of your hobbies) to the console.
 - iterate through the hobbies array with a `for` loop and add a comma after each hobby in the string

Your output should look like:
``` javascript
harry.printData();
  => "Hi, I'm Harry Potter are my hobbies include Quidditch, collecting Chocolate Frogs cards, generally causing mischief,"
```


## Bonus
 Create a new method on your object called `updateData` that:
 - Uses a prompt to ask the user which item they would like to change
 - Uses a prompt to ask the user what they would like to change it to
 - Alerts the new data to the user


 The user flow should look like:   

 > Which data set would you like to update?

 > firstName

 > What would you like to change it to?

 > Lilly

 > Okay we will change firstName from Harry
  to Lilly

 > The value of firstName is now Lilly
