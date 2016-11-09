

![](https://i.imgflip.com/17ymwy.jpg)

# Parsing JSON

## Morning Exercise
Welcome to Unit 2!

Complete each step. We will go over this assignment at 10:00.

## Part 1

1. Spend 10 minutes reading this documentation on JSON.
 - [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

2. JSON is essentially a Javascript Object that contains an Array of Objects. It is one of the most common ways data is stored and retrieved using AJAX. Ex:

``` js
var data = {
  "users": [
      {
        "name": "bryan"
      },
      {
        "name": "john"
      }
  ] // ends users array
} // ends data Object
```
In the above example, `var data` is the JSON object. This object has one key-value pair: key - `"users"`, value - an array of objects.

Each object inside of the `users` array is an individual user, with its own property `"name"`,

We won't be doing any AJAX for right now, but since we know how to access items in both Arrays and Objects, let's practice parsing some JSON data.

The following JSON object has been provided to you in `script.js`:
``` js
var data =  {
  	"people": [
        {
    		"name": "Luke Skywalker",
    		"height": "172",
    		"mass": "77",
    		"hair_color": "blond",
    		"skin_color": "fair",
    		"eye_color": "blue",
    		"birth_year": "19BBY",
    		"gender": "male"
    	}, {
    		"name": "C-3PO",
    		"height": "167",
    		"mass": "75",
    		"hair_color": "n/a",
    		"skin_color": "gold",
    		"eye_color": "yellow",
    		"birth_year": "112BBY",
    		"gender": "n/a"
    	}, {
    		"name": "R2-D2",
    		"height": "96",
    		"mass": "32",
    		"hair_color": "n/a",
    		"skin_color": "white, blue",
    		"eye_color": "red",
    		"birth_year": "33BBY",
    		"gender": "n/a"
    	}, {
    		"name": "Darth Vader",
    		"height": "202",
    		"mass": "136",
    		"hair_color": "none",
    		"skin_color": "white",
    		"eye_color": "yellow",
    		"birth_year": "41.9BBY",
    		"gender": "male"
    	}, {
    		"name": "Leia Organa",
    		"height": "150",
    		"mass": "49",
    		"hair_color": "brown",
    		"skin_color": "light",
    		"eye_color": "brown",
    		"birth_year": "19BBY",
    		"gender": "female"
  	  }
    ] // ends people array
  } // ends data json object
```
Just like in the previous example, this JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

## Part 2
Inside of the `$(document).ready` function provided to you in `script.js`, complete the following problems:


3. Write a function that console.logs the data json object
``` js
var logData = function() {
}
```
4. Write a function that console.logs each character's name
``` js
var logNames = function() {
};
```
5. Write a function that console.logs each character's name and eye color
``` js
var logNameEyes = function() {
};
```
6. Write a function that console.logs each character's name whose mass is greater than 75
``` js
var logByMass = function() {
};
```
7. Grab each character's name and use jQuery to append a new p tag with the character's name inside the #characters div.
``` js
var appendCharacterNames = function() {
};
```
8. Grab each character's name whose mass is greater than 75, use jQuery to append a new p tag with their name inside the #characters div, and update the text of the #title h1 tag to be "Mass > 75"
``` js
var appendByMass = function() {
};
```
