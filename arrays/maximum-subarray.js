// Maximum Subarray Sum

// File name: 06-maximum-subarray.js

// Difficulty: Medium
// Topic: Arrays
// Pattern: Kadane's Algorithm
// Problem Statement

// Given an integer array arr, find the contiguous subarray that has the largest sum.

// Return the maximum sum.

// A subarray must contain at least one element.

// Example
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// Expected:

// 6

// Because the maximum-sum contiguous subarray is:

// [4, -1, 2, 1]

// and:

// 4 + (-1) + 2 + 1 = 6
// Function
// function maxSubArray(arr) {
//     // your code
// }
// Target

// Try to achieve:

// Time:  O(n)
// Space: O(1)

// function maxSubArray(arr) {

//     let maxSum = -Infinity;

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j <= arr.length - 1; j++) {
//             let sum = 0;
//             for (let k = j; k < j + i; k++) {
//                 sum += arr[k];
//             }
//             console.log("sum ", sum)
//             if (sum > maxSum) {
//                 console.log("max sum ", sum)
//                 maxSum = sum;
//             }
//         }
//     }

//     return maxSum

// }


function maxSubArray(arr) {

    let maxSum = -Infinity;

    for (let i = arr.length; i > 0; i--) {

        for (let j = 0; j <= arr.length - i; j++) {

            let sum = 0;

            for (let k = j; k < j + i; k++) {
                sum += arr[k];
            }

            console.log("sum ", sum)
            if (sum > maxSum) {
                console.log("max sum ", sum)
                maxSum = sum;
            }
        }
    }

    return maxSum;
}
// console.log("===== Maximum Subarray Test Cases =====");

// // 1. Normal case
// console.log(
//     "1\nExpected: 6\nActual:",
//     maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// );

// // 2. All positive numbers
// console.log(
//     "2\nExpected: 15\nActual:",
//     maxSubArray([1, 2, 3, 4, 5])
// );

// // 3. All negative numbers
// console.log(
//     "3\nExpected: -1\nActual:",
//     maxSubArray([-5, -2, -8, -1, -3])
// );

// // 4. Single positive element
// console.log(
//     "4\nExpected: 10\nActual:",
//     maxSubArray([10])
// );

// // 5. Single negative element
// console.log(
//     "5\nExpected: -10\nActual:",
//     maxSubArray([-10])
// );

// // 6. Two positive numbers
// console.log(
//     "6\nExpected: 15\nActual:",
//     maxSubArray([5, 10])
// );

// // 7. Two negative numbers
// console.log(
//     "7\nExpected: -5\nActual:",
//     maxSubArray([-5, -10])
// );

// // 8. Positive and negative numbers
// console.log(
//     "8\nExpected: 5\nActual:",
//     maxSubArray([5, -2, 3, -1])
// );

// // 9. Maximum subarray at the beginning
// console.log(
//     "9\nExpected: 30\nActual:",
//     maxSubArray([10, 20, -30, 1, 2])
// );

// // 10. Maximum subarray at the end
// console.log(
//     "10\nExpected: 6\nActual:",
//     maxSubArray([-10, -5, 1, 2, 3])
// );

// // 11. Maximum subarray in the middle
// console.log(
//     "11\nExpected: 9\nActual:",
//     maxSubArray([-5, -2, 4, 5, -1, -10])
// );

// // 12. Contains zero
// console.log(
//     "12\nExpected: 7\nActual:",
//     maxSubArray([-2, 0, -1, 3, 4])
// );

// // 13. All zeroes
// console.log(
//     "13\nExpected: 0\nActual:",
//     maxSubArray([0, 0, 0, 0])
// );

// // 14. Zero and negative numbers
// console.log(
//     "14\nExpected: 0\nActual:",
//     maxSubArray([-5, 0, -2, -3])
// );

// // 15. Large positive value
// console.log(
//     "15\nExpected: 550\nActual:",
//     maxSubArray([-100, 500, -50, 100])
// );

// // 16. Large negative values
// console.log(
//     "16\nExpected: -1000000\nActual:",
//     maxSubArray([-1000000, -5000000, -3000000])
// );

// // 17. Alternating values
// console.log(
//     "17\nExpected: 35\nActual:",
//     maxSubArray([10, -20, 30, -5, 10])
// );

// // 18. Maximum requires multiple elements
// console.log(
//     "18\nExpected: 9\nActual:",
//     maxSubArray([-2, 3, 4, -1, 2, 1, -5])
// );

// // 19. Strong negative values between positives
// console.log(
//     "19\nExpected: 90\nActual:",
//     maxSubArray([5, -100, 20, 30, 40])
// );

// 20. Long mixed array
console.log(
    "20\nExpected: 13\nActual:",
    maxSubArray([-5, 4, -1, 7, -8, 2, 3, 4, -2, 5])
);
