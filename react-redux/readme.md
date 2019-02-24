React-Redux

Components

- JSX
- contain 'state' (data or UI state)
- JS for functionality
- this refers to the component
- don't invoke handlers using () because it'll fire on page load

- return one root element

Component state

- state of the data or UI of a component
- keeps state and output of screen in sync
- is a JS object that's going to contain data or UI state
- Bind context of this keyword in functions (DOM events)
    - using => removes need to manually bind this keyword
- setState inside function can change state of component
- don't alter state outside of setState (IE, using push method)

Single Page App (SPA)

- only one HTML page served to browser
- saves a trip back to server (IE, if someone visits a contact page, React intercepts the request and determines which component should be loaded for visitor)

Nesting Components

- Have one root component rendered to DOM
- Can nest other components within root component
    - IE, navbar component is nested within the root component
- Great for keeping code modular

 Higher Order Component

 - Something that wraps another component and gives it extra features
 - 

Props

- Pass data from one component (parent) to child component
- this.props -- this referencing component .props to access the props object on the component

Misc

- run JS in {}
- onChange runs every time there's a change in value
- e.target grabs target element
- error will throw if classes aren't using PascalCase
- can pass down functions into components as props
- wrapping event within anonymous function will prevent the event from automatically firing everytime there is a page load
- A promise means "this action will complete at some point in time"
    - .then() method fires once this action has completed


Container Components

- contain state
- contain lifecycle hooks
- not concerned with UI
- use classes to create
- automatically get props

UI Components

- don't contain state
- receive data from props
- only concerned with UI
- use functions to create (stateless components)
- props won't be automatically passed to it like with a class based component
    - take props in as a parameter
    - remove "this" -- not referring to instance of class, but to parameter
- use when not worried about state, but focused primarily on UI

Using CSS in React

- creating new css file for each file
- index.css to apply to all files
- css modules

Lifecycle Methods

- Every component goes through a lifecycle
    - mounting
        - component first created and mounts the DOM
            - constructor 
            - getDerivedStateFromProps
                - triggers on first render
        - render to DOM (required)
        - componentDidMount()
            - fires once component first mounts to DOM (great to get data from database)

    - updating
        - getDerivedStateFromProps
        - shouldComponentUpdate
            - compre new props with old props
        - render
        - getSnapshotBeforeUpdate
            - passed to final update hook
        - componentDidUpdate
            - called after template is rendered to DOM
            - fires once there's a change in state or props

    - unmounting
        - componentWillUnmount

    Render, componentDidMount to get data, rarely use getDerivedStateFromProps

React Router

- Request to 'about page' from navbar doesn't go to server. It goes to React router and injects the page into app.js

- Stops requests from going to server. Only injects the component it needs to. 

- <Route exact path="/" component={Home} /> matches exact path

Link, NavLink

- Link prevents default action from happening when clicking on anchor tag
    - Will not make request server
    - React-router-dom will take over and return requested component
    - NavLink adds class of active
        - Useful if you want to start applying different styles to links

Axios

- HTTP request library

Route Parameters

- Part of a URL that can change
- Usually see them on URLs for individual records
    - User Profile routes, for example

Switch Tag <Switch>

- Renders a route exclusively