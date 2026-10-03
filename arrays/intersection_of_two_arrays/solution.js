/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    const arr = [];

    const map = new Map();

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        const count = map.get(num) || 0;

        if (count > 0) {
            arr.push(num);
            map.set(num, count - 1);
        }
    }

    return arr;


};

console.log("6", intersect([3, 1, 2], [1, 1]));
// Expected: [1, 1]