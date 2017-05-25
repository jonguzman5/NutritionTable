<!-- # ![alt-tag](http://i.giphy.com/l44QqQluGMRdAAok8.gif) initial release version -->
# ![alt-tag](./NutritionTable.gif) 
# Nutrition Table


### User Stories

This is a web application that aims to help the public in improving dietary
habits. The tool that tells you how many calories are in that burger you're 
eating is now in the palm of your hands.

### Minimum Viable Product

* A connection to a Third Party API will be established through the use of AJAX
* An express server will be set up to store local data as well as API data
* Users will be given the option to create an account with exclusive features
* User data will be encrypted via the use of BCrypt
* The user will be able to search for any kind of food and receive an output that displays the calories of that item


### Approach Taken

* Created a navigation bar that prompts the user with "log in" and "sign up" options
* Incorporated forms for the "log in" and "sign up" features
* Implemented a "search bar" that allows the user to search for foods
* Created a Dashboard page that allows logged-in users to store specific data


### Technologies used

* **NodeJS** The JavaScript runtime enviornment in which this application was built upon
* **jQuery** To append data to the DOM
* **PostgreSQL** Database used to store local and third party api data
* **Express-Session** Following text
* **PG-Promise** to interact with PSQL data
* **Mustache-Express** To render session content
* **Node-fetch** To set up routes, thus allowing the user to navigate to other pages throughout the site


### Installation Instructions
* Installation not required as this website is hosted on Heroku with all the dependencies included.

### Unsolved Problems
* Search bar presents an issue that would save all the outputted data to dashboard
* Styling alongside more data parsing is required to give the appearance of an actual nutrition table
* Deployed version of the site seems to have issues loading certain pages at times

---

### Link to Deployed Site

* **[Nutrition Table](https://nutritiontable.herokuapp.com/)** 

---

