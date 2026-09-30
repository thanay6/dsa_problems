Problem 1 — Find the Second Largest Element
Difficulty

🟢 Easy

Topic

Array — Traversal

Problem Statement

Given an array of integers, find the second largest distinct element in the array.

If there is no second largest distinct element, return -1.

Example
Input:
[10, 5, 8, 10, 3]

Output:
8

Explanation:

Largest = 10
Second largest distinct = 8
Input

An array of integers.

Output

Return the second largest distinct integer.

Constraints
1 <= n <= 100000
-10^9 <= arr[i] <= 10^9
Test Cases
Test Case 1
Input:
[10, 5, 8, 10, 3]

Output:
8
Test Case 2
Input:
[5, 5, 5, 5]

Output:
-1
Test Case 3
Input:
[10, 9]

Output:
9
Test Case 4
Input:
[1]

Output:
-1
Test Case 5
Input:
[-10, -5, -20, -3]

Output:
-5
Test Case 6
Input:
[2, 1, 2, 1, 0]

Output:
1
Test Case 7
Input:
[-5, -5, -3, -3, -10]

Output:
-5
Your Task

Create something like:

DSA/
└── Arrays/
    └── 001-second-largest/
        ├── solution.js
        └── README.md

In solution.js, write your JavaScript solution.

Try to solve it without sorting the array. That's intentional—you should practice finding the optimal O(n) traversal.

Target

Try to achieve:

Time:  O(n)
Space: O(1)

Send me your JavaScript code when you're done.
