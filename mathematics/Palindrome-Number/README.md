# Palindrome Number

**LeetCode Problem:** [9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)

**Difficulty:** Easy

**Topics:** Math, Number Manipulation

## Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

A palindrome number reads the same forward and backward.

### Examples

**Example 1:**
```javascript
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and right to left.
```

**Example 2:**
```javascript
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it reads 121-.
```

**Example 3:**
```javascript
Input: x = 10
Output: false
Explanation: Reads 01 from right to left.
```

## Constraints

- `-2³¹ <= x <= 2³¹ - 1`

## Expected Approach

Try solving this problem using mathematical operations.

1. Negative numbers cannot be palindromes.
2. Extract the last digit using `% 10`.
3. Remove the last digit using `Math.floor(x / 10)`.
4. Reverse the number.
5. Compare the reversed number with the original number.
6. Return `true` if both are equal; otherwise return `false`.

## Complexity Analysis

- Time Complexity: O(log₁₀(n))
- Space Complexity: O(1)

## LeetCode Link

https://leetcode.com/problems/palindrome-number/