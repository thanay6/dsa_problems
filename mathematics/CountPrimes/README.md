# 204. Count Primes

**LeetCode:** [Count Primes](https://leetcode.com/problems/count-primes/)

**Difficulty:** Medium

## Problem Statement

Given an integer `n`, return the number of prime numbers that are strictly less than `n`.

A prime number is a natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself.

## Examples

**Example 1:**
```text
Input: n = 10
Output: 4

Explanation:
Prime numbers less than 10 are 2, 3, 5, and 7.
```

**Example 2:**
```text
Input: n = 0
Output: 0
```

**Example 3:**
```text
Input: n = 1
Output: 0
```

## Constraints

- `0 <= n <= 5 * 10^6`

## Test Cases

| # | Input | Expected Output | Explanation |
|---|---|---|---|
| 1 | 0 | 0 | No primes exist below 0 |
| 2 | 1 | 0 | No primes exist below 1 |
| 3 | 2 | 0 | 2 is not strictly less than 2 |
| 4 | 3 | 1 | 2 |
| 5 | 4 | 2 | 2, 3 |
| 6 | 5 | 2 | 2, 3 |
| 7 | 10 | 4 | 2, 3, 5, 7 |
| 8 | 15 | 6 | 2, 3, 5, 7, 11, 13 |
| 9 | 20 | 8 | 2, 3, 5, 7, 11, 13, 17, 19 |
| 10 | 25 | 9 | 9 prime numbers |
| 11 | 30 | 10 | 10 prime numbers |
| 12 | 50 | 15 | 15 prime numbers |
| 13 | 100 | 25 | 25 prime numbers |
| 14 | 1000 | 168 | 168 prime numbers |
| 15 | 10000 | 1229 | 1229 prime numbers |
| 16 | 5000000 | 348513 | 348513 prime numbers |

## Approach 1: Brute Force

1. Iterate through every number from 2 to `n - 1`.
2. For each number, check whether it is prime.
3. If it is prime, increment the counter.
4. Return the counter.

### Complexity Analysis

**Time Complexity:** O(n√n)

For every number, we check its divisors up to its square root.

**Space Complexity:** O(1)

Only a constant amount of extra memory is used.

## Approach 2: Sieve of Eratosthenes (Optimal)

1. Create a boolean array of size `n`.
2. Initially mark every number as prime.
3. Mark 0 and 1 as not prime.
4. Start iterating from 2.
5. For every prime number, mark all its multiples as not prime.
6. Start marking multiples from `i * i`, because smaller multiples have already been processed.
7. Count all the remaining prime numbers.

### Complexity Analysis

**Time Complexity:** O(n log log n)

**Space Complexity:** O(n)

## Key Concepts

- Prime Numbers
- Basic Mathematics
- Divisibility
- Square Root Optimization
- Sieve of Eratosthenes
- Boolean Arrays
- Time and Space Complexity