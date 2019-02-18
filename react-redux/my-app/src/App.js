import React, { Component } from "react";
import Ninjas from "./ninjas";
import AddNinja from "./addNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 29, belt: "blue", id: 2 },
      { name: "Wren", age: 24, belt: "pink", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

deleteNinja = (id) => {
  // console.log(id)
  let ninjas = this.state.ninjas.filter(ninja => {
    return ninja.id !== id
  })
  this.setState({
    ninjas: ninjas
  })
}

componentDidMount() {
  console.log('component mounted')
}

componentDidUpdate(prevProps, prevState){
  console.log('component updated');
  console.log(prevProps, prevState);
}

  render() {
    return (
      <div className="App">
        <h1>Test React App</h1>
        <p> Welcome </p>
        <Ninjas deleteNinja ={this.deleteNinja} ninjas= {this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
