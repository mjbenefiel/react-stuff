
mike = 1;
console.log(mike)

console.log(null == undefined)

console.log (1 == '10')

console.log(undefined)
console.log(null)

const moo = () => {
    var foo = 'woo';
    console.log(foo)
}
moo()

hoisted() // output: "Hoisted"
function hoisted() {
  console.log('Hoisted')
}

foo()
function foo() {
    var a = 1
    console.log(a);
    // a = 1
}

// can utilize an IIFE or change var to let to change 
// the scope and return 0, 1, 2 as expected

var foo = [];
for (var i = 0; i < 10; i++) {
    foo[i] = function() { return i };
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

(function(){
  var a = 3;
  
})();
console.log("a defined? " + (typeof a !== 'undefined'));

var a = function() {
    console.log(this);
}.bind(1)

var mike = {
    key: a
}

mike.key()

"use strict";
var a = function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Asim");
a("Hussain");


function Person (first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function() {
        return this.first_name + '' + this.last_name;
    }
}

var theDude = new Person("Mike", "Benefiel")
console.log(theDude.full_name())

// variable is a container for storing data values
//var

// identifer
// a;

// variable declaration
// var a;

// initializor / operator
// =

// data type / value
// "Hello", 0, true

