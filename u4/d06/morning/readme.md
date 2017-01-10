![](http://res.cloudinary.com/meshfields/image/upload/v1429393590/2012-09-18-coffeescript_ghgcdf.jpg)

# Morning Ex - CoffeeScript!

CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.

CoffeeScript's syntax is similar to Ruby, so many people use it on their Rails apps! It uses white spacing instead of curly braces, and arrow functions instead of traditional JS function syntax.

`HEADS UP!` - The white spacing syntax means your tabs and spaces must be perfect (2 spaces for each) or it will not run.

## Let's look at some examples:

Variable declaration:
```
# CoffeeScript
number = 42

// Javascript
var number = 42;
```

Functions:
```
# CoffeeScript
square = (x) -> x * x

// Javascript
var square = function(x) {
  return x * x;
};
```

Objects:
```
# CoffeeScript
xbox360 =
  color: "white"
  made_by: "Microsoft"
  fun: true

// Javascript
var xbox360 = {
  color: "white",
  madeBy: "Microsoft",
  fun: true
};
```

jQuery:
```
# CoffeeScript
$ ->
  console.log "coffeescript loaded"

// Javascript
$(document).ready(function() {
  console.log("Javascript loaded")
})

===================================

# CoffeeScript
$("#container").click ->
  $(this).css
    color: "red"

// Javascript
$("#container").click(function() {
  $(this).css("color", "red")
});

====================================

# CoffeeScript
$.ajax
   url: "google.com"
   success: (data) ->
     $('body').append "Successful AJAX call: #{data}"

// Javascript
$.ajax({
  url: "google.com",
  success: function(data){
    $('body').append("Successful AJAX call: " + data);
  }
});
```

## Assignment
cd into the `coffescript_rails` directory. Here you will find a Rails app already built out for you.

Run `bundle install` to make sure you have all the dependencies.

Write CoffeeScript logic (in `app/assets/javascripts/home.coffee`) to complete each problem.

Useful docs:
 - [jQuery & CoffeeScript](https://css-tricks.com/jquery-coffeescript/)
 - [Official](http://coffeescript.org/)

##### 1. Add a document ready function that prints "cofeescript loaded" in the Chrome console

##### 2. Write a click function on the #submit button. It should take whatever you type into the input box and print it in the Chrome console

##### 3. Comment out problem 2 and rewrite it so that the value of the input box is appended to the p tag. This function should reset the input box, and clear out anything that is in the p tag before appending to it.

##### 4. Comment out problem 3 and rewrite it so that the text appears after 2 seconds. This function should also change the text color of the button to blue

##### 5. Add a hover function over the h1 with the id of "heading". It should change the text to "OOOOH a Hover Function" on hover, and when you are no longer hovering it should say it's original text
