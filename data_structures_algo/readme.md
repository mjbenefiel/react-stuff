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

Logarithmic - Represented in Big O notation as O(log n), when an algorithm has this running time it means that as the size of the input grows the number of operations grows very slowly. Logarithmic algorithms
are very scalable. One example is the binary search. The binary search only works for sorted lists. It starts searching for an element on the middle of the array and then it moves to the right or left depending if the value you are looking for is bigger or smaller.

Linear - Linear algorithms are one of the most common runtimes. It’s represented as O(n). Usually, an
algorithm has a linear running time when it iterates over all the elements in the input.

Linearithmic - An algorithm with a linearithmic runtime is represented as O(n log n). This one is important
because it is the best runtime for sorting! Let’s see the merge-sort.

Quadratic - Running times that are quadratic, O(n2), are the ones to watch out for. They usually don’t scale well when they have a large amount of data to process. Usually, they have double-nested loops that where each one visits all or most elements in the input. One example of this is a naïve implementation to find duplicate words on an array.

Cubic - Cubic O(n3) and higher polynomial functions usually involve many nested loops.

Exponential - Exponential runtimes, O(2n), means that every time the input grows by one the number of
operations doubles. Exponential programs are only usable for a tiny number of elements (<100) otherwise it might not finish on your lifetime.

Factorial - Factorial runtime, O(n!), is not scalable at all. Even with input sizes of ~10 elements, it will take a couple of seconds to compute.

Linked List - A list (or Linked List) is a linear data structure where each node is "linked" to the next.

Singly Linked List - Each element or node is connected to the next one by a reference. When a node only has one connection it’s called singly linked list.

Doubly Linked List - When each node has a connection to the next item and also the previous one, then we have a doubly linked list.