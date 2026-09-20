
const sortedArray = function (arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) { return false }
    }
    return true;
}

// console.log(sortedArray([1, 2, 3, 4, 5]));
// console.log(sortedArray([5, 4, 3, 2, 1]));
// console.log(sortedArray([1, 1, 2, 2, 3]));
// console.log(sortedArray([1, 2, 2, 3, 4]));
// console.log(sortedArray([1, 3, 2, 4, 5]));
console.log(sortedArray([5]));
console.log(sortedArray([]));
// console.log(sortedArray([1, 2]));
// console.log(sortedArray([2, 1]));
// console.log(sortedArray([-5, -3, -1, 0, 2]));
// console.log(sortedArray([-1, -2, -3]));