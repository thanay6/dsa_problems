
var swap = function (arr, i, j) {
    console.log(arr);
    console.log(i);
    console.log(j);

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var merge = function (nums1, m, nums2, n) {


    // let k = 0;
    // for (let i = m; i < m + n; i++) {
    //     nums1[i] = nums2[k];
    //     k++;
    // }

    // nums1.sort()
    // return nums1;

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {

        if (i >= 0 && nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
};
console.log("5", merge([3, 4, 5, 0, 0, 0], 3, [1, 2, 6], 3));
// Expected: [1,2,3,4,5,6]


