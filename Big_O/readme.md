Algorithms and Data Structures | Big O Notation

- Intro to Big O Notation
    - Way of formalized fuzzy counting
    - Allows us to talk formally about how the runtime of an algorithm grows as input grows
    - Focus on trends, not minute details
    - Talking about worst case scenario

    - We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant f(n), as n increases
        - f(n) could be linear (f(n) = n)
        - f(n) could be quadratic (f(n) = n2) **n squared
        - f(n) could be constant (f(n) = 1)
        - f(n) could be something entirely different

- Problem with Timers
    - Different machines will record different times
    - Same machine will record different times

- Simplifying Big O Operations
    - Constants don't matter
        - ie, don't use 0(2n), just use O(n), don't use O(500), just use O(1)
    - Smaller terms don't matter

- Big O Shorthands
    - Arithmetic operations are constant
    - Variable assignment is constant
    - Accessing elements in an array (by index) or object (by key) is constant
    - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

- O(1) - Constant; best run time. Flat.
- O(log n)
- O(n) - Linear; okay run time
- O(nlog n)
- O(n2) - Quadratic; worst run time

- Space Complexity
    - The amount of additional memory we need to allocate in order to run the code in our algorithm

- Auxillary space complexity
    - Space required by the algorithm, not including space taken up by the inputs

- Space Complexity rules of thumb
    - Most primitives (booleans, numbers, undefined, null) are constant space
    - Strings require O(n) space (where n is the string length)
    - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (objects)

    
