

const secondLargestElement = function (arr) {


    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num < largest && num > secondLargest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;

}

console.log("===== Second Largest Element Test Cases =====");

// 1. Normal array
console.log("1", secondLargestElement([10, 5, 8, 10, 3]));
// 8


// 2. All elements are same
console.log("2", secondLargestElement([5, 5, 5, 5]));
// -1


// 3. Only two elements
console.log("3", secondLargestElement([10, 9]));
// 9


// 4. Single element
console.log("4", secondLargestElement([1]));
// -1


// 5. Negative numbers
console.log("5", secondLargestElement([-10, -5, -20, -3]));
// -5


// 6. Duplicate largest values
console.log("6", secondLargestElement([2, 1, 2, 1, 0]));
// 1


// 7. Duplicate values
console.log("7", secondLargestElement([-5, -5, -3, -3, -10]));
// -5


// 8. Largest element at beginning
console.log("8", secondLargestElement([10, 5, 8, 3, 2]));
// 8


// 9. Largest element at end
console.log("9", secondLargestElement([5, 8, 3, 2, 10]));
// 8


// 10. Negative and positive numbers
console.log("10", secondLargestElement([-10, 5, -2, 8, 3]));
// 5


// 11. Zero as second largest
console.log("11", secondLargestElement([-5, 0, -10, 0, -2]));
// -2


// 12. Second largest is negative
console.log("12", secondLargestElement([-1, -5, -10, -20]));
// -5


// 13. Two distinct values with duplicates
console.log("13", secondLargestElement([7, 7, 7, 3, 3, 3]));
// 3


// 14. Already sorted ascending
console.log("14", secondLargestElement([1, 2, 3, 4, 5]));
// 4


// 15. Already sorted descending
console.log("15", secondLargestElement([5, 4, 3, 2, 1]));
// 4


// 16. Decimal numbers
console.log("16", secondLargestElement([1.5, 3.5, 2.5, 4.5]));
// 3.5


// 17. Zero and negative values
console.log("17", secondLargestElement([0, -1, -2, -3]));
// -1


// 18. Large numbers
console.log(
    "18",
    secondLargestElement([1000000000, 500000000, 900000000, 200000000])
);
// 900000000


// 19. Long array
console.log(
    "19",
    secondLargestElement([12, 45, 7, 89, 23, 56, 89, 34, 78, 10])
);
// 78


// 20. Many duplicates
console.log(
    "20",
    secondLargestElement([10, 10, 10, 8, 8, 5, 5, 3])
);
// 8