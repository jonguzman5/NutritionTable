![Power Rangers](http://i.giphy.com/t6f2bNAjx7Bio.gif)
# React!

Welcome to the far out world of React! It's the 'it' thing, and what better to *morph* into the future than to build out a Power Ranger App! Why Power Rangers? Why not?

#### Assignment

Make a page for your favorite Power Ranger. Don't have one? No dangers, you can make a page for Jared's favorite, the Red one. Use as much ES6 as you can to write your code.

**Completion is THROUGH part 3**
Bonus is Bonus! Get good! Try to do part 4 and the bonus! Being comfortable with React is a major resume bump, and this is a safe place to practice. But also, get sleep, and don't freak out.

![Power Rangers Rough](http://i.giphy.com/YpmVBNubONoqs.gif)
****

### Part 1: Create React App
Facebook released a helper tool to make starting a React app easier. Using the cool [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) command, create your new App inside your HW folder, giving it the name `power-rangers-react`. Once it has compiled successfully - `cd` into your app and run `npm start`. If you need to reference the docs, check out the [github page](https://github.com/facebookincubator/create-react-app).

### Part 2: Component-ize
Inside of the `src` directory create a `components` directory. Your app should have at least five components. Three of them should be the 'name', 'image', and 'about' paragraph for your Ranger. Come up with 2 more on your own. Components should be appropriately named and be placed in the `components` folder. Make sure to `import` your components from `correct file path/file`. 

Think about your component architecture - it may be helpful to draw out your UI to visualize your data flow. What components need to be class components? Which are functional components? Do we need to pass props?

Remember, state belongs to a component, and it needs a constructor. Properties are passed down. When one component tells another what to do, we often turn to props.

### Part 3: Activate
This App is boring. Let's make it more realistic, and interesting, by adding functionality. List at least 3 more other Power Rangers, but you are encouraged to make them all (reps are the secret to learning!). When a user clicks on one from the list, it should change the page to display the information of the chosen Ranger. Here you want to use an onClick handler that has a callback function to trigger the change. No need for React Router, think about what state might be...

### Part 4: Stylize
Make your app look less ugly. The goal is to make all the text, headings, and background of your page different hues of the color of the Power Ranger selected (example: if the Ranger is Green, have your text, heading, and background various shades of Green). You can do this by writing css in the index.css file, using inline styling, or by creating component specific css files for each component. Use convention naming these css files the same as their componenet and capitialize the first letter. How do we include these files? Where do we import them? (hint, hint...see App.js & App.css). Once again import from the correct file path!

## BONUS

~~Fat~~ Phat Arrow Functions? Here's an interesting post about their limitations (10 minute read). [Check It Out](https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/).
Play around with ES6 while watching your favorite TV show- [try out the Sandbox](http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/)
