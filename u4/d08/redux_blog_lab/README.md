# React Blog Review Lab

This lab is designed to review putting all of the React pieces together. We will be working with:
* React.js
* Redux
* React-Router
* AND A COUPLE NEW THINGS
* Axios (for fetching data from an API)
* Redux-Promise (to handle waiting for the request data)

### Our App

The app we will building will essentially be a standard blog. We will get and post blog posts from an API and keep that information in the Redux store. 

Our Redux store will have two key-value pairs: posts (an array of posts) and activePost (a single post object). Let's imagine the store looks like this JSON object: 
``` javascrit
reduxState = {

  posts: [
    {
      id: 1, 
      title: "Tims Gardner: A Journey Through Space and Time - Day 1",
      category: 'ponderings, other Timsy things'
     },
    {
      id: 2,
      title: "What even is a jQuery?",
      categories: 'programming'
    }
  ],

  activePost: {
    id: 1, 
    title: "Tims Gardner: A Journey Through Space and Time - Day 1",
    category: 'ponderings, other Timsy things',
    content: "Space and Time are meaningless without functional programming. For, it is in FUNCTIONAL programming that life can perceive itself as existing in the non-existent space-time framework to begin with! I should write a book"
  }
}
```
### Redux Review

Let's look at Redux again from a high-level overview. 

![Imgur](http://i.imgur.com/kPMOc6U.png)

Redux gives us a single place to keep the state for all of our React components. 

* We can use **connect** and **mapStateToProps** to give a React component access to READ from the Redux Store. 
* We can also use **connect** and **mapDispatchToProps** to give a component the ability to call a Redux Action Creator and update the Store.
![Imgur](http://i.imgur.com/9jtto9d.png)

Let's look at what happens when we call an Action Creator:
1. A React component will call a Redux Action Creator (a function that returns an action)
2. Redux will notify every Reducer that an Action Creator has been called. 
3. The Reducer that matches the Action's type will update the store
<br/>
<br/>


![](http://i.imgur.com/i9I4oVn.png)

### Assignment
For this lab, we will be utilizing an external API at [https://reduxblog.herokuapp.com/](https://reduxblog.herokuapp.com/). There is some brief documentation, but the rules are pretty simple. Let's take a look.

We will be hitting routes for getting all posts, getting a single post, and creating a new post. 

Our component architecture is going to have:
* App - main react component - root for react router
* PostsIndex - shows all of the posts - index component for react router
* PostsShow - shows an individual post - "/posts/:id" for react router
* PostsNew - form for creating new post - "/posts/new" for react router

We will need three Action Creators:
* fetchPosts - called by PostsIndex - updates store.posts in Redux
* fetchPost - called by PostsShow - updates store.activePost in Redux 
* createPost - called by PostsNew - creates a new post in the API and reroutes to the post/:id page for that item 

Each Action Creator will be utilzing Axios, which is kinda like jQuery AJAX except it's promise based. 

Let's start by setting up our index.js file.


