
const findElementAppearOnce = function (arr) {

    let map = new Map();

    for (let n of arr) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    for (let [key, value] of map) {

        if (value === 1) {
            return key;
        }
    }
    return -1;
}

console.log(findElementAppearOnce([4, 1, 2, 1, 2]));

console.log("===== Find Element Appears Once =====");

// 1. Standard case
console.log(findElementAppearOnce([4, 1, 2, 1, 2]));
// 4

// 2. Single element
console.log(findElementAppearOnce([7]));
// 7

// 3. Three elements
console.log(findElementAppearOnce([2, 2, 1]));
// 1

// 4. Single element at the beginning
console.log(findElementAppearOnce([1, 2, 2, 3, 3]));
// 1

// 5. Single element at the end
console.log(findElementAppearOnce([1, 1, 2, 2, 3]));
// 3

// 6. Single element in the middle
console.log(findElementAppearOnce([1, 1, 5, 2, 2]));
// 5

// 7. Negative numbers
console.log(findElementAppearOnce([-1, 2, 2]));
// -1

// 8. Negative single element
console.log(findElementAppearOnce([-5, -2, -2]));
// -5

// 9. Zero is the single element
console.log(findElementAppearOnce([1, 1, 0, 2, 2]));
// 0

// 10. Zero appears as a pair
console.log(findElementAppearOnce([0, 0, 5, 5, 7]));
// 7

// 11. Large numbers
console.log(findElementAppearOnce([100, 200, 100, 300, 300]));
// 200

// 12. Unsorted array
console.log(findElementAppearOnce([9, 4, 9, 7, 4]));
// 7

// 13. Multiple pairs
console.log(findElementAppearOnce([1, 2, 3, 4, 3, 2, 1]));
// 4

// 14. Negative and positive numbers
console.log(findElementAppearOnce([-1, 2, -1, 3, 2]));
// 3

// 15. All same except one
console.log(findElementAppearOnce([5, 5, 5, 5, 8]));
// 8

// 16. Single element at beginning with negatives
console.log(findElementAppearOnce([-10, 1, 1, 2, 2]));
// -10

// 17. Empty array
console.log(findElementAppearOnce([]));
// 0 with XOR version
// -1 with Map version

// 18. Two elements
console.log(findElementAppearOnce([1, 2]));
// Depends on problem validity:
// XOR → 3
// Map → 1
// This is NOT a valid input if exactly one element should appear once