//Count occurrences of elements.

const count_occurrences = function (arr) {
    const map = new Map();

    for (let n of arr) {

        map.set(n, (map.get(n) || 0) + 1)

    }
    return map;
} 

console.log(count_occurrences([1,2,1,2,1,2,3,2,3,4]));
