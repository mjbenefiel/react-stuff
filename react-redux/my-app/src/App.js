import React, { Component } from 'react';
import Ninjas from './ninjas';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p> Welcome </p>
        <Ninjas name="Ryu" age="25" belt="black" />
        <Ninjas name="Yoshi" age="26" belt="blue" />
      </div>
    );
  }
}

export default App;
