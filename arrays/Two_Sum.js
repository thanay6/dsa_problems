
const twoSum = function (arr, target) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log("===== Two Sum Test Cases =====");

// 1. Normal case
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

// 2. Pair in the middle
console.log(twoSum([3, 2, 4], 6));
// [1, 2]

// 3. Pair at the end
console.log(twoSum([1, 3, 5, 7], 12));
// [2, 3]

// 4. Negative numbers
console.log(twoSum([-3, 4, 3, 90], 0));
// [0, 2]

// 5. Both numbers negative
console.log(twoSum([-5, -3, -2, -7], -10));
// [1, 3]

// 6. Duplicate values
console.log(twoSum([3, 3], 6));
// [0, 1]

// 7. Multiple duplicate values
console.log(twoSum([2, 7, 2, 7], 9));
// [0, 1]

// 8. Zero values
console.log(twoSum([0, 0], 0));
// [0, 1]

// 9. Negative + positive
console.log(twoSum([-1, 5, 3, 2], 4));
// [0, 1]

// 10. No pair exists
console.log(twoSum([1, 2, 3], 10));
// []

// 11. Empty array
console.log(twoSum([], 5));
// []

// 12. Single element
console.log(twoSum([5], 5));
// []

// 13. Two elements - pair exists
console.log(twoSum([2, 8], 10));
// [0, 1]

// 14. Two elements - no pair
console.log(twoSum([2, 8], 20));
// []

// 15. Pair using first and last
console.log(twoSum([1, 2, 3, 4, 5], 6));
// [0, 4]

// 16. Negative target
console.log(twoSum([-10, -5, 2, 7], -3));
// [0, 3]

// 17. Decimal numbers
console.log(twoSum([1.5, 2.5, 4, 6], 4));
// [0, 1]

// 18. Large numbers
console.log(twoSum([1000000000, 2000000000, 3000000000], 5000000000));
// [1, 2]

// 19. Pair appears later
console.log(twoSum([10, 20, 30, 40, 50], 90));
// [3, 4]

// 20. Same number required twice
console.log(twoSum([1, 5, 3, 5], 10));
// [1, 3]
console.log(twoSum([2, 7, 11, 15], 10));