// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Note: The algorithm must run in $O(N)$ time complexity.
// Example 1:
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4 (The longest consecutive elements sequence is [1, 2, 3, 4], so its length is 4).

// Example 2:  Input: [0, 3, 7, 2, 5, 8, 4, 6, 10, 1]
// Longest Sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Output: 9

// Example3:  Input:  [-3, -2, -1, 5, 6, 7, 10]
// Longest Sequence: [-3, -2, -1]
// Output: 3

const longestConsecutive = function (arr) {

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] - 1){
            return i+1;
        }
    }

    return 0;

}

console.log("===== Longest Consecutive Elements Test Cases =====");

// 1. Normal case
console.log("1", longestConsecutive([100, 4, 200, 1, 3, 2]));
// 4

// 2. Simple consecutive sequence
console.log("2", longestConsecutive([1, 2, 3, 4, 5]));
// 5

// 3. No consecutive elements
console.log("3", longestConsecutive([10, 20, 30, 40]));
// 1

// 4. Single element
console.log("4", longestConsecutive([5]));
// 1

// 5. Empty array
console.log("5", longestConsecutive([]));
// 0

// 6. Duplicate elements
console.log("6", longestConsecutive([1, 2, 2, 3, 4]));
// 4

// 7. All duplicates
console.log("7", longestConsecutive([5, 5, 5, 5]));
// 1

// 8. Unsorted sequence
console.log("8", longestConsecutive([3, 5, 1, 2, 4]));
// 5

// 9. Negative numbers
console.log("9", longestConsecutive([-3, -2, -1, 0, 1]));
// 5

// 10. Negative and positive
console.log("10", longestConsecutive([-5, -4, -3, 1, 2, 3]));
// 3

// 11. Sequence around zero
console.log("11", longestConsecutive([-2, -1, 0, 1, 2]));
// 5

// 12. Multiple sequences
console.log("12", longestConsecutive([1, 2, 3, 10, 11, 12, 13]));
// 4

// 13. Longer sequence in the middle
console.log("13", longestConsecutive([1, 2, 10, 11, 12, 13, 14, 20]));
// 5

// 14. Duplicates in multiple sequences
console.log("14", longestConsecutive([1, 2, 2, 3, 5, 5, 6, 7]));
// 3

// 15. Sequence starts at zero
console.log("15", longestConsecutive([0, 1, 2, 3]));
// 4

// 16. Only negative numbers
console.log("16", longestConsecutive([-5, -4, -3, -2, -1]));
// 5

// 17. Large gap
console.log("17", longestConsecutive([1, 2, 3, 100, 101, 102]));
// 3

// 18. Two elements consecutive
console.log("18", longestConsecutive([10, 11]));
// 2

// 19. Two elements not consecutive
console.log("19", longestConsecutive([10, 12]));
// 1

// 20. Mixed duplicates and unsorted values
console.log("20", longestConsecutive([9, 1, 4, 7, 3, 2, 6, 8, 5, 5]));
// 9

// 21. Large consecutive sequence
console.log("21", longestConsecutive([50, 47, 48, 49, 46, 45]));
// 6

// 22. Multiple equal-length sequences
console.log("22", longestConsecutive([1, 2, 3, 10, 11, 12]));
// 3

// 23. Sequence with zero and negatives
console.log("23", longestConsecutive([-3, -2, -1, 0, 5, 6]));
// 4

// 24. Random order
console.log("24", longestConsecutive([20, 1, 9, 3, 2, 8, 4]));
// 4

// 25. Very large values
console.log("25", longestConsecutive([1000000, 999999, 1000001, 1000002]));
// 4