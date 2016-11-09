# Star Wars 3: The Search For Wedge

![Imgur](http://i.imgur.com/yQcTGh7.jpg)

Everyone's favorite Sci-fi hero, Wedge Antilles, has gone missing!
Let's use the Star Wars API to find him.

The main url for this API is `http://swapi.co/api`

Wedge's last known whereabouts were in the first Star Wars film. Let's start by looking there.

## Part I

1. Use the starter code provided to find data about the first Star Wars movie using jQuery's AJAX methods. The API request looks something like:

    http://swapi.co/api/films/1/

  We should probably dump this information out in the console to help us with the next part.

1. While hanging around Quark's Bar, Grill, Gaming House and Holosuite Arcade, we hear some information that Wedge was last seen piloting an X-Wing. Let's take the result data from the previous request and find the URL for the X-Wing star ship. Rumor has it that it's the 6th item in that array.

1. Okay, now that we've got some information about the X-wing, let's use the pilot data to make _another_ request, this time to get information about the pilots until we find Wedge.

1. Now that we've found Wedge, let's dump his data into the DOM to be able to read it easier. Let's stringify the data and put it in a container, like so:

    var container = $('#titles #titlecontent p');
    container.text(JSON.stringify(data));

## Part II

1. This code is looking pretty gnarly. All these nested callbacks, which seemingly can go on forever, are what is refered to as 'Callback Hell'. Let's refactor our code using Javascript Promises to make things a bit cleaner!
