// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:

// -231 <= x <= 231 - 1


var reverse = function (x) {
    const INT_MIN = -(2 ** 31); // max negative integer number
    const INT_MAX = 2 ** 31 - 1; // max integer number

    let neg = x < 0;
    x = Math.abs(x); // make x positive

    let rev = 0;

    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    if (neg) {
        rev = -rev;
    }

    return (rev < INT_MIN || rev > INT_MAX) ? 0 : rev;
};


// var reverse = function (x) {
//     let neg = false
//     if (x < 0) {
//         neg = true;
//         x = x * (-1);
//     }

//     let rev = 0;

//     while (x > 0) {
//         rev = (rev * 10) + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     if (neg) {
//         rev = rev * (-1);
//     }
//     return rev


// };



console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(1534236469)); 