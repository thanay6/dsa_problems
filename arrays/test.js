
function test(arr, limit) {

    let count = 0;
    let max = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= limit && arr[i] > arr[i - 1]) {
            count++;
        }
        else {
            // max = Math.max(count, max);
            count = 0;
        }
        max = Math.max(count, max);

    }


    return max;
}

console.log(test([1, 2, 0, 3, 7, 9, 10], 4));


console.log(test([1, 5, 3, 4, 8, 5, 6, 4], 4));

console.log(test([1, 2, 8, 5, 4], 4));


