# Reverse String

**LeetCode:** [344. Reverse String](https://leetcode.com/problems/reverse-string/)

**Difficulty:** Easy

## Problem Statement

Write a function that reverses a string.

The input string is given as an array of characters `s`.

You must reverse the string **in-place** with O(1) extra memory.

## Examples

**Example 1:**
```js
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**
```js
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

**Example 3:**
```js
Input: s = ["A"]
Output: ["A"]
```

## Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is a printable ASCII character.

## Approaches to Practice

### 1. Two Pointers (Recommended)

- Initialize `left = 0`.
- Initialize `right = s.length - 1`.
- Swap the characters at `left` and `right`.
- Move `left` forward and `right` backward.
- Continue until `left >= right`.

**Time Complexity:** O(n)

**Space Complexity:** O(1)

### 2. Recursion

- Swap the first and last characters.
- Move both pointers towards the middle.
- Repeat recursively until the pointers meet.

**Time Complexity:** O(n)

**Space Complexity:** O(n) due to the recursion call stack.

## Important Concepts

- Two-pointer technique
- Swapping array elements
- In-place modification
- Recursion