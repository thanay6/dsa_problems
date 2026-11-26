# Power of Four

**LeetCode Problem:** [342. Power of Four](https://leetcode.com/problems/power-of-four/)

**Difficulty:** Easy

**Topics:** Math, Bit Manipulation, Recursion

### Problem Statement

Given an integer `n`, return `true` if it is a power of four. Otherwise, return `false`.

An integer `n` is a power of four if there exists an integer `x` such that:

\[
n = 4^x
\]

### Examples

**Example 1:**

Input:
```javascript
n = 16
```

Output:
```javascript
true
```

Explanation: \(4^2 = 16\).

**Example 2:**

Input:
```javascript
n = 5
```

Output:
```javascript
false
```

**Example 3:**

Input:
```javascript
n = 1
```

Output:
```javascript
true
```

Explanation: \(4^0 = 1\).

### Constraints

- `-2^31 <= n <= 2^31 - 1`

### Power of Four Sequence

| Exponent | Calculation | Result |
|---|---|---:|
| 0 | 4⁰ | 1 |
| 1 | 4¹ | 4 |
| 2 | 4² | 16 |
| 3 | 4³ | 64 |
| 4 | 4⁴ | 256 |
| 5 | 4⁵ | 1024 |
| 6 | 4⁶ | 4096 |
| 7 | 4⁷ | 16384 |

### Approach 1: Iteration

1. If `n <= 0`, return `false`.
2. While `n` is divisible by 4, divide it by 4.
3. If the final value becomes 1, return `true`.
4. Otherwise, return `false`.

### Approach 2: Recursion

1. If `n === 1`, return `true`.
2. If `n <= 0` or `n % 4 !== 0`, return `false`.
3. Otherwise, recursively call the function with `n / 4`.

### Approach 3: Bit Manipulation

A power of four has exactly one set bit in its binary representation, and that bit appears at an even position (counting from position 0 on the right).

For example:

| Number | Binary |
|---|---|
| 1 | 0001 |
| 4 | 0100 |
| 16 | 0001 0000 |
| 64 | 0100 0000 |

We can check two conditions:

1. `n > 0` and `(n & (n - 1)) === 0` ensures exactly one set bit.
2. `(n & 0x55555555) !== 0` ensures the set bit is at an even position.

JavaScript implementation:

```javascript
function isPowerOfFour(n) {
    return n > 0 &&
           (n & (n - 1)) === 0 &&
           (n & 0x55555555) !== 0;
}
```

### Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Iteration | O(log₄ n) | O(1) |
| Recursion | O(log₄ n) | O(log₄ n) |
| Bit Manipulation | O(1) | O(1) |

### LeetCode Link

https://leetcode.com/problems/power-of-four/