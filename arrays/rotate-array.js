// Rotate Array

// File name: 05-rotate-array.js

// Difficulty: Easy → Medium
// Topic: Arrays
// Pattern: Array Manipulation
// Problem Statement

// Given an array arr and an integer k, rotate the array to the right by k positions.

// Return the rotated array.

// Example
// rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

// Expected:

// [5, 6, 7, 1, 2, 3, 4]

// Because:

// Original:
// [1, 2, 3, 4, 5, 6, 7]

// Rotate 1:
// [7, 1, 2, 3, 4, 5, 6]

// Rotate 2:
// [6, 7, 1, 2, 3, 4, 5]

// Rotate 3:
// [5, 6, 7, 1, 2, 3, 4]


// function swap(arr, i) {
//     let temp = arr[0];
//     arr[0] = arr[i];
//     arr[i] = temp;
// }

// function rotateArray(arr, k) {

//     if(arr.length === 0){
//         return [];
//     }
//     let i = k % arr.length;
//     // your code

//     console.log(`i is ${i}`)

//     while (i > 0) {
//         for (let j = 1; j < arr.length; j++) {

//             swap(arr, j);
//         }
//         i--;
//     }

//     return arr;
// }

// function rotateArray(arr, k) {
//     if (arr.length === 0) {
//         return [];
//     }

//     let i = k % arr.length;

//     while (i > 0) {

//         const last = arr[arr.length - 1]

//         for (let j = arr.length - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];

//         }
//         arr[0] = last;

//         i--;
//     }

//     return arr;
// }

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function reverseOfArray(arr, start, end) {

    while (start < end) {

        swap(arr, start, end);
        start++;
        end--
    }

    return arr;
}

function rotateArray(arr, k) {

    if (arr.length === 0) {
        return [];
    }

    let rotations = k % arr.length;

    reverseOfArray(arr, 0, arr.length - 1);

    reverseOfArray(arr, 0, rotations - 1);
    reverseOfArray(arr, rotations, arr.length - 1);

    return arr;

}





console.log("===== Rotate Array Test Cases =====");

// 1. Normal array
console.log(
    "1\nExpected: [5, 6, 7, 1, 2, 3, 4]\nActual:",
    rotateArray([1, 2, 3, 4, 5, 6, 7], 3)
);

// 2. Rotate by 1
console.log(
    "2\nExpected: [5, 1, 2, 3, 4]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 1)
);

// 3. Rotate by 2
console.log(
    "3\nExpected: [4, 5, 1, 2, 3]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 2)
);

// 4. Rotate by 3
console.log(
    "4\nExpected: [3, 4, 5, 1, 2]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 3)
);

// 5. Rotate by array length
console.log(
    "5\nExpected: [1, 2, 3, 4, 5]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 5)
);

// 6. Rotate more than array length
console.log(
    "6\nExpected: [4, 5, 1, 2, 3]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 7)
);

// 7. Rotate by zero
console.log(
    "7\nExpected: [1, 2, 3, 4, 5]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 0)
);

// 8. Single element
console.log(
    "8\nExpected: [10]\nActual:",
    rotateArray([10], 5)
);

// 9. Two elements
console.log(
    "9\nExpected: [2, 1]\nActual:",
    rotateArray([1, 2], 1)
);

// 10. Two elements rotated twice
console.log(
    "10\nExpected: [1, 2]\nActual:",
    rotateArray([1, 2], 2)
);

// 11. Negative numbers
console.log(
    "11\nExpected: [-4, -5, -1, -2, -3]\nActual:",
    rotateArray([-1, -2, -3, -4, -5], 2)
);

// 12. Mixed positive and negative
console.log(
    "12\nExpected: [10, 3, -2, 5, -1]\nActual:",
    rotateArray([-2, 5, -1, 10, 3], 2)
);

// 13. Contains zero
console.log(
    "13\nExpected: [3, 4, 0, 1, 2]\nActual:",
    rotateArray([0, 1, 2, 3, 4], 2)
);

// 14. Duplicate values
console.log(
    "14\nExpected: [2, 3, 3, 1, 1, 2]\nActual:",
    rotateArray([1, 1, 2, 2, 3, 3], 2)
);

// 15. All same values
console.log(
    "15\nExpected: [5, 5, 5, 5]\nActual:",
    rotateArray([5, 5, 5, 5], 3)
);

// 16. Large k
console.log(
    "16\nExpected: [4, 5, 1, 2, 3]\nActual:",
    rotateArray([1, 2, 3, 4, 5], 12)
);

// 17. Large numbers
console.log(
    "17\nExpected: [3000000, 4000000, 1000000, 2000000]\nActual:",
    rotateArray([1000000, 2000000, 3000000, 4000000], 2)
);

// 18. Decimal values
console.log(
    "18\nExpected: [4.5, 1.5, 2.5, 3.5]\nActual:",
    rotateArray([1.5, 2.5, 3.5, 4.5], 1)
);

// 19. Long array
console.log(
    "19\nExpected: [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]\nActual:",
    rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)
);

// 20. Rotate by a value much larger than length
console.log(
    "20\nExpected: [30, 40, 50, 60, 10, 20]\nActual:",
    rotateArray([10, 20, 30, 40, 50, 60], 100)
);
