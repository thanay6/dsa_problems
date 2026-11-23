# Reverse Integer

**LeetCode Problem:** [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/)

**Difficulty:** Medium

**Topics:** Math, Modulo Operator, Integer Overflow

## Problem Statement

Given a signed 32-bit integer `x`, return `x` with its digits reversed.

If reversing `x` causes the value to go outside the signed 32-bit integer range, return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

### Examples

**Example 1:**
```javascript
Input: x = 123
Output: 321
```

**Example 2:**
```javascript
Input: x = -123
Output: -321
```

**Example 3:**
```javascript
Input: x = 120
Output: 21
```

**Example 4:**
```javascript
Input: x = 0
Output: 0
```

## Constraints

- `-2³¹ <= x <= 2³¹ - 1`
- The input is a signed 32-bit integer.
- If the reversed integer exceeds the 32-bit signed integer range, return `0`.

## Expected Approach

Use mathematical operations instead of converting the number into a string.

### Logic

1. Store the sign of the original number.
2. Convert the number to its absolute value.
3. Extract the last digit using `% 10`.
4. Remove the last digit using `Math.floor(x / 10)`.
5. Build the reversed number using `reversed = reversed * 10 + digit`.
6. Restore the original sign.
7. Check whether the result is within the 32-bit signed integer range.
8. Return `0` if it exceeds the range.

## Complexity Analysis

- **Time Complexity:** O(log₁₀(n)) — We process each digit once.
- **Space Complexity:** O(1) — We use only a few variables.

## LeetCode Link

https://leetcode.com/problems/reverse-integer/