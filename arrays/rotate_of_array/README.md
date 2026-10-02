Problem 12 — Rotate Array

A common array manipulation problem. This one is useful for learning in-place transformations.

LeetCode 189 — Rotate Array

Problem Statement

Given an integer array nums, rotate the array to the right by k steps.

You must modify the array in-place.

Example 1
Input:  nums = [1,2,3,4,5,6,7], k = 3

Output: [5,6,7,1,2,3,4]

Explanation:

1 step → [7,1,2,3,4,5,6]
2 steps → [6,7,1,2,3,4,5]
3 steps → [5,6,7,1,2,3,4]
Example 2
Input:  nums = [-1,-100,3,99], k = 2

Output: [3,99,-1,-100]
Constraints
1 <= nums.length <= 100,000
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 100,000
Modify nums in-place
Target: O(n) time
Target: O(1) extra space
Test Cases
console.log("===== Rotate Array Test Cases =====");

let a1 = [1, 2, 3, 4, 5, 6, 7];
rotate(a1, 3);
console.log("1", a1);
// Expected: [5, 6, 7, 1, 2, 3, 4]

let a2 = [-1, -100, 3, 99];
rotate(a2, 2);
console.log("2", a2);
// Expected: [3, 99, -1, -100]

let a3 = [1, 2, 3];
rotate(a3, 1);
console.log("3", a3);
// Expected: [3, 1, 2]

let a4 = [1, 2, 3];
rotate(a4, 2);
console.log("4", a4);
// Expected: [2, 3, 1]

let a5 = [1, 2, 3];
rotate(a5, 3);
console.log("5", a5);
// Expected: [1, 2, 3]

let a6 = [1];
rotate(a6, 10);
console.log("6", a6);
// Expected: [1]

let a7 = [1, 2];
rotate(a7, 1);
console.log("7", a7);
// Expected: [2, 1]

let a8 = [1, 2];
rotate(a8, 2);
console.log("8", a8);
// Expected: [1, 2]

let a9 = [1, 2, 3, 4, 5];
rotate(a9, 1);
console.log("9", a9);
// Expected: [5, 1, 2, 3, 4]

let a10 = [1, 2, 3, 4, 5];
rotate(a10, 4);
console.log("10", a10);
// Expected: [2, 3, 4, 5, 1]

let a11 = [1, 2, 3, 4, 5];
rotate(a11, 5);
console.log("11", a11);
// Expected: [1, 2, 3, 4, 5]

let a12 = [1, 2, 3, 4, 5];
rotate(a12, 7);
console.log("12", a12);
// Expected: [4, 5, 1, 2, 3]

let a13 = [1, 2, 3, 4, 5, 6];
rotate(a13, 2);
console.log("13", a13);
// Expected: [5, 6, 1, 2, 3, 4]

let a14 = [10, 20, 30, 40];
rotate(a14, 3);
console.log("14", a14);
// Expected: [20, 30, 40, 10]

let a15 = [5, 10, 15, 20, 25];
rotate(a15, 6);
console.log("15", a15);
// Expected: [25, 5, 10, 15, 20]

let a16 = [1, 2, 3, 4];
rotate(a16, 0);
console.log("16", a16);
// Expected: [1, 2, 3, 4]

let a17 = [9, 8, 7, 6, 5];
rotate(a17, 2);
console.log("17", a17);
// Expected: [6, 5, 9, 8, 7]

let a18 = [-1, -2, -3, -4];
rotate(a18, 1);
console.log("18", a18);
// Expected: [-4, -1, -2, -3]

let a19 = [100, 200, 300, 400, 500];
rotate(a19, 12);
console.log("19", a19);
// Expected: [400, 500, 100, 200, 300]

let a20 = [1, 2, 3, 4, 5, 6];
rotate(a20, 10);
console.log("20", a20);
// Expected: [3, 4, 5, 6, 1, 2]
Hint

There is a very clean 3-reversal technique.

For:

[1, 2, 3, 4, 5, 6, 7]
k = 3

Think about:

Reverse entire array
Reverse first k elements
Reverse remaining elements

Try to implement it yourself.

Target:

Time:  O(n)
Space: O(1)