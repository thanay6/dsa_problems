# Power of Two

**LeetCode Problem:** [231. Power of Two](https://leetcode.com/problems/power-of-two/)

**Difficulty:** Easy

**Topic:** Mathematics, Bit Manipulation

### Problem Statement

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that:

\[
n = 2^x
\]

### Examples

**Example 1:**

Input:
```javascript
n = 1
```
Output:
```javascript
true
```
Explanation: \(2^0 = 1\).

**Example 2:**

Input:
```javascript
n = 16
```
Output:
```javascript
true
```
Explanation: \(2^4 = 16\).

**Example 3:**

Input:
```javascript
n = 3
```
Output:
```javascript
false
```

### Constraints

- `-2^31 <= n <= 2^31 - 1`

### Approach 1: Iteration

1. If `n` is less than or equal to zero, return `false`.
2. Divide `n` by 2 while it is even.
3. If the final value becomes 1, return `true`.
4. Otherwise, return `false`.

### Approach 2: Bit Manipulation (Optimal)

A power of two has exactly one set bit in its binary representation.

For example:

| Number | Binary |
|---|---|
| 1 | 0001 |
| 2 | 0010 |
| 4 | 0100 |
| 8 | 1000 |
| 16 | 10000 |

We can use:

```javascript
n > 0 && (n & (n - 1)) === 0
```

**Why does this work?**

When we subtract 1 from a power of two, all bits after its single set bit become 1.

Example:

```text
n       = 8  = 1000
n - 1   = 7  = 0111

n & (n-1)   = 0000
```

Therefore, the result is zero only when `n` is a positive power of two.

### Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Iteration | O(log n) | O(1) |
| Bit Manipulation | O(1) | O(1) |

### LeetCode Link

https://leetcode.com/problems/power-of-two/
