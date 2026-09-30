/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let sum = 0;

    for(let num of nums){
        sum += num;
    }
    const n = nums.length;
    const actualSum = (n*(n+1))/2;

    return actualSum - sum;
    
};

console.log("===== Missing Number Test Cases =====");

console.log("1", missingNumber([3, 0, 1]));
// Expected: 2

console.log("2", missingNumber([0, 1]));
// Expected: 2

console.log("3", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Expected: 8

console.log("4", missingNumber([0]));
// Expected: 1

console.log("5", missingNumber([1]));
// Expected: 0

console.log("6", missingNumber([0, 1, 2, 3, 4]));
// Expected: 5

console.log("7", missingNumber([1, 2, 3, 4, 5]));
// Expected: 0

console.log("8", missingNumber([0, 2, 3, 4, 5]));
// Expected: 1

console.log("9", missingNumber([0, 1, 3, 4]));
// Expected: 2

console.log("10", missingNumber([0, 1, 2, 4, 5]));
// Expected: 3

console.log("11", missingNumber([1, 2]));
// Expected: 0

console.log("12", missingNumber([0, 2]));
// Expected: 1

console.log("13", missingNumber([0, 1, 2, 3, 5, 6]));
// Expected: 4

console.log("14", missingNumber([1, 2, 3, 4]));
// Expected: 0

console.log("15", missingNumber([0, 1, 2, 4]));
// Expected: 3

console.log("16", missingNumber([0, 1, 2, 3, 4, 6]));
// Expected: 5

console.log("17", missingNumber([2, 0, 1]));
// Expected: 3

console.log("18", missingNumber([4, 0, 3, 1]));
// Expected: 2

console.log("19", missingNumber([1, 0, 3]));
// Expected: 2

console.log("20", missingNumber([0, 3, 1]));
// Expected: 2