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
        - ie, don't use 0(2n), just use O(N), don't use O(500), just use O(1)
    - Smaller terms don't matter

- Big O Shorthands
    - Arithmetic operations are constant
    - Variable assignment is constant
    - Accessing elements in an array (by index) or object (by key) is constant
    - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

<strong>- O(1) - Constant; best run time. Flat.
- O(log n)
- O(N) - Linear; okay run time
- O(nlog n)
- O(n2) - Quadratic; worst run time</strong>

- Space Complexity
    - The amount of additional memory we need to allocate in order to run the code in our algorithm

- Auxillary space complexity
    - Space required by the algorithm, not including space taken up by the inputs

- Space Complexity rules of thumb
    - Most primitives (booleans, numbers, undefined, null) are constant space
    - Strings require O(N) space (where n is the string length)
    - Reference types are generally O(N), where n is the length (for arrays) or the number of keys (objects)

- Logarithms
    - Inverse of exponentiation
        - log2(8) = 3 // 2^3 = 8
    - log = log2
    - The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one
        - 8 / 2 = 4 / 2 = 2 / 2 = 1 (answer is 3) log(8) = 3
    - Certain searching algorithms have log time complexity
    - Efficient sorting algorithms involves log
    - Recursion sometimes involves log space complexity

- To analyze the performance of an algorithm, we use Big O Notation
- Big O can give us high level understanding of the time or space complexity of an algorithm
- Big O doesn't care about precision, but general trends
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm

- Built-in data structures
    - Objects
        - Unordered, key-value pairs
        - Used for when you don't need order
        - When you need fast access / insertion and removal
            - Insertion - O(1)
            - Removal - O(1)
            - Searching - O(N)
            - Access - O(1)
        - Object Methods
            - Object.keys - O(N)
            - Object.values - O(N)
            - Object.entries - O(N)
            - hasOwnProperty - O(1)

    - Arrays
        - Ordered lists
        - Use them when you need order
        - When you need fast access / insertion and removal
            - Insertion - depends
                - Inserting at end of array is constant. Inserting at beginning is linear, because everything has to be reindexed
            - Removal - depends
            - Searching - O(N)
            - Access - O(1)
    - Array Methods
        - push - O(1)
        - pop - O(1)
        - shift - O(N)
        - unshift - O(N)
        - concat - O(N)
        - splice - O(N)
        - slice - O(N)
        - sort - O(N * log N)
        - forEach/map/filter/reduce/etc - O(N)