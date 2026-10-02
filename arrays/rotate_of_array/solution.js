/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var rotation = function (arr, i, j) {

    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }


}
var rotate = function (nums, k) {

    const n = nums.length;

    k = k % n;

    rotation(nums, 0, n - k - 1);
    rotation(nums, n - k, n - 1);
    rotation(nums, 0, n - 1);
    return nums;

};

let a1 = [1];
rotate(a1, 10);
console.log("1", a1);
// Expected: [5, 6, 7, 1, 2, 3, 4]