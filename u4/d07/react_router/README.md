# React-Router Lab
![](https://brinidesigner.com/wp-content/uploads/2016/03/react-router.png)

React-Router is a routing library for React. It is easy to use, and gives the user a smoother experience than traditional server-side routing. This Single Page Application, or SPA, functionality means that users can travel across an app without experiencing a page reload. With React-Router we are even able to use the 'back' buttons as well as see changes in the url, which is a far better experience than similar SPA functionality from jQuery or other traditional Javascript libraries. 

<br />
##### Index.js
Go ahead and run `npm install --save react-router` in the directory of today's lab. We can set up React-Router in the `src/index.js` file. We will need to import broswerHistory and Router from the react-router library. 

We will take the Router component from react-router and use it to render our React app. 
<br/>

![Imgur](http://i.imgur.com/Rd0tK1V.png)

<br/>
##### Routes.js
Your `routes.js` file is where we actually set up routes for our app. The way react-router works is basically by rendering a components based on the route. If we to go "/home", then render the home component. If we go to "/users/23", then render the user component for the user with an id of 23... You get the idea. 

In our routes.js file, let's import react, Route and Index Route from react-router and our App component. We will set up our routes to render the App component whenever someone goes to "/".

![Imgur](http://i.imgur.com/VQv6FdC.png)

##### App.js
Let's rake a look at our App.js file. It should be rendering the page correctly in the browser, but we need to be able to nest other routes inside of this component. React Router lets us do this. Take a look at the routes.js file above. Notice how the Route component has opening and closing tags? We are able to nest routes, which allows us to do things like layouts on each page. In order to make sure all of the other routes are rendering inside of the App.js component correctly, let's make a call to add in the children components from the router. 

![Imgur](http://i.imgur.com/qAlw6Bm.png)

##### React Router & props
Once we start using react router, we are able to get information regarding the route via props that are passed down to every component. In this case, we are able to nest child routes inside of the App component, which means our NavBar will be displayed in the browser for every route we hit. 

##### Nesting Routes
Let's hop back over to our routes.js file so we can start nesting some routes. Notice the 'IndexRoute' component we imported earlier, but didn't use yet. This allows us to render a component that is still a child of the App.js component, but will render on the "/" route. The ButlerShow component should rener on the route "/butlers/:butlerName". 

![Imgur](http://i.imgur.com/kh5Fme6.png)

##### Dynamic Routes
Let's take a look at that last route - the /bulters route. Notice the `:` before butlerName? Does it look familiar? It should! React Router gives us params like we saw in Rails and Express routing. So, we can pass in an id, or a name, and we are able to render the same template with different information!

##### More on React Router and props
Let's checkout the `ButlerShow.js` file. Notice the const currentButler? It's equal to `this.props.params.butlerName`... just like our route is set up as "/butlers/:butlerName". So, we can grab those params with the props in our component and use that param to access a SPECIFIC butler from the list. Pretty neat, right?

##### Link component
React-Router gives us a component to handle routing to another location. Rather than using an `a` tag, we use the <Link> Tag. The Link tag tells react router that we want to move around our app using react-router and not by actually going to a new url address. The result is the ability to have clickable links in a react app without experiencing a page reload : )

Take a look at the NavBar component to see Link in action. 

# Assignment
### Part 1
If you have not updated your code to the specs outlined above, please do so now. You should have working pages and routes for "/" and "/butlers/:butlerName". Take a minute to try out these routes and components to see how they work. Some questions you should be able to answer:
* How does react know which component to render on different routes?
* Why is the menu static on each route?
* In the ButlerShow component, how is it able to grab the correct butler from the list?
* What is the Link component and how does it work?

### Part 2 
It's time to add some more routes and components! This time you are on your own though. Use the previous examples as a starting point. Your app should:

* render an About component on the route "/about". This component is already set up for you, you just need to add it to the list of routes for react router. 

* render a Gallery component on the route "/gallery". This component should render a list of images relevant to the master's art and personal life. Take this data from gallery.js 

* render a RoomShow component similar to the ButlerShow component. It should take its data from the rooms.js file and choose the room based on the route. This component should also have a Link to the next room so the user can experience the whole tour. 

* Your app should have MOSTLY stateless functional components. 

* Your app should be styled nicely (try doing some inline JSON styling?)

# Bonus
If you finish early, try doing some research into what React-Router is doing. Take a closer look at how it affects props, what Link does, how it updates the url in the browser, and how broswer history works to give us that back button functionality. 
