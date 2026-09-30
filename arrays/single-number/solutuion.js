/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    // let singleNumber;

    // const map = new Map();

    // for (let num of nums) {

    //     map.set(num, ((map.get(num) || 0) + 1));

    // }

    // console.log(map);
    

    // for (let [key, value] of map) {
    //     if (value === 1)
    //         return key;
    // }
    // return -1;

    let xor ;

    for(let num of nums){
        xor = xor^num;
    }

    return xor;
};

console.log("1", singleNumber([2, 2, 1]));
// Expected: 1