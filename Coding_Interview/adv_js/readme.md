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