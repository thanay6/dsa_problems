/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const map = new Map();

    for (let num of nums) {
        map.set(num, ((map.get(num)) || 0) + 1)
    }

    console.log(map);


    let maxCount = 0;
    let majority;
    for (let [key, value] of map) {

        console.log(`key ${key}, value ${value}`);

        if (value > maxCount) {
            console.log(`key ${key}, value ${value}`);
            maxCount = value;
            majority = key;
        }
    }

    return majority;
};


console.log("1", majorityElement([6, 5, 5]));
// Expected: 3