"use strict";

console.log("app.js is running");

// JSX - JavaScript XML - JS syntax extension

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
