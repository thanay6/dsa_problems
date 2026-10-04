/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;

    for(let i = 0; i< nums.length; i++){

        let rightSum = totalSum - leftSum - nums[i];

        if(leftSum === rightSum){
            return i;
        }



        leftSum += nums[i];
    }

    return -1;

};

console.log("1", pivotIndex([1,2,3,6,4]));
// Expected: 3