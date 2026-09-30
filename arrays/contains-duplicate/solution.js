var containsDuplicate = function (nums) {

    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) { return true; }
        else {

            set.add(num);
        }

    }
    return false;
};

console.log("===== Contains Duplicate Test Cases =====");

console.log("1", containsDuplicate([1, 2, 3, 1]));
// Expected: true

console.log("2", containsDuplicate([1, 2, 3, 4]));
// Expected: false

console.log("3", containsDuplicate([1, 1]));
// Expected: true

console.log("4", containsDuplicate([1]));
// Expected: false

console.log("5", containsDuplicate([1, 2, 2, 3]));
// Expected: true

console.log("6", containsDuplicate([1, 2, 3, 4, 5]));
// Expected: false

console.log("7", containsDuplicate([5, 5, 5, 5]));
// Expected: true

console.log("8", containsDuplicate([-1, -2, -3, -1]));
// Expected: true

console.log("9", containsDuplicate([-1, -2, -3, -4]));
// Expected: false

console.log("10", containsDuplicate([0, 0]));
// Expected: true

console.log("11", containsDuplicate([0, 1, 2, 3, 0]));
// Expected: true

console.log("12", containsDuplicate([10, 20, 30, 40, 50]));
// Expected: false

console.log("13", containsDuplicate([10, 20, 30, 20, 40]));
// Expected: true

console.log("14", containsDuplicate([7, 8, 9, 7, 10]));
// Expected: true

console.log("15", containsDuplicate([100, 200, 300, 400]));
// Expected: false

console.log("16", containsDuplicate([100, 200, 300, 100]));
// Expected: true

console.log("17", containsDuplicate([-10, -20, -30, -40, -50]));
// Expected: false

console.log("18", containsDuplicate([-10, -20, -30, -10]));
// Expected: true

console.log("19", containsDuplicate([1, 2, 3, 4, 5, 1]));
// Expected: true

console.log("20", containsDuplicate([1, 2, 3, 4, 5, 6]));
// Expected: false