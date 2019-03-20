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