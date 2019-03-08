TM JS

Execution contexts, hoisting, scopes and closures in JS

- Execution context
    - Allow JS engine to manage complexity of interpreting and running the code
    - Each execution phase will have two contexts
        - creation phase of global execution context
            - 4 things happen
                - create global object
                - create object called this
                - set up memory space for variables and functions
                - assign variable declarations a default value of undefined, while placing any functions directly in memory
        - execution phase
            - where JS starts executing code line by line
        - function execution context
            - created whenever a function is invoked

    Difference between global and function execution context?
        - 
        
- Hoisting
    - process of assigning variable declaration a default value of undefined during the creation phase

