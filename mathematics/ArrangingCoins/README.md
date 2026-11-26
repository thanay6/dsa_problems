# Arranging Coins

**LeetCode Problem:** [441. Arranging Coins](https://leetcode.com/problems/arranging-coins/)

**Difficulty:** Easy

**Topics:** Math, Binary Search

### Problem Statement

You have `n` coins and you want to build a staircase with these coins.

The staircase consists of `k` rows, where the ith row has exactly `i` coins.

The last row of the staircase may be incomplete.

Given the integer `n`, return the number of complete rows of the staircase you can build.

### Examples

**Example 1:**

Input:
```javascript
n = 5
```

Output:
```javascript
2
```

Explanation:

```text
Row 1: 1 coin
Row 2: 2 coins
Row 3: Incomplete
```

You can build 2 complete rows.

**Example 2:**

Input:
```javascript
n = 8
```

Output:
```javascript
2
```

Explanation:

```text
Row 1: 1 coin
Row 2: 2 coins
Row 3: 3 coins
Row 4: Incomplete
```

You can build 2 complete rows.

### Constraints

- `1 <= n <= 2^31 - 1`

### Approach 1: Iteration (Brute Force)

1. Initialize a variable `row = 1`.
2. Check whether you have enough coins to complete the current row.
3. If enough coins are available, subtract the row number from `n`.
4. Increment the row number.
5. Continue until you don't have enough coins.
6. Return the number of completed rows.

### Approach 2: Mathematics

The total number of coins required to build `k` complete rows is:

\[
1 + 2 + 3 + \cdots + k = \frac{k(k+1)}{2}
\]

We need to find the maximum `k` satisfying:

\[
\frac{k(k+1)}{2} \leq n
\]

Solving the quadratic equation gives:

\[
k = \frac{\sqrt{8n+1}-1}{2}
\]

Taking the floor gives the number of complete rows.

### Approach 3: Binary Search

We can also use binary search to find the maximum number of complete rows.

1. Set `left = 0`.
2. Set `right = n`.
3. Calculate the middle value.
4. Calculate the coins required for the middle number of rows.
5. If the required coins are less than or equal to `n`, search the right half.
6. Otherwise, search the left half.

### Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|---|---|---|
| Iteration | O(√n) | O(1) |
| Mathematics | O(1) | O(1) |
| Binary Search | O(log n) | O(1) |

### LeetCode Link

https://leetcode.com/problems/arranging-coins/