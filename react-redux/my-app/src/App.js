import React, { Component } from "react";
import Ninjas from "./ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 29, belt: "blue", id: 2 },
      { name: "Wren", age: 24, belt: "pink", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p> Welcome </p>
        <Ninjas ninjas= {this.state.ninjas} />
      </div>
    );
  }
}

export default App;
