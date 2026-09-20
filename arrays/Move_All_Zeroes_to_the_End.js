
const swap = function (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// const moveZeros = function (arr) {

//     let i = 0;
//     let j = i + 1;

//     while (i < arr.length && j< arr.length) {

//         if (arr[i] !== 0 ){
//             i++; j++;
//         }
//         else if ( arr[i]=== 0 && arr[j] === 0){
//             j++;
//         }
//         else {
//             swap ( arr, i, j);
//             i++;j++
//         }
//     }
//     return arr;
// }

const moveZeros = function (arr) {
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            swap(arr, i, j);
            i++;
        }
    }

    return arr;
};

console.log(moveZeros([]));

console.log(moveZeros([0]));

console.log(moveZeros([1]));

console.log(moveZeros([0, 0, 0, 0]));

console.log(moveZeros([1, 2, 3, 4]));

console.log(moveZeros([0, 1, 2, 3]));

console.log(moveZeros([1, 2, 3, 0]));

console.log(moveZeros([0, 0, 1, 2]));

console.log(moveZeros([1, 0, 0, 2]));

console.log(moveZeros([1, 0, 2, 0, 1]));

console.log(moveZeros([0, 1, 0, 2, 0, 3]));

console.log(moveZeros([-1, 0, -2, 0, 3]));

console.log(moveZeros([0, -1, 0, -2]));
