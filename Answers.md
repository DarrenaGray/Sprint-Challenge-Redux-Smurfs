1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Map, filter, and concat methods do not produce side-effects.  Object.assign is used to create a new object while extending the properties of another object

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is where the state is held. Actions are plain objects that usually have a type property and along with other properties, such as payload. Reducers take the original state and produces a copy of the state with the called action creator applied 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable and Component state is mutable copy of the application state.  Component state is good to use whenever a change needs to be made to the state without altering Application state. Component state can be changed using action creators and reducers

4.  What is middleware?

    Middleware provides a bridge between processes and the data flow within an application. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk makes data flow asynchronous when action creators are dispatched to the reducer. It is usually used as a way to log action dispatches and debug any issues that may arise.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    Connect method links the components to redux store
