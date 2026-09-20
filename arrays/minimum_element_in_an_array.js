

var findMin = function (arr) {

    let min = arr[0];

    for (let n of arr) {
        if (n <= min) {
            min = n;
        }
    }
    return min;

};

//we can also try with sorting of array then it will be time complicity n(log(n))

console.log(findMin([23, 43, 0, 43, 2, 3, 4, -1]))