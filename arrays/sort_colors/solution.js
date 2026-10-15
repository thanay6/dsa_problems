/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var swap = function (nums, i, j){

    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

 }
var sortColors = function (nums) {

    const n = nums.length;
    let i = 0;
    let k = n - 1;

    let j = n % 2 === 0 ? (n / 2) - 1 : Math.floor(n / 2);

    while (i < n / 2) {

        if(nums[i] === 0){
            i++;
        }
        else if( nums[i] === 1){
            swap(nums, i, j);
            j++;
        }
        else{
            swap(nums, i, k);
            k--;
        }
    }

    return nums;

};