

var removeDuplicates = function (nums) {

    
    let i =0;

    for(let j =1; j< nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];

        }
    }

    return i+1;
}


console.log("===== Remove Duplicates Test Cases =====");

// 1. Basic duplicate
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("1", k1, nums1.slice(0, k1));
// 2 [1, 2]


// 2. Multiple duplicates
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("2", k2, nums2.slice(0, k2));
// 5 [0, 1, 2, 3, 4]


// 3. No duplicates
let nums3 = [1, 2, 3, 4, 5];
let k3 = removeDuplicates(nums3);
console.log("3", k3, nums3.slice(0, k3));
// 5 [1, 2, 3, 4, 5]


// 4. All duplicates
let nums4 = [2, 2, 2, 2, 2];
let k4 = removeDuplicates(nums4);
console.log("4", k4, nums4.slice(0, k4));
// 1 [2]


// 5. Single element
let nums5 = [1];
let k5 = removeDuplicates(nums5);
console.log("5", k5, nums5.slice(0, k5));
// 1 [1]


// 6. Two different elements
let nums6 = [1, 2];
let k6 = removeDuplicates(nums6);
console.log("6", k6, nums6.slice(0, k6));
// 2 [1, 2]


// 7. Two same elements
let nums7 = [5, 5];
let k7 = removeDuplicates(nums7);
console.log("7", k7, nums7.slice(0, k7));
// 1 [5]


// 8. Negative numbers
let nums8 = [-5, -5, -3, -3, -1, 0, 0, 2];
let k8 = removeDuplicates(nums8);
console.log("8", k8, nums8.slice(0, k8));
// 5 [-5, -3, -1, 0, 2]


// 9. Negative values only
let nums9 = [-5, -5, -5, -2, -2, -1];
let k9 = removeDuplicates(nums9);
console.log("9", k9, nums9.slice(0, k9));
// 3 [-5, -2, -1]


// 10. Zero duplicates
let nums10 = [0, 0, 0, 0];
let k10 = removeDuplicates(nums10);
console.log("10", k10, nums10.slice(0, k10));
// 1 [0]


// 11. Alternating duplicate groups
let nums11 = [1, 1, 2, 2, 3, 3, 4, 4];
let k11 = removeDuplicates(nums11);
console.log("11", k11, nums11.slice(0, k11));
// 4 [1, 2, 3, 4]


// 12. Large duplicate groups
let nums12 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
let k12 = removeDuplicates(nums12);
console.log("12", k12, nums12.slice(0, k12));
// 4 [1, 2, 3, 4]


// 13. Negative to positive
let nums13 = [-3, -3, -2, -1, -1, 0, 1, 1, 2];
let k13 = removeDuplicates(nums13);
console.log("13", k13, nums13.slice(0, k13));
// 6 [-3, -2, -1, 0, 1, 2]


// 14. All unique negative numbers
let nums14 = [-5, -4, -3, -2, -1];
let k14 = removeDuplicates(nums14);
console.log("14", k14, nums14.slice(0, k14));
// 5 [-5, -4, -3, -2, -1]


// 15. Large values
let nums15 = [100, 100, 200, 200, 300, 300];
let k15 = removeDuplicates(nums15);
console.log("15", k15, nums15.slice(0, k15));
// 3 [100, 200, 300]


// 16. Repeated minimum
let nums16 = [-100, -100, -100, -50, 0, 0, 50];
let k16 = removeDuplicates(nums16);
console.log("16", k16, nums16.slice(0, k16));
// 4 [-100, -50, 0, 50]


// 17. Repeated maximum
let nums17 = [1, 2, 3, 100, 100, 100];
let k17 = removeDuplicates(nums17);
console.log("17", k17, nums17.slice(0, k17));
// 4 [1, 2, 3, 100]


// 18. One unique value followed by duplicates
let nums18 = [1, 2, 2, 2, 2, 2];
let k18 = removeDuplicates(nums18);
console.log("18", k18, nums18.slice(0, k18));
// 2 [1, 2]


// 19. Many unique values
let nums19 = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8];
let k19 = removeDuplicates(nums19);
console.log("19", k19, nums19.slice(0, k19));
// 8 [1, 2, 3, 4, 5, 6, 7, 8]


// 20. Larger test case
let nums20 = [
    -5, -5,
    -4, -4,
    -3, -3,
    -2,
    -1, -1,
    0, 0,
    1,
    2, 2,
    3, 3,
    4,
    5, 5
];

let k20 = removeDuplicates(nums20);
console.log("20", k20, nums20.slice(0, k20));
// 11 [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]