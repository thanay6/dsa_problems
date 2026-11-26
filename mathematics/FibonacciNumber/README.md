# Fibonacci Number

**LeetCode Problem:** [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

**Difficulty:** Easy

**Topics:** Math, Recursion, Dynamic Programming

### Problem Statement

The Fibonacci numbers, commonly denoted `F(n)`, form a sequence called the Fibonacci sequence.

The sequence is defined as:

- `F(0) = 0`
- `F(1) = 1`
- `F(n) = F(n - 1) + F(n - 2)`, for `n > 1`.

Given `n`, calculate and return `F(n)`.

### Examples

**Example 1:**

Input:
```javascript
n = 2
```

Output:
```javascript
1
```

Explanation:
```text
F(2) = F(1) + F(0)
     = 1 + 0
     = 1
```

**Example 2:**

Input:
```javascript
n = 3
```

Output:
```javascript
2
```

Explanation:
```text
F(3) = F(2) + F(1)
     = 1 + 1
     = 2
```

**Example 3:**

Input:
```javascript
n = 4
```

Output:
```javascript
3
```

Explanation:
```text
F(4) = F(3) + F(2)
     = 2 + 1
     = 3
```

### Constraints

- `0 <= n <= 30`

### Fibonacci Sequence

The first few Fibonacci numbers are:

| n | F(n) |
|---|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |
| 6 | 8 |
| 7 | 13 |
| 8 | 21 |
| 9 | 34 |
| 10 | 55 |

### Approach 1: Recursion (Basic)

The Fibonacci sequence can be calculated using the recursive definition.

1. If `n === 0`, return `0`.
2. If `n === 1`, return `1`.
3. Otherwise, return the sum of `fib(n - 1)` and `fib(n - 2)`.

**Complexity Analysis:**

- Time Complexity: O(2^n)
- Space Complexity: O(n), due to the recursion call stack.

### Approach 2: Iteration (Recommended)

We can calculate Fibonacci numbers without recursion.

1. Initialize two variables:
   - `a = 0`
   - `b = 1`
2. Iterate from `2` to `n`.
3. Calculate the next Fibonacci number using `a + b`.
4. Update the previous two values.
5. Return the final Fibonacci number.

**Complexity Analysis:**

- Time Complexity: O(n)
- Space Complexity: O(1)

### Approach 3: Dynamic Programming

We can store previously calculated Fibonacci numbers in an array.

1. Create an array to store Fibonacci values.
2. Initialize `dp[0] = 0` and `dp[1] = 1`.
3. Calculate each subsequent value using `dp[i] = dp[i - 1] + dp[i - 2]`.
4. Return `dp[n]`.

**Complexity Analysis:**

- Time Complexity: O(n)
- Space Complexity: O(n)

### Comparison of Approaches

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Recursion | O(2^n) | O(n) |
| Iteration | O(n) | O(1) |
| Dynamic Programming | O(n) | O(n) |

### LeetCode Link

https://leetcode.com/problems/fibonacci-number/