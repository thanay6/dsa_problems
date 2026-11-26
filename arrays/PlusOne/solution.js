
// for this solution the issue is i am converting the array into  
var plusOne = function (digits) {

    let number = 0;

    for (const n of digits) {
        console.log("n in digit is", n);

        number = number * 10
        console.log("number after it",number);
        number +=n;
        console.log("number after it add ",number);
    }

    console.log("number is", number);

    number += 1;
    let arr = [];

    while (number > 0) {
        const val = number % 10;
        arr.push(val);
        number = Math.floor(number / 10);
    }

    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;


};

console.log("1 | Expected: [1, 2, 4] | Actual:", plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
