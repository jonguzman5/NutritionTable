# Morning Exercise - Ajax
![iTunes Ajax](itunes_ajax.gif)

## Introduction
This morning we are going to warm up with some ajax calls using the [iTunes API](http://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html#searchexamples).

## Setup
We have provided you with the completed HTML and CSS, and a partially filled in JS file called `script.js`. You will doing *ALL* of your work in the `script.js` file. You will need to add jQuery to your directory and link it to your html file.

## Assignment
The skeleton of the application has been built for you with the HTML and CSS files, so your only concern is how to take a search query text from the input box and then run that through ajax to hit the iTunes API.

### What you will need to do:
1. Create a click handler that takes a click event for the `button` and then fires a function called `getResults`.
1. Create a function called `getResults` that does the following:
  - First, clears the DOM of any elements of the class `item`
  - Take the text value of the input box and store it in a variable called `query`
  - Create an AJAX call that has the following fields
    * type: 'GET'
    * url: 'https://itunes.apple.com/search'
    * dataType: 'jsonp'
    * data : { term: query, media: "music", entity: "album", limit: 25}
    * success: This is the function that is called when the AJAX call returns after a successful API call.

#### Success Function
Use the following structure for your success function:

```javascript
function(data) {
  result = data.results;
  $results = $('<ul>');
  var $item, $thumbnail, $description, $artist, $album, $price;
  // Use a forEach method to iterate over all of the result items and then do
  // the following in the for loop:
  //   - USING JQUERY, create a 'li' element and store it in '$item',
  //   create a '<img>' element and store it in '$thumbnail', create
  //   a '<div>' element and store it in $decription, and create '<p>'
  //   elements and store them in $artist, $album, $price
  //   - Add a class of 'item' to '$item'
  //   - Add a class of 'albumCover' to '$thumbnail'
  //   - Add a calss of 'artist' to '$artist'
  //   - Add a class of 'album' to '$album'
  //   - Add a class of 'price' to '$price'
  //   - Find where the thumbnail image is being stored in the result
  //   object and then set the '$thumbnail's src attribute to it
  //   - Find where the artist's name is being stored in the object
  //   and set artist text to that, do the same for the album and price
  //   - Append $artist, $album, $price to $description
  //   - Append $thumbmail and $desciption to $item
  //   - Append $item to $results
  //  - End forEach method
  //  - Append $results to $body
}
```
