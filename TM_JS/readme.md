TM JS

Execution contexts, hoisting, scopes and closures in JS

- Execution context
    - Environment in which code is run
    - Allow JS engine to manage complexity of interpreting and running the code
    - Each execution phase will have two contexts
        - creation phase of global execution context
            - 4 things happen
                - create global object
                - create object called this
                - set up memory space for variables and functions
                - assign variable declarations a default value of undefined, while placing any functions directly in memory
        - execution phase
            - where JS starts executing code line by line and assigns the real values to the variables already living in memory
        - function execution context
            - created whenever a function is invoked

    Difference between global and function execution context?
        - Instead of creating global variable, function execution context creates an arguments object

    Whenever a function execution context is created, the JS Engine will: 
        - Create an arguments object
        - Create an object called this
        - Set up memory space for variables and functions
        - Assign variable declarations a default value of “undefined” while placing any function declarations in memory

    Execution stack
        - Any time a function is invoked, a new execution context is created and added to the execution stack. Whenever a function is finished running through creation and execution phases, it is popped off the execution stack.

    Hoisting
        - process of assigning variable declaration a default value of undefined during the creation phase

    Scope chain
        - Process of the JavaScript engine going one by one and checking each individual parent Execution Context if a variable doesn’t exist in the local Execution Context

    Closures
     - The concept of a child function “closing” over the variable environment of its parent function

Understanding the this keyword, call, apply, and bind in JavaScript
  
- This keyword
    - The “this” keyword allows you to decide which object should be focal when invoking a function or a method.
    
    4 rules
        - Implicit binding
        - Explicit binding
        - new Binding
        - window Binding

    Always ask this question for this keyword: "Where is this function invoked?"

        - Implicit binding (most common rule)
            - Implicit binding says that when you call a function, and it's invoked, look to the left of the dot, and that's what the this keyword is invoking (IE, me.SayName() refers to me object)

        - Explicit binding with call, apply, bind
            - .call() -- explicitly stating what "this" keyword is
                - can pass along arguments one by one
            - .apply() -- passes in array of arguments 
            - .bind() -- will return new function instead of invoking original function

        - new binding
            - Behind the scenes, JS will create brand new object

        - window binding
            - if none of the above rules apply, "this" keyword is going to default to window object, unless in strict mode, then it will be undefined
            