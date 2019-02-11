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

- run JS in {}
- onChange runs every time there's a change in value
- e.target grabs target element

Single Page App (SPA)

- only one HTML page served to browser
- saves a trip back to server (IE, if someone visits a contact page, React intercepts the request and determines which component should be loaded for visitor)

Nesting Components

- Have one root component rendered to DOM
- Can nest other components within root component
    - IE, navbar component is nested within the root component
- Great for keeping code modular

Props

- Pass data from one component (parent) to child component
- this.props -- this referencing component .props to access the props object on the component