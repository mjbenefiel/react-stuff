import React, { Component } from 'react';
import Ninjas from './ninjas';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p> Welcome </p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
