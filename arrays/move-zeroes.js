// Move Zeroes

// File name: 04-move-zeroes.js

// Difficulty: Easy
// Topic: Arrays
// Pattern: Two Pointers
// Problem Statement

// Given an array of numbers, move all zeroes to the end of the array while maintaining the relative order of all non-zero elements.

// You should modify the original array rather than creating a completely new array.

// Return the modified array.

// Example
// moveZeroes([0, 1, 0, 3, 12]);

// Expected:

// [1, 3, 12, 0, 0]
// Function
// function moveZeroes(arr) {
//     // your code
// }
// Requirements

// Try to solve this using O(n) time and O(1) extra space.

function swap(arr, i, j) {
    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}



// function moveZeroes(arr) {
//     // your code


//     const result = [];

//     for (let num of arr) {
//         if (num !== 0) {
//             result.push(num);
//         }
//     }

//     if (result.length !== arr.length) {
//         let n = result.length;

//         while (n < arr.length){
//             result.push(0);
//             n++;

//         }
//     }

//     return result;
// }

function moveZeroes(arr) {

    let i = 0;
    for (let j = 0; j < arr.length; j++) {

        if (arr[j] !== 0) {
            swap(arr, i, j);
            i++;
        }
    }
    return arr;
}

console.log("===== Move Zeroes Test Cases =====");

// 1. Normal array

console.log("1", moveZeroes([0, 1, 0, 3, 12]));

// [1, 3, 12, 0, 0]


// 2. Zeroes at the beginning

console.log("2", moveZeroes([0, 0, 1, 2, 3]));

// [1, 2, 3, 0, 0]


// 3. Zeroes at the end

console.log("3", moveZeroes([1, 2, 3, 0, 0]));

// [1, 2, 3, 0, 0]


// 4. Zeroes in the middle

console.log("4", moveZeroes([1, 0, 2, 0, 3]));

// [1, 2, 3, 0, 0]


// 5. All zeroes

console.log("5", moveZeroes([0, 0, 0, 0]));

// [0, 0, 0, 0]


// 6. No zeroes

console.log("6", moveZeroes([1, 2, 3, 4, 5]));

// [1, 2, 3, 4, 5]


// 7. Single zero

console.log("7", moveZeroes([0]));

// [0]


// 8. Single non-zero value

console.log("8", moveZeroes([5]));

// [5]


// 9. Two elements - zero first

console.log("9", moveZeroes([0, 5]));

// [5, 0]


// 10. Two elements - zero last

console.log("10", moveZeroes([5, 0]));

// [5, 0]


// 11. Negative numbers

console.log("11", moveZeroes([0, -1, 0, -2, 3]));

// [-1, -2, 3, 0, 0]


// 12. Mixed positive and negative numbers

console.log("12", moveZeroes([-1, 0, 5, 0, -3, 2]));

// [-1, 5, -3, 2, 0, 0]


// 13. Zero between every number

console.log("13", moveZeroes([1, 0, 2, 0, 3, 0, 4]));

// [1, 2, 3, 4, 0, 0, 0]


// 14. Multiple consecutive zeroes

console.log("14", moveZeroes([1, 0, 0, 0, 2, 3]));

// [1, 2, 3, 0, 0, 0]


// 15. Zero at the beginning and end

console.log("15", moveZeroes([0, 1, 2, 3, 0]));

// [1, 2, 3, 0, 0]


// 16. Large numbers

console.log("16", moveZeroes([0, 1000000, 0, 5000000, 0, 9000000]));

// [1000000, 5000000, 9000000, 0, 0, 0]


// 17. Decimal numbers

console.log("17", moveZeroes([0, 1.5, 0, 2.5, 3.5]));

// [1.5, 2.5, 3.5, 0, 0]


// 18. Already correctly arranged

console.log("18", moveZeroes([1, 2, 3, 0, 0, 0]));

// [1, 2, 3, 0, 0, 0]


// 19. Long array

console.log("19", moveZeroes([
    0, 1, 0, 2, 3, 0, 4, 0, 5, 6
]));

// [1, 2, 3, 4, 5, 6, 0, 0, 0, 0]


// 20. Mixed values and many zeroes

console.log("20", moveZeroes([
    0, -5, 0, 10, 0, -2, 0, 20, 0
]));

// [-5, 10, -2, 20, 0, 0, 0, 0, 0]