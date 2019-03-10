
import React from "react";
import ReactDOM from "react-dom";

var customElement = React.createElement("h1", null, "Hello React")
var anotherCustomElement = <h1>
    Hello World
</h1>;

ReactDOM.render(anotherCustomElement, document.getElementById("app"))




/*import "./styles/styles.scss";

// import { add, subtract, multiply, divide } from "./script.js"
import * as functions from "./script.js";
import printName from "./script.js"

console.log(functions.add(5, 25))

console.log(functions.divide(35, 25))
printName("mike")

const arrowFunction = (name) => name;
console.log(arrowFunction("Hey"));

const user = {
    id: 1,
    name: "Mike"
}

const advancedUser = {
    ...user,
    age: 34
};
console.log(advancedUser); */