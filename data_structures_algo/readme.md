Algorithms (as you might know) are steps of how to do some tasks. When you cook, you follow a
recipe (or an algorithm) to prepare a dish.

Time complexity, in computer science, is a function that describes the number of operations a
program will execute given the size of the input n. Again, time complexity is not a direct measure of how long a program takes to execute but rather how many operations it performs in given the input size.

Space complexity is similar to time complexity. However, instead of the count of operations
executed, it will account for the amount of memory used additionally to the input.

Asymptotic analysis describes the behavior of functions as their inputs approach
to infinity.

All algorithms have three scenarios:

• Best-case scenario: the most favorable input arrange where the program will take the least
amount of operations to complete. E.g., array already sorted is beneficial for some sorting
algorithms.

• Average-case scenario: this is the most common case. E.g., array items in random order for a
sorting algorithm.

• Worst-case scenario: the inputs are arranged in such a way that causes the program to take the
longest to complete. E.g., array items in reversed order for some sorting algorithm will take the
longest to run.

Most common time complexities

• Constant time: O(1)
• Logarithmic time: O(log n)
• Linear time: O(n)
• Linearithmic time: O(n log n)
• Quadratic time: O(n2)
• Cubic time: O(n3)
• Exponential time: O(2n)
• Factorial time: O(n!)

Constant - Represented as O(1), it means that regardless of the input size the number of operations executed is always the same.