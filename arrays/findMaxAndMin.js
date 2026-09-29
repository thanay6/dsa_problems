// Find Maximum and Minimum
// Difficulty: Easy
// Topic: Arrays
// Pattern: Linear Traversal
// Problem Statement

// Given an array of numbers, find the maximum and minimum values in the array.

// Return an object containing:

// {
//     max: maximumValue,
//     min: minimumValue
// }
// Example
// findMinMax([10, 5, 20, 8, 15]);

// Expected:

// {
//     max: 20,
//     min: 5
// }


function findMinMax(arr) {

    if (arr.length === 0) {
        return {};
    }
    let max = arr[0];
    let min = arr[0];

    for (let num of arr) {
        if (num > max) max = num;
        if (num < min) min = num
    }

    return {
        max, min
    }

}

console.log("===== Find Maximum & Minimum Test Cases =====");

// 1. Normal array
console.log(findMinMax([10, 5, 20, 8, 15]));

// { max: 20, min: 5 }


// 2. Array in ascending order
console.log(findMinMax([1, 2, 3, 4, 5]));

// { max: 5, min: 1 }


// 3. Array in descending order
console.log(findMinMax([5, 4, 3, 2, 1]));

// { max: 5, min: 1 }


// 4. All positive numbers
console.log(findMinMax([10, 25, 7, 40, 15]));

// { max: 40, min: 7 }


// 5. All negative numbers
console.log(findMinMax([-10, -25, -7, -40, -15]));

// { max: -7, min: -40 }


// 6. Mixed positive and negative numbers
console.log(findMinMax([-10, 5, -3, 20, -15]));

// { max: 20, min: -15 }


// 7. Contains zero
console.log(findMinMax([0, 5, -2, 10, 3]));

// { max: 10, min: -2 }


// 8. Only positive duplicate values
console.log(findMinMax([5, 5, 5, 5]));

// { max: 5, min: 5 }


// 9. Duplicate maximum
console.log(findMinMax([10, 20, 20, 5, 15]));

// { max: 20, min: 5 }


// 10. Duplicate minimum
console.log(findMinMax([10, 5, 20, 5, 15]));

// { max: 20, min: 5 }


// 11. Maximum at the beginning
console.log(findMinMax([100, 20, 30, 40, 50]));

// { max: 100, min: 20 }


// 12. Minimum at the beginning
console.log(findMinMax([-100, -20, -30, -40, -50]));

// { max: -20, min: -100 }


// 13. Maximum at the end
console.log(findMinMax([10, 20, 30, 40, 100]));

// { max: 100, min: 10 }


// 14. Minimum at the end
console.log(findMinMax([50, 40, 30, 20, 10]));

// { max: 50, min: 10 }


// 15. Single element
console.log(findMinMax([42]));

// { max: 42, min: 42 }


// 16. Two elements
console.log(findMinMax([10, 5]));

// { max: 10, min: 5 }


// 17. Two negative elements
console.log(findMinMax([-10, -20]));

// { max: -10, min: -20 }


// 18. Large numbers
console.log(findMinMax([1000000, 5000000, 3000000, 9000000]));

// { max: 9000000, min: 1000000 }


// 19. Mixed large positive and negative numbers
console.log(findMinMax([-1000000, 5000000, -3000000, 9000000, 0]));

// { max: 9000000, min: -3000000 }


// 20. Long mixed array
console.log(findMinMax([
    15, -2, 30, 7, -10, 50, 3, -25, 100, 8
]));

// { max: 100, min: -25 }