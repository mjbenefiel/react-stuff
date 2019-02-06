"use strict";

console.log("app.js is running");

// JSX - JavaScript XML - JS syntax extension

var template = React.createElement(
  "p",
  null,
  "Does thic change?"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
