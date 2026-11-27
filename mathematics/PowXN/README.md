# Pow(x, n)

**LeetCode:** [50. Pow(x, n)](https://leetcode.com/problems/powx-n/)

**Difficulty:** Medium

## Problem Statement

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., \(x^n\)).

You must implement the function without using the built-in `Math.pow()` function.

## Examples

**Example 1:**

```js
Input: x = 2.00000, n = 10
Output: 1024.00000
Explanation: 2^10 = 1024
```

**Example 2:**

```js
Input: x = 2.10000, n = 3
Output: 9.26100
```

**Example 3:**

```js
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2^-2 = 1 / 2^2 = 1/4 = 0.25
```

## Constraints

- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31 - 1`
- `n` is an integer.
- Either `x != 0` or `n > 0`.
- `-10^4 <= x^n <= 10^4`

## Approaches to Practice

### 1. Brute Force / Iteration

Multiply `x` by itself `n` times.

For negative powers, use the reciprocal:

\[
x^{-n} = \frac{1}{x^n}
\]

**Time Complexity:** O(n)

**Space Complexity:** O(1)

*Note:* This approach is too slow for very large values of `n`.

### 2. Recursion – Binary Exponentiation (Recommended)

Instead of multiplying `x` repeatedly, use the following mathematical property:

\[
x^n =
\begin{cases}
1 & n = 0\\
(x^{n/2})^2 & n \text{ is even}\\
x \cdot (x^{n/2})^2 & n \text{ is odd}
\end{cases}
\]

For negative powers:

\[
x^{-n} = \frac{1}{x^n}
\]

This reduces the exponent by half in every recursive call.

**Time Complexity:** O(log n)

**Space Complexity:** O(log n) due to recursion stack.

### 3. Iterative – Binary Exponentiation

Use the same binary exponentiation idea, but with a loop instead of recursion.

**Time Complexity:** O(log n)

**Space Complexity:** O(1)

## Important Concepts

- Exponentiation
- Negative powers
- Recursion
- Divide and conquer
- Binary exponentiation
- Bitwise operations (optional optimization)