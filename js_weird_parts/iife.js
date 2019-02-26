// function statement
function greet(name) {
  console.log("Hello " + name);
}
greet("mike1");

// function expression
var greetFunc = function(name) {
  console.log("Hello " + name);
};
greetFunc("mike");

// IIFE
var greeting = (function(name) {
  console.log("Hello " + name);
})("Mike the IIFE");

// valid JS expressions
3;

{
  name: "John";
}

// wrap function in parentheses when you want parses to interpret that you want a function expression ( is an operator
var firstname = 'Mike the invoked';
(function(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}(firstname));
// can invoke inside or outside the parentheses ()
