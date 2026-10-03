Problem 13 — Intersection of Two Arrays II

This is a good Array + HashMap problem and introduces frequency counting.

LeetCode 350 — Intersection of Two Arrays II

Problem Statement

Given two integer arrays nums1 and nums2, return their intersection.

Each element in the result should appear as many times as it occurs in both arrays.

The order of the result does not matter.

Example 1
Input:
nums1 = [1,2,2,1]
nums2 = [2,2]

Output:
[2,2]

Because 2 appears twice in both arrays.

Example 2
Input:
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]

Output:
[4,9]

[9,4] would also be valid.

Constraints
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
Target: O(n + m) time
Try to use O(n) extra space.
Test Cases
console.log("===== Intersection of Two Arrays II =====");

console.log("1", intersect([1, 2, 2, 1], [2, 2]));
// Expected: [2, 2]

console.log("2", intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// Expected: [4, 9] or [9, 4]

console.log("3", intersect([1], [1]));
// Expected: [1]

console.log("4", intersect([1], [2]));
// Expected: []

console.log("5", intersect([1, 2, 3], [1, 2, 3]));
// Expected: [1, 2, 3]

console.log("6", intersect([1, 1, 1], [1, 1]));
// Expected: [1, 1]

console.log("7", intersect([1, 2, 2, 3], [2, 2, 2]));
// Expected: [2, 2]

console.log("8", intersect([4, 4, 5, 6], [4, 4, 4, 5]));
// Expected: [4, 4, 5]

console.log("9", intersect([1, 2, 3], [4, 5, 6]));
// Expected: []

console.log("10", intersect([2, 2, 3, 4], [2, 3, 3, 4]));
// Expected: [2, 3, 4]

console.log("11", intersect([5, 5, 5, 5], [5, 5, 5]));
// Expected: [5, 5, 5]

console.log("12", intersect([1, 2, 2, 3, 3], [2, 3, 3, 4]));
// Expected: [2, 3, 3]

console.log("13", intersect([7, 8, 9], [8, 8, 9]));
// Expected: [8, 9]

console.log("14", intersect([10, 10, 20], [10, 20, 20]));
// Expected: [10, 20]

console.log("15", intersect([0, 0, 1], [0, 0, 0]));
// Expected: [0, 0]

console.log("16", intersect([3, 4, 5, 5], [5, 5, 5, 6]));
// Expected: [5, 5]

console.log("17", intersect([1, 1, 2, 2], [1, 2, 2, 2]));
// Expected: [1, 2, 2]

console.log("18", intersect([6, 7, 8, 9], [7, 9]));
// Expected: [7, 9]

console.log("19", intersect([2, 3, 4], [2, 2, 3, 3, 4, 4]));
// Expected: [2, 3, 4]

console.log("20", intersect([100, 100, 200], [100, 300, 100]));
// Expected: [100, 100]
Hint

Think about a frequency map.

For:

nums1 = [1, 2, 2, 1]

you could store:

1 → 2
2 → 2

Then traverse nums2.

When you find a number:

Check whether its count is greater than 0.
Add it to the result.
Decrease its count.

Target:

Time:  O(n + m)
Space: O(n)
