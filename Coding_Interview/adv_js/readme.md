Adv JS Prep

- Global object in node is 'global'

- Use Strict Mode
    - Makes debugging easier
    - Allows you to place program/function in a strict context
    - Enable it by typing "use strict" in JS file
        - When feature was first implemented, only new browsers could handle it.
        - Can locally scope "use strict" within a function
        - Example use case is variable declarations
        - Prevents you from using reserved words
        - Makes eval function safer to use
            - eval function evaluates or executes an argument

- Does JS pass variables by reference or value
    - Passing primitives are passed by value
        - If you change the value of a primitive type inside a function, the changes wont affect the variable in the outer scope
        - Passing a copy of the value
    - Objects are passed by reference
        - You're passing something that points to something else, as opposed to a copy of the object
        - Can't change what it points to, but can change a property of the object

- Different Types in JS
    - Primitives
        - Boolean, number, string, null, undefined
            - undefined used for uninitialized variables (ie, var a;)missing params to functions or unknown property of an object
            - null used to indicated no value (set by a programmer)
                - null is an actual value
                - undefined is an actual value
    - Non-Primitive
        - Object

    - typeof() will log value type
    - typeof(null) will log as object

    - Difference between dynamically typed / static typed language
        - in Static Typed language like Java, we'd define string something like "String a = 'moo'" -- it can hold strings and only strings
        - In JS, type of variable is determined dynamically at runtime (can hold string, number, etc., at any point in time)

- Difference between == and ===
    - loose equality vs strict equality
    - === checks for type and value equality
    - == checks for values of operators on left and right
        - == will utilize type coercion for (0 == '0')

- What is the typeof NaN?
    - NaN is unequal to itself
    - NaN equal to anything is always false, even when compared to itself
    - "abc"/4 would results in NaN
    - NaN == NaN is false
    - if "var a" is anything other than NaN a !== a false

- What are the different scopes in JS?
    - Scope
        - The lifetime of a variable. ie, where that variable is visible and available for you to use in your code
            - Global scope
            - Local scope
            - Block scope

- What is variable hoisting?
    - Automatic hoisting of var declaration to the top of its enclosing scope
    - declarations (var and function) are put in memory at compile time

- What is the scope chain?
    - Scope chain is defined lexically, ie, defined in the order in which the code is written in the file
    - variables are resolved in which the code is written on the page

- What is an IIFE and why might you use it?
    - Immediately invoked function expression
    - Use it to avoid polluting global namespace

- What are function closures?
    - When a function returns a function, the function that is returned keeps a reference of any variables it needs to execute
    - Closures can refer to variables in outer scopes
    - It can refer to those outer variables, even after the outer function has returned
    - with for loop: When the closure is created, it doesn't get a copy of i. Closure points to actual/current value of i in the original scope.

- "this" keyword
    - can point to global object
    - can point to object owner
    - "this" is determined by the calling context. 

- call, bind and apply functions
    - Different ways of locking down and stabilizing what the "this" keyword means when executing different functions
    - .call() calls the function and sets to where "this" points
    - .apply() calls the function and sets to where "this points to, but passes in array of arguments

- What is the prototype chain?
    - Every object in JS has a prototype.
    - When looking for a prop on an obj, JS will try to find the prop on an obj, and then on the obj proto, and so forth.
    - Works like single parent inheritance class-based languages
    - Updating a prop that previously existed on proto of object, adds it to the object and not to the proto of the obj
    - Object.create() will create a new object and assign the proto that you pass in 

- What is the difference between classical and prototypal inheritance in JS?
    - Classical Inheritance
        - Talking about the methods of OOP like Java and C++
            - Class is a blueprint
                - Create an instance of that class
            - Class is the architectural diagram
            - Instance is the house made to the specifications of that architectural diagram
                - You can live in a house, not a diagram
    - Prototypal Inheritance
        - New objects are created from existing objects.
            - No architectural diagram
                - Build house based on an existing house
    - There's a method in JS that emulates classical inheritance
        - Constructor pattern / pseudo-classical pattern
    - Prototypal Pattern

- What is the Constructor OO pattern?
    - function constructors
        - Can mimic a class with a function constructor
        - "new" keyword
        - Every function has a prototype
        - The "new" instance will point to the prototype of the function constructor
        - Can add functions to the prototype of the function constructor, which is made available to the "new" instance
    - function prototypes
        - advantage of prototype approach, is if you create multiple instances, they all share the same prototype
        - placing methods in prototype will reduce memory usage
    - if you have your function in the body of the function constructor, and you only refer to the props that are passed into the constructor, you can simulate a private variable
    - Encapsulation done with the Constructor functions
    - Everything in JS - all OO principles are based on the prototype chain

- What is Prototype OO pattern?

