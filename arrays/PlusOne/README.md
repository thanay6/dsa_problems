# Plus One

**LeetCode Problem:** [66. Plus One](https://leetcode.com/problems/plus-one/)

**Difficulty:** Easy

**Topic:** Arrays, Math

### Problem Statement

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the ith digit of the integer.

The digits are ordered from most significant to least significant, from left to right.

Increment the large integer by one and return the resulting array of digits.

### Examples

**Example 1:**

Input:
```javascript
digits = [1, 2, 3]
```
Output:
```javascript
[1, 2, 4]
```
Explanation: The array represents 123. Adding one gives 124.

**Example 2:**

Input:
```javascript
digits = [4, 3, 2, 1]
```
Output:
```javascript
[4, 3, 2, 2]
```
Explanation: The array represents 4321. Adding one gives 4322.

**Example 3:**

Input:
```javascript
digits = [9]
```
Output:
```javascript
[1, 0]
```
Explanation: The array represents 9. Adding one gives 10.

### Constraints

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading zeros.

### Approach 1: Convert Array to Number

1. Convert the array into a number.
2. Add 1 to the number.
3. Convert the result back into an array.

**Note:** This approach is not recommended because JavaScript numbers cannot safely represent arbitrarily large integers.

### Approach 2: Iteration (Recommended)

1. Start from the last index of the array.
2. If the current digit is less than 9, increment it and return the array.
3. If the current digit is 9, change it to 0.
4. Continue moving towards the left.
5. If all digits are 9, add 1 at the beginning of the array.

### Example Dry Run

Input:
```javascript
digits = [1, 2, 9]
```

| Step | Array | Action |
|---|---|---|
| Initial | [1, 2, 9] | Start from right |
| 1 | [1, 2, 0] | 9 becomes 0 |
| 2 | [1, 3, 0] | 2 becomes 3 |
| Final | [1, 3, 0] | Return array |

Output:
```javascript
[1, 3, 0]
```

### Complexity Analysis

Let `n` be the length of the input array.

| Complexity | Value | Reason |
|---|---|---|
| Time | O(n) | In the worst case, we traverse the entire array |
| Space | O(1) auxiliary | Only constant extra space is used, excluding the returned array |

### LeetCode Link

https://leetcode.com/problems/plus-one/