# 263. Ugly Number

**LeetCode:** [Ugly Number](https://leetcode.com/problems/ugly-number/)

**Difficulty:** Easy

## Problem Statement

An ugly number is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer `n`, return `true` if `n` is an ugly number. Otherwise, return `false`.

## Examples

**Example 1:**
```text
Input: n = 6
Output: true

Explanation: 6 = 2 × 3
```

**Example 2:**
```text
Input: n = 1
Output: true

Explanation: 1 has no prime factors.
```

**Example 3:**
```text
Input: n = 14
Output: false

Explanation: 14 = 2 × 7
```

## Constraints

- `-2^31 <= n <= 2^31 - 1`

## Test Cases

| # | Input | Expected Output | Explanation |
|---|---|---|---|
| 1 | 0 | false | Zero is not positive |
| 2 | 1 | true | No prime factors |
| 3 | 2 | true | Prime factor is 2 |
| 4 | 3 | true | Prime factor is 3 |
| 5 | 5 | true | Prime factor is 5 |
| 6 | 6 | true | 2 × 3 |
| 7 | 8 | true | 2 × 2 × 2 |
| 8 | 10 | true | 2 × 5 |
| 9 | 12 | true | 2 × 2 × 3 |
| 10 | 15 | true | 3 × 5 |
| 11 | 25 | true | 5 × 5 |
| 12 | 30 | true | 2 × 3 × 5 |
| 13 | 14 | false | Contains prime factor 7 |
| 14 | 21 | false | Contains prime factor 7 |
| 15 | 22 | false | Contains prime factor 11 |
| 16 | 49 | false | Contains prime factor 7 |
| 17 | -6 | false | Negative number |
| 18 | 100 | true | 2 × 2 × 5 × 5 |
| 19 | 121 | false | Contains prime factor 11 |
| 20 | 2147483647 | false | Contains disallowed prime factors |

## Approach: Repeated Division

1. If `n <= 0`, return `false`.
2. Divide `n` by 2 while it is divisible by 2.
3. Divide `n` by 3 while it is divisible by 3.
4. Divide `n` by 5 while it is divisible by 5.
5. If the remaining number is 1, return `true`.
6. Otherwise, return `false`.

## Complexity Analysis

**Time Complexity:** O(log n)

Each division reduces the number, and the maximum number of divisions is logarithmic in the input.

**Space Complexity:** O(1)

Only a constant amount of extra memory is used.

## Key Concepts

- Prime Factors
- Divisibility
- Modulo Operator
- Repeated Division
- Basic Mathematics
- Time and Space Complexity