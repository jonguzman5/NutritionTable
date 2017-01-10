![no more](http://i.giphy.com/BHi0PMWAdEili.gif)

# The (Single Source of) Truth Is Out There

Time to ~~re-do~~ redux our react todo app!

Redux allow us to manage state in one centralized object - a redux state container! Components can update the redux state and redux changes the state for whatever other components require it. It's a single source of truth for your state, or what we also call our store!

Let's be clear, redux can definitely be confusing to learn. That's normal. But, we believe in you X-files!!!!!!!!

Completion is a working finished React To-Do app managed with Redux. Gangsta.

### Understanding Redux

1. There is 1 global state object that manages the state for your entire application. In this example, it will behave identically to our initial component’s state. It is the single source of truth.
1. The only way to modify the state is through emitting an action, which is an object that describes what should change. Action Creators are the functions that are dispatched to emit a change – all they do is return an action.
1. When an action is dispatched, a Reducer is the function that actually changes the state appropriate to that action – or returns the existing state if the action is not applicable to that reducer.
1. Reducers are “pure functions”. They should not have any side-effects nor mutate the state — they must return a modified copy.
1. Individual reducers are combined into a single rootReducer to create the discrete properties of the state.
1. The Store is the thing that brings it all together: it represents the state by using the rootReducer, any middleware, and allows you to actually dispatch actions.
1. For using Redux in React, the <Provider /> component wraps the entire application and passes the storedown to all children.

### 1. Two - Do
Begin a new create-react-app or make a copy of your existing to-do from u4/d03.

make sure to `npm install --save redux react-redux`

Once your app is ready, the *ideal* file structure would look like this:

    src
        actions
        components
        containers
        reducers

You will need to adjust your `import` routes to match their new paths.

In `index.js` you will need to set up access to the Redux store by importing your reducers, Provider, creatStore, and applyMiddleware.

Create a `const` for your store that will invoke the applyMiddleware function and pass in the appropriate redux variable.

### 2. THINK BEFORE YOU CODE

3000 foot view: View calls an action then the store calls the reducers then the reducers update the store/state then the views update through props.(WHEW)

To review, that looks like this:

*view — -> action — -> reducer — -> store(state) — -> view*

Look at your todo app, think about what goes where. Review today's exercise, before you start coding, wrap your head around what needs to happen.

### DOCS

[React/Redux Docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md)
[Redux Docs](http://redux.js.org/)


Some Things to Consider:

* Container (class) components talk to our redux store and belong in the `container` directory
* Function components can view props and render container components. They belong in the `components` directory.
* State is read only. When you update the state, redux makes a copy and inserts the new object.
* Props are handed down from redux not the parent.
* The only way to change state is to emit an action, which is an object describing what happened.
* Think of the store as the current state
* Changes are made with pure functions, we access them through actions, and they access the reducers.
* One reducer for piece of state (one reducer for a list of items, one reducer for an individual item)
* Initiate the reducer by calling the Action creators are functions that create Actions and return and object that includes the `type`.
* Reducers pass the new state back to and update the store which then immediately is available to the components.
* `{ connect }` allows us to pass props to a component. We use it in our export.
* mapStateToProps(passInEntireReduxState) - returns the part of our redux store that we ask for in our map and return it to the component requesting it. It only has access to the part of the store we tell it, not the entire redux store. We pass this into our connect function
* mapDispatchToProps() - calls `bindActionCreators` takes the action creator, setting it equal to a prop on a component, so when we call it redux knows to fire off reducers. We pass this into our connect function. Remember, ALL reducers are notified when an action is dispatched, but only the one that matches the `type` responds.

-----

## How to Get Started

This project will start off different for everyone as it depends on your last todo app. However, here are some ideas:

#### Set Up Your Store

* `<Provider>` is a component the react-redux gives us that allows us to wrap our redux store around the rest of our react `<App />` in the ReactDOM render.
* Make sure you include the Provider, createStore, and apply MiddleWare. Create a `const` for your createStoreWithMiddleware that immediately invokes the applyMiddlewarefunction and passes `createsStore`
* The best place to visualize your store (a giant object of key/value pairs) is `reducers/index.js`. We can provide the value for our keys by importing specific files of data.

#### Set Up Your Reducers

Reducers are the part of redux that update the store.

Inside your reducer directory create an `index.js`. Import `combinedReducers` from redux. This allows us to combine all our reducers that are 'talking' to our store.

Go back to your `src/index.js` and import your `reducers` from the correct file path. Each part of state has it's own reducer in `src/index.js`.



#### Set Up Your Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Actions are plain JavaScript objects that must have a type property that indicates the type of action being performed. Types are typically be defined as string constants.
