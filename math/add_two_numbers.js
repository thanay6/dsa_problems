// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers.

// The digits are stored in reverse order, and each of their nodes contains a single digit.

// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1

// Input

// l1 = [2,4,3]
// l2 = [5,6,4]

// These represent:

// 342
// 465

// because the digits are stored in reverse order.

// Addition:

// 342 + 465 = 807

// Return:

// [7,0,8]

// since

// 807

// is stored in reverse order.

// Example 2

// Input

// l1 = [0]
// l2 = [0]

// Output

// [0]
// Example 3

// Input

// l1 = [9,9,9,9,9,9,9]
// l2 = [9,9,9,9]

// These represent:

// 9,999,999
// 9,999

// Addition:

// 10,009,998

// Return:

// [8,9,9,9,0,0,0,1]
var addTwoNumbers = function (l1, l2) {
    let num1 = 0;
    let num2 = 0;

    for (let i = l1.length - 1; i >= 0; i--) {
        num1 = (num1 * 10) + l1[i];
    }
    for (let i = l2.length - 1; i >= 0; i--) {
        num2 = (num2 * 10) + l2[i];
    }
    console.log("num1   ", num1)
    console.log("num2   ", num2)

    let res = num1 + num2
    console.log("res", res)
    const result = []

    while (res > 0) {
        const val = res % 10;
        result.push(val);
        res = Math.floor(res / 10);

    }

    return result;

};

// var addTwoNUmbers2 = function(l1, l2) {
//     const result = [];

//     let carry = 0;

//     while()
// }

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9, 9], [0]))