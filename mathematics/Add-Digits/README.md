# Add Digits

**LeetCode Problem:** [258. Add Digits](https://leetcode.com/problems/add-digits/)

**Difficulty:** Easy

**Topics:** Math, Number Manipulation, Digital Root

## Problem Statement

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

### Examples

**Example 1:**
```javascript
Input: num = 38
Output: 2

Explanation:
3 + 8 = 11
1 + 1 = 2
```

**Example 2:**
```javascript
Input: num = 0
Output: 0
```

**Example 3:**
```javascript
Input: num = 123
Output: 6

Explanation:
1 + 2 + 3 = 6
```

## Constraints

- `0 <= num <= 2³¹ - 1`

## Expected Approach

### Approach 1: Iteration

1. Extract each digit using `% 10`.
2. Add the extracted digit to a sum.
3. Remove the last digit using `Math.floor(num / 10)`.
4. Once all digits are added, check whether the sum has only one digit.
5. If not, repeat the process.

### Approach 2: Mathematical Formula

Learn about the Digital Root formula.

For a positive integer:

`Digital Root = 1 + ((num - 1) % 9)`

Special case: if `num = 0`, return `0`.

## Complexity Analysis

**Iteration approach:**
- Time Complexity: O(log₁₀ n × log₁₀ n) in the worst case.
- Space Complexity: O(1).

**Digital Root approach:**
- Time Complexity: O(1).
- Space Complexity: O(1).

## LeetCode Link

https://leetcode.com/problems/add-digits/