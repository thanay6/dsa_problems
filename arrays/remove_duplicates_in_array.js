
// Remove Duplicates from an Array
// Difficulty: Easy
// Topic: Arrays + Set
// Pattern: Duplicate Detection
// Problem Statement

// Given an array of values, remove all duplicate values and return a new array containing only unique values.

// The original order must be preserved.

// Example
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// Expected:

// [1, 2, 3, 4, 5]
// Function
// function removeDuplicates(arr) {
//     // your code
// }
// Requirements

// Try to solve this without using:

// [...new Set(arr)]

// You can use a Set manually because the goal is to practice how duplicate detection works.

// Target complexity:

// Time:  O(n)
// Space: O(n)


const removeDuplicates = function (nums) {
    // const set = new Set();
    // const arr1 = [];

    // for (let n of arr) {
    //     if(!set.has(n)){
    //         set.add(n);
    //         arr1.push(n)
    //     }
    // }


    const set = new Set();

    for (let num of nums) {
        if (!set.has(num)) {
            set.add(num);
        }
    }

    if (set.size !== nums.length) {
        return false;
    }

    return true;
}


console.log("===== Remove Duplicates Test Cases =====");

// 1. Normal array

console.log("1", removeDuplicates([1, 2, 3, 1]));

// [1, 2, 3, 4, 5]


// // 2. No duplicates

// console.log("2", removeDuplicates([1, 2, 3, 4, 5]));

// // [1, 2, 3, 4, 5]


// // 3. All values are duplicates

// console.log("3", removeDuplicates([5, 5, 5, 5, 5]));

// // [5]


// // 4. Duplicate values at the beginning

// console.log("4", removeDuplicates([1, 1, 1, 2, 3, 4]));

// // [1, 2, 3, 4]


// // 5. Duplicate values at the end

// console.log("5", removeDuplicates([1, 2, 3, 4, 4, 4]));

// // [1, 2, 3, 4]


// // 6. Duplicate values in the middle

// console.log("6", removeDuplicates([1, 2, 2, 3, 3, 4]));

// // [1, 2, 3, 4]


// // 7. Negative numbers

// console.log("7", removeDuplicates([-1, -2, -2, -3, -1]));

// // [-1, -2, -3]


// // 8. Mixed positive and negative numbers

// console.log("8", removeDuplicates([-1, 2, -1, 3, 2, 4]));

// // [-1, 2, 3, 4]


// // 9. Contains zero

// console.log("9", removeDuplicates([0, 1, 0, 2, 2, 3]));

// // [0, 1, 2, 3]


// // 10. Zero repeated

// console.log("10", removeDuplicates([0, 0, 0, 0]));

// // [0]


// // 11. Single element

// console.log("11", removeDuplicates([10]));

// // [10]


// // 12. Empty array

// console.log("12", removeDuplicates([]));

// // []


// // 13. Two identical elements

// console.log("13", removeDuplicates([7, 7]));

// // [7]


// // 14. Two different elements

// console.log("14", removeDuplicates([7, 8]));

// // [7, 8]


// // 15. Large numbers

// console.log("15", removeDuplicates([
//     1000000,
//     5000000,
//     1000000,
//     9000000,
//     5000000
// ]));

// // [1000000, 5000000, 9000000]


// // 16. Repeated pattern

// console.log("16", removeDuplicates([
//     1, 2, 1, 2, 1, 2
// ]));

// // [1, 2]


// // 17. Duplicate values with negative numbers

// console.log("17", removeDuplicates([
//     -5, -2, -5, 0, -2, 10
// ]));

// // [-5, -2, 0, 10]


// // 18. Already unique but unsorted

// console.log("18", removeDuplicates([
//     10, 5, 20, 3, 15
// ]));

// // [10, 5, 20, 3, 15]


// // 19. Long array

// console.log("19", removeDuplicates([
//     1, 2, 3, 2, 4, 5, 1, 6, 3, 7, 5, 8
// ]));

// // [1, 2, 3, 4, 5, 6, 7, 8]


// // 20. Many repeated values

// console.log("20", removeDuplicates([
//     10, 10, 20, 20, 30, 30, 10, 20, 40
// ]));

// // [10, 20, 30, 40]