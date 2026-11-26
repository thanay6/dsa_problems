

function isPowerOfFour(n) {

    if (n === 1) return true;

    if(n<=0 || n% 4 !== 0) return false;

    return isPowerOfFour(n/4);
}



// 1. Minimum power of four (4^0)
console.log("1 | Expected: true | Actual:", isPowerOfFour(1));

// 2. First power of four
console.log("2 | Expected: true | Actual:", isPowerOfFour(4));

// 3. Second power of four
console.log("3 | Expected: true | Actual:", isPowerOfFour(16));

// 4. Third power of four
console.log("4 | Expected: true | Actual:", isPowerOfFour(64));

// 5. Larger power of four
console.log("5 | Expected: true | Actual:", isPowerOfFour(256));

// 6. Another power of four
console.log("6 | Expected: true | Actual:", isPowerOfFour(1024));

// 7. Zero
console.log("7 | Expected: false | Actual:", isPowerOfFour(0));

// 8. Negative number
console.log("8 | Expected: false | Actual:", isPowerOfFour(-4));

// 9. Not a power of four
console.log("9 | Expected: false | Actual:", isPowerOfFour(5));

// 10. Power of two but not power of four
console.log("10 | Expected: false | Actual:", isPowerOfFour(8));

// 11. Power of two but not power of four
console.log("11 | Expected: false | Actual:", isPowerOfFour(32));

// 12. Large number
console.log("12 | Expected: false | Actual:", isPowerOfFour(2147483647));
