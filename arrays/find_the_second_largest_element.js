

let secondLargest = function (arr) {

    let max = arr[0];

    for (let n of arr) {
        if (n > max) {
            max = n;
        }
    }

    let secondLargest = arr[0];

    for (let n of arr) {
        if (n > secondLargest && n < max){
            secondLargest = n;
        }
    }
    return secondLargest;


}

console.log(secondLargest([10]))