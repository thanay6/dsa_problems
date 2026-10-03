Problem 14 — Merge Sorted Array

Difficulty: Easy → Medium
Topic: Arrays + Two Pointers
LeetCode: LeetCode 88 — Merge Sorted Array

Problem

You are given two sorted integer arrays:

nums1 has length m + n
The first m elements contain valid values.
The last n elements are 0 placeholders.
nums2 has n elements.

Merge nums2 into nums1 so that nums1 becomes one sorted array.

Important: Modify nums1 in-place.

Example
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output:
[1,2,2,3,5,6]
Constraints
1 <= m + n <= 200
0 <= m, n <= 200
-10^9 <= nums1[i], nums2[j] <= 10^9
nums1 is sorted in ascending order
nums2 is sorted in ascending order
Test Cases

Use these locally:

console.log("===== Problem 14: Merge Sorted Array =====");

// 1
console.log("1", merge([1,2,3,0,0,0], 3, [2,5,6], 3));
// Expected: [1,2,2,3,5,6]

// 2
console.log("2", merge([1], 1, [], 0));
// Expected: [1]

// 3
console.log("3", merge([0], 0, [1], 1));
// Expected: [1]

// 4
console.log("4", merge([1,2,0,0], 2, [3,4], 2));
// Expected: [1,2,3,4]

// 5
console.log("5", merge([3,4,5,0,0,0], 3, [1,2,6], 3));
// Expected: [1,2,3,4,5,6]

// 6
console.log("6", merge([1,1,1,0,0], 3, [1,1], 2));
// Expected: [1,1,1,1,1]

// 7
console.log("7", merge([5,0,0], 1, [1,2], 2));
// Expected: [1,2,5]

// 8
console.log("8", merge([1,2,3,0,0], 3, [4,5], 2));
// Expected: [1,2,3,4,5]

// 9
console.log("9", merge([4,0,0,0], 1, [1,2,3], 3));
// Expected: [1,2,3,4]

// 10
console.log("10", merge([-3,-1,0,0,0], 2, [-2,0,2], 3));
// Expected: [-3,-2,-1,0,2]

// 11
console.log("11", merge([1,0], 1, [2], 1));
// Expected: [1,2]

// 12
console.log("12", merge([2,0], 1, [1], 1));
// Expected: [1,2]

// 13
console.log("13", merge([0,0,0], 0, [1,2,3], 3));
// Expected: [1,2,3]

// 14
console.log("14", merge([1,2,3,0,0], 3, [1,2], 2));
// Expected: [1,1,2,2,3]

// 15
console.log("15", merge([10,20,30,0,0], 3, [5,15], 2));
// Expected: [5,10,15,20,30]

// 16
console.log("16", merge([-5,-2,0,0], 2, [-4,-1], 2));
// Expected: [-5,-4,-2,-1]

// 17
console.log("17", merge([100,0,0], 1, [1,50], 2));
// Expected: [1,50,100]

// 18
console.log("18", merge([1,3,5,0,0,0], 3, [2,4,6], 3));
// Expected: [1,2,3,4,5,6]

// 19
console.log("19", merge([2,2,2,0,0], 3, [2,2], 2));
// Expected: [2,2,2,2,2]

// 20
console.log("20", merge([], 0, [], 0));
// Expected: []
Interview focus

Try to solve it with:

Two pointers
O(m + n) time
O(1) extra space
Modify nums1 directly

Don't use sort() for this one.