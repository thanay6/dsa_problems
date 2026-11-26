# Reverse Linked List

**LeetCode:** [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

**Difficulty:** Easy

## Problem Statement

Given the `head` of a singly linked list, reverse the list and return the reversed list.

## Examples

**Example 1:**

```text
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

```text
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```text
Input: head = []
Output: []
```

## Constraints

- The number of nodes in the list is in the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Approaches to Practice

### 1. Iterative Approach (Recommended)

Use three pointers:

- `prev`: Stores the previous node. Initially `null`.
- `current`: Points to the current node. Initially `head`.
- `next`: Temporarily stores the next node before changing the link.

Steps:

1. Store `current.next` in `next`.
2. Reverse the current node's link: `current.next = prev`.
3. Move `prev` to `current`.
4. Move `current` to `next`.
5. Repeat until `current` becomes `null`.
6. Return `prev` as the new head.

**Time Complexity:** O(n)

**Space Complexity:** O(1)

### 2. Recursive Approach

- Base case: If `head` is `null` or `head.next` is `null`, return `head`.
- Recursively reverse the remaining linked list.
- Change the next node's link to point back to the current node.
- Set the current node's `next` to `null`.
- Return the new head.

**Time Complexity:** O(n)

**Space Complexity:** O(n) due to the recursion call stack.

## Important Concepts

- Singly linked list
- Node references
- Pointer manipulation
- Iteration vs recursion
- In-place reversal