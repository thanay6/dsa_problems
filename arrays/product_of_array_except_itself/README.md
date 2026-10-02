Problem 11 — Product of Array Except Self

This is a very useful mid-level array problem because it tests prefix/suffix thinking and optimization.

LeetCode 238 — Product of Array Except Self

Problem Statement

Given an integer array nums, return an array answer such that:

answer[i] = product of all elements of nums except nums[i]
Important

You cannot use division.

Your solution should run in:

Time:  O(n)
Space: O(1) extra space

The returned answer array does not count as extra space.

Examples
Input:  [1,2,3,4]
Output: [24,12,8,6]

Because:

index 0 → 2 × 3 × 4 = 24
index 1 → 1 × 3 × 4 = 12
index 2 → 1 × 2 × 4 = 8
index 3 → 1 × 2 × 3 = 6

Another:

Input:  [-1,1,0,-3,3]
Output: [0,0,9,0,0]
Constraints
2 <= nums.length <= 100,000
-30 <= nums[i] <= 30
Product of any prefix/suffix fits within a 32-bit integer.
No division.
Target O(n) time.
Target O(1) extra space.
Test Cases
console.log("===== Product Except Self Test Cases =====");

console.log("1", productExceptSelf([1, 2, 3, 4]));
// Expected: [24, 12, 8, 6]

console.log("2", productExceptSelf([-1, 1, 0, -3, 3]));
// Expected: [0, 0, 9, 0, 0]

console.log("3", productExceptSelf([2, 3]));
// Expected: [3, 2]

console.log("4", productExceptSelf([1, 1, 1, 1]));
// Expected: [1, 1, 1, 1]

console.log("5", productExceptSelf([2, 4, 6]));
// Expected: [24, 12, 8]

console.log("6", productExceptSelf([1, 2, 3]));
// Expected: [6, 3, 2]

console.log("7", productExceptSelf([5, 2, 1]));
// Expected: [2, 5, 10]

console.log("8", productExceptSelf([0, 1, 2, 3]));
// Expected: [6, 0, 0, 0]

console.log("9", productExceptSelf([1, 0, 3, 4]));
// Expected: [0, 12, 0, 0]

console.log("10", productExceptSelf([0, 0, 2, 3]));
// Expected: [0, 0, 0, 0]

console.log("11", productExceptSelf([-1, -2, -3]));
// Expected: [6, 3, 2]

console.log("12", productExceptSelf([-1, 2, -3, 4]));
// Expected: [-24, 12, -8, 6]

console.log("13", productExceptSelf([2, -1, 4]));
// Expected: [-4, -8, -2]

console.log("14", productExceptSelf([3, 5, 2, 1]));
// Expected: [10, 6, 15, 30]

console.log("15", productExceptSelf([10, 20, 30]));
// Expected: [600, 300, 200]

console.log("16", productExceptSelf([-2, 0, 4]));
// Expected: [0, -8, 0]

console.log("17", productExceptSelf([1, -1, 1, -1]));
// Expected: [1, -1, 1, -1]

console.log("18", productExceptSelf([2, 2, 2, 2]));
// Expected: [8, 8, 8, 8]

console.log("19", productExceptSelf([4, 3, 2, 1]));
// Expected: [6, 8, 12, 24]

console.log("20", productExceptSelf([-2, -3, -4, -5]));
// Expected: [-60, -40, -30, -24]
Hint

Think about each element as:

product of elements on its LEFT
×
product of elements on its RIGHT

For example:

[1, 2, 3, 4]

For 3:

left product  = 1 × 2 = 2
right product = 4

answer = 2 × 4 = 8

Try to achieve it using two passes rather than calculating each answer independently.