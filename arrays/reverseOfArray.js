
const swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

const reverseOfArray = function (arr) {

    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    return arr
}

console.log(reverseOfArray([1, 2, 3, 4, 5]))