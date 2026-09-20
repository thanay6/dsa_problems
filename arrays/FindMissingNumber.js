const findMissingNumber = function (arr) {

    const n = arr.length;

    const sum = (n * (n + 1)) / 2;

    let arrSum = 0;

    for (let n of arr) {

        arrSum += n;
    }

    return sum - arrSum;
}

console.log(findMissingNumber([1,3,2]));
console.log("===== Find Missing Number Test Cases =====");

// 1. Example
console.log(findMissingNumber([3, 0, 1]));
// 2

// 2. Missing 0
console.log(findMissingNumber([1, 2, 3]));
// 0

// 3. Missing last number
console.log(findMissingNumber([0, 1, 2]));
// 3

// 4. Missing number in the middle
console.log(findMissingNumber([0, 1, 3]));
// 2

// 5. Missing 1
console.log(findMissingNumber([0, 2, 3]));
// 1

// 6. Only one number: missing 0
console.log(findMissingNumber([1]));
// 0

// 7. Only one number: missing 1
console.log(findMissingNumber([0]));
// 1

// 8. Empty array
console.log(findMissingNumber([]));
// 0

// 9. Two elements - missing 0
console.log(findMissingNumber([1, 2]));
// 0

// 10. Two elements - missing 1
console.log(findMissingNumber([0, 2]));
// 1

// 11. Two elements - missing 2
console.log(findMissingNumber([0, 1]));
// 2

// 12. Larger array - missing middle
console.log(findMissingNumber([0, 1, 2, 4, 5]));
// 3

// 13. Larger array - missing first
console.log(findMissingNumber([1, 2, 3, 4, 5]));
// 0

// 14. Larger array - missing last
console.log(findMissingNumber([0, 1, 2, 3, 4]));
// 5

// 15. Unsorted array
console.log(findMissingNumber([4, 0, 3, 1]));
// 2

// 16. Unsorted array
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 8

// 17. Missing number near the beginning
console.log(findMissingNumber([0, 2, 3, 4, 5]));
// 1

// 18. Missing number near the end
console.log(findMissingNumber([0, 1, 2, 3, 5]));
// 4

// 19. Larger example
console.log(findMissingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9]));
// 5

// 20. Missing 0 from larger range
console.log(findMissingNumber([1, 2, 3, 0, 5, 6, 7, 8, 9, 10]));
// 0