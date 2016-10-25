# Homework

## JavaScript Challenge!!

![Challenge Accepted](https://media.giphy.com/media/1zTqgW6bS2jWU/giphy.gif)

## Setup
For tonight's homework, enter your answers the provided `script.js`. To test your code, run `node script.js` in the terminal to see the output.

Completion for this assignment is up to the end of Part 2. Remember, More is better, healthy living is best.

## Part 1 - Objects
##### 1. Pangolins

Given the following object:

``` JavaScript
var detectives = {
  mulder: {
    name: "Fox Mulder",
    actor: "David Duchovny",
    school: "Oxford",
    degree: "Pscychology"
  },
  scully: {
    name: "Dana Scully",
    actor: "Gillian Anderson",
    school: "University of Maryland",
    degree: "Physics"
  }
};
```
 - Use dot notation to `console.log` Scully's full name.
 - Use a for..in loop to console.log each item in detectives.mulder
 - Use dot notation and string concatenation to `console.log` the following output:

`Fox Mulder and Dana Scully, played by David Duchovny and Gillian Anderson, are detectives in the X-Files `
<br><br>

##### 2. Reading List

 Keep track of which books you have read and which books you want to read

  - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Your reading list array should look something like:

``` JavaScript
var readingList = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    alreadyRead: true
  }
];
```
 - Use a `for` loop to iterate over the array, and dot notation to grab values from each object.
 - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

##### 3. Movie Database
Create an object to store the following information about your favorite movie: title (a string), director (a string), duration in minutes (a number), release year (a number), and stars (an array of strings).

Your movie object should look something like:

``` JavaScript
var alien = {
  title: "Alien",
  director: "Ridley Scott",
  duration: 117,
  releaseYear: 1979,
  stars: ["Tom Skerritt", "Sigourney Weaver", "Veronica Cartwright", "Harry Dean Stanton", "John Hurt", "Ian Holm", "Yaphet Kotto"]
}
```
 - Create a function to print out the movie information like so: `Alien, directed by Ridley Scott and released in 1979, lasts for 117 minutes. Stars: Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, Yaphet Kotto,`
 - Your function should take in the movie object as an argument
 - Try creating a string using dot notation and string concatenation for the title, director, duration, and release year. Then iterate over the stars array using a `for` loop to add each star to your string followed by a comma.
 - Look over the work from this morning's exercise if you have trouble creating this function


## Part Two - JS Events

### Setup
Comment out your answers from part 1 in the script.js file. For part two we will be working in the browser, so load the `index.html` file in Chrome and open up the Dev Tools!

JS Events allow us to run code once certain events have taken place such as page load, clicks, and hovers.

##### 4. getElementById
Javascript allows us to grab html elements by their `id` so we can have access to them in our `script.js` file.
The [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) function will find html elements with the `id` we pass in. Example:

``` javaScript
var title = document.getElementById("title");
console.log(title);
  => <h1 id="title">D07 Homework</h1>
```

 - Add a variable called `subtitle` and set it equal to the html element with the id of "subtitle".
 - Use the above example to grab this element using `document.getElementById`.
 - Add `console.log(subtitle)` and reload the page. You should see something like:
``` JavaScript
<p id="subtitle">The homework tonight covered Objects and Javascript Events</p>
```

### Event - onclick
Another Javascript event we can use in the browser is the click method. It will run a function when a particular html element is clicked by the user.

##### 6. onclick
 - Set a variable with the name "clickListItem" equal to `document.getElementById()` and pass in the `id` of "clickListItem"
 - Then set `clickListItem.onclick` equal to a function that `console.logs` "You have clicked the li with the text 'Click Me'"

Example:
``` JavaScript
var title = document.getElementById("title");
title.onclick = function() {
  console.log("You have clicked the <h1> tag with the text 'D07 Homework'");
}
```
Reload the page and click the li that says 'Click Me'. You should see `You have clicked the li with the text 'Click Me'` in your browser's console.

<br><br>

### Bonus
#### For...In Loops
Checkout the documentation on looping over objects - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

1. Re-create your About Me object from this morning without any of the methods or arrays we added to it. You should just have `firstName`, `lastName`, and `age` in your object.

1. Now add `hometown` and `favoriteAnimal` to your About Me object

1. Use a `for in` loop inside of a new method called `printData` on your object. This method should print a single string with all of the data from your object.
 - Don't forget to use the `this` keyword to access data from inside the object!

 - Use an `if else` conditional and the `typeof` function to check if the data type is a function. Don't include functions that belong to your object in the string!

Running `yourObject.printData()` should output something like this:

``` JavaScript

firstName: Jared, lastName: Murphy, age: 26, hometown: Boston, favoriteAnimal: pangolins

```

#### Event - mouseover
Checkout the documentation on Javascript's `mouseover` event handler - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover)

Javascript's `mouseover` event allows us to run functions only when the user hovers over a particular html element.

Example:
``` Javascript
var footer = document.getElementById("footer");
footer.mouseover = function() {
  console.log("You have just hovered over the footer!")
}
```

1.
 - Set a variable with the name hoverListItem equal to `document.getElementById()` and pass in an `id` of "hoverListItem"
 - Use the above example to set ListItem.mouseover equal to a function that uses a `console.log` to tell the user "You have hovered over the li with the text 'Hover Over Me'"
 - Reload the page and try it out! Are you seeing the console display the correct message?


#### Event - Adding Elements!
Checkout the documentation for Javascript's [`document.createElement()` function](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

`document.createElement()` allows us to generate html elements using javascript. Example:
``` javascript
// 1
var message = document.createElement("h3");
// 2
message.setAttribute('id', 'message');
// 3
message.innerHTML = "This element has been added to the DOM"
// 4
document.getElementById('container').appendChild(message);
```
Let's go over this step by step.
1) var message is equal to a new h3 element
2) we add the id of 'message' to our message variable
3) we add the the following text to our message element: 'This element has been added to the DOM'
4) we add the new message element to the div with the id 'container'

 1. Use the above example to add a message, "A message has been clicked" that appears on the screen when you click the "Click Me" element.

# Super Bonus Bros

If you have extra time, mess around a little bit with the following JS events.

 - ondblclick (double click)
 - onload (when the documentation loads)
 - onscroll (on document being scrolled)

Try to incorporate these events into the web page for tonight's homework. Feel free to explore even more events, the time you spend here is up to you!

## Resources
[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

[For In Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

[Mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover)

[document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

[ondblclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick)

[onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

[onscroll](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll)
