# Power of Three

**LeetCode Problem:** [326. Power of Three](https://leetcode.com/problems/power-of-three/)

**Difficulty:** Easy

**Topics:** Math, Recursion

### Problem Statement

Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.

An integer `n` is a power of three if there exists an integer `x` such that:

\[
n = 3^x
\]

### Examples

**Example 1:**

Input:
```javascript
n = 27
```

Output:
```javascript
true
```

Explanation: \(3^3 = 27\).

**Example 2:**

Input:
```javascript
n = 0
```

Output:
```javascript
false
```

**Example 3:**

Input:
```javascript
n = -1
```

Output:
```javascript
false
```

### Constraints

- `-2^31 <= n <= 2^31 - 1`

### Approach 1: Iteration

1. If `n <= 0`, return `false`.
2. While `n` is divisible by 3, divide it by 3.
3. If the final value becomes 1, return `true`.
4. Otherwise, return `false`.

### Approach 2: Recursion

We can solve the problem using recursion.

1. If `n === 1`, return `true`.
2. If `n <= 0` or `n` is not divisible by 3, return `false`.
3. Otherwise, call the function recursively with `n / 3`.

### Approach 3: Mathematics (Constant Time)

The largest power of 3 that fits within a signed 32-bit integer is:

\[
3^{19} = 1162261467
\]

Since 3 is a prime number, every positive power of 3 must divide \(3^{19}\) evenly.

Therefore:

```javascript
n > 0 && 1162261467 % n === 0
```

This provides an O(1) mathematical solution under the given constraints.

### Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Iteration | O(log₃ n) | O(1) |
| Recursion | O(log₃ n) | O(log₃ n) |
| Mathematics | O(1) | O(1) |

### LeetCode Link

https://leetcode.com/problems/power-of-three/