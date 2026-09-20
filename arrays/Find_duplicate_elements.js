

const duplicateElement = function (arr) {

    let map = new Map();
    let result = [];

    for (let n of arr) {
        map.set(n, (map.get(n) || 0) + 1);

    }

    for (let [key, value] of map) {
        if (value > 1) {
            result.push(key);
        }
    }
    return result;

}

console.log(duplicateElement([1, 2]));
// []

console.log(duplicateElement([1, 2, 3, 4]));
// []

console.log(duplicateElement([1, 1, 1, 1]));
// [1]

console.log(duplicateElement([1, 2, 1, 3, 2, 4]));
// [1, 2]

console.log(duplicateElement([]));
// []

console.log(duplicateElement([5]));
// []

console.log(duplicateElement(["a", "b", "a", "c", "b"]));
// ["a", "b"]