# Homework
![](https://www.npmjs.com/static/images/npm-logo.svg)

## Node & NPM!
For tonight's homework you will be building a Node server, and utilizing some NPM packages!

#### Setup
All of your work will go inside the provided `homework` directory.

1. Run `npm init` to begin your node project
1. Add a start script to your `package.json` file (Look to today's lesson if you do not remember how to do this).
1. Create a new file called `app.js`
1. Create a new directory called `public`, which houses an `index.html` and `style.css`.
 - `MAKE SURE` your package.json file's `main` file is paired with app.js.

Your directory tree should look like:
```
- homework/
    - app.js
    - public/
        - index.html
        - style.css
```

#### Assignment
Completion is through part 1. As always - more is better, healthy living is best.

# Part 1
Using today's code along as a guide, let's create a server that renders the `index.html` file to the browser. Run a `git add` and `git commit` after each step of the assignment.

1. Fill your `index.html` file with a simple web page about your dream vacation destination.
1. In your app.js file, be sure to `require` the `html` and `fs` Node modules.
1. Create a variable, `port`, that is equal to `8080`. We will have our app return requests from localhost:8080.
1. Write a function, `getHTML`, that finds our `index.html` file and responds to the client's request with it.
1. Write a function, `getCSS`, that finds our `style.css` file and responds to the client's request with it.
1. Write and invoke the `html` Module's `createServer` and `listen` methods to receive a response on `localhost:8080` and respond with the proper html or css document.

# Part 2
Let's do some more cool stuff

1. Let's add the NPM package [nodemon](http://nodemon.io/). This package gives us the power of `hot reloading`. It's pretty neat - when we use `nodemon` we don't have to kill and restart the server every time we make a change in our code. It handles that for us!
  - run `npm install --save nodemon`
  - let's go ahead and change our start script. You should have something like `"start": "node app.js"` in your package.json scripts object. To use nodemon lets change this slightly to `"start": "nodemon app.js"`
1. Let's add some front end JS!
  - Similarly to how you get `app.js` to find `style.css` when it needs to, let's have another function for when we need our js file.
  - Create a `script.js` file, link it AND a jQuery [CDN](https://code.jquery.com/) to your `index.html`.
  - Add some JS functionality to your page. Add event listeners and an action for at least 1 hover and 1 click event.
1. Watch [this video](https://www.youtube.com/watch?v=ztspvPYybIY). It's the very first presentation on Node.js, by Ryan Dahl himself!
