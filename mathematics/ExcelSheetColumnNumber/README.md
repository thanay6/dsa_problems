# Excel Sheet Column Number

**LeetCode Problem:** [171. Excel Sheet Column Number](https://leetcode.com/problems/excel-sheet-column-number/)

**Difficulty:** Easy

**Topics:** Math, String, Hash Table

### Problem Statement

Given a string `columnTitle` that represents the column title as it appears in an Excel sheet, return its corresponding column number.

Excel columns follow this pattern:

| Column Title | Column Number |
|---|---:|
| A | 1 |
| B | 2 |
| C | 3 |
| ... | ... |
| Z | 26 |
| AA | 27 |
| AB | 28 |
| AC | 29 |
| ... | ... |
| AZ | 52 |
| BA | 53 |
| ZZ | 702 |
| AAA | 703 |

### Examples

**Example 1:**

Input:
```javascript
columnTitle = "A"
```

Output:
```javascript
1
```

**Example 2:**

Input:
```javascript
columnTitle = "AB"
```

Output:
```javascript
28
```

Explanation:

```text
A = 1
B = 2

AB = (1 × 26) + 2 = 28
```

**Example 3:**

Input:
```javascript
columnTitle = "ZY"
```

Output:
```javascript
701
```

Explanation:

```text
Z = 26
Y = 25

ZY = (26 × 26) + 25 = 701
```

### Constraints

- `1 <= columnTitle.length <= 7`
- `columnTitle` consists only of uppercase English letters.
- `columnTitle` is in the range `["A", "FXSHRXW"]`.

### Approach: Iteration (Base 26)

Excel column numbers work similarly to a number system with base 26.

However, unlike normal base-26 numbering, Excel columns start from 1 instead of 0.

Assign values:

```text
A = 1
B = 2
C = 3
...
Z = 26
```

For every character, calculate:

\[
result = result \times 26 + characterValue
\]

### Example Dry Run

Input:

```javascript
columnTitle = "AB"
```

**Step 1:**

Character = A

```text
A = 1

result = 0 × 26 + 1
result = 1
```

**Step 2:**

Character = B

```text
B = 2

result = 1 × 26 + 2
result = 28
```

Final Output:

```javascript
28
```

### JavaScript Character Conversion

You can use:

```javascript
char.charCodeAt(0) - 64
```

Why?

```text
A = 65 in ASCII
B = 66 in ASCII
Z = 90 in ASCII
```

Therefore:

```text
A = 65 - 64 = 1
B = 66 - 64 = 2
Z = 90 - 64 = 26
```

### Complexity Analysis

Let `n` be the length of `columnTitle`.

| Complexity | Value | Reason |
|---|---|---|
| Time | O(n) | Iterate through every character |
| Space | O(1) | Only a constant number of variables |

### LeetCode Link

https://leetcode.com/problems/excel-sheet-column-number/