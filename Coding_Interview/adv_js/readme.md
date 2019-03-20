Adv JS Prep

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