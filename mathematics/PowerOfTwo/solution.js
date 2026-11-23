

function isPowerOfTwo (num){

    if (num <= 0) return false;
    if (num === 1) return true;
    while (num > 1) {
        console.log(num);

        if (num % 2 === 1) {
            return false
        }
        num = Math.floor(num / 2);
    }
    return true;

}


// 1. Zero
console.log("1 | Expected: false | Actual:", isPowerOfTwo(0));

// 2. One (2^0)
console.log("2 | Expected: true | Actual:", isPowerOfTwo(1));

// 3. Power of two
console.log("3 | Expected: true | Actual:", isPowerOfTwo(2));

// 4. Power of two
console.log("4 | Expected: true | Actual:", isPowerOfTwo(-16));

// 5. Power of two
console.log("5 | Expected: true | Actual:", isPowerOfTwo(1024));

// 6. Not a power of two
console.log("6 | Expected: false | Actual:", isPowerOfTwo(3));

// 7. Not a power of two
console.log("7 | Expected: false | Actual:", isPowerOfTwo(10));

// 8. Negative number
console.log("8 | Expected: false | Actual:", isPowerOfTwo(-16));

// 9. Large power of two
console.log("9 | Expected: true | Actual:", isPowerOfTwo(1073741824));

// 10. Maximum positive 32-bit integer
console.log("10 | Expected: false | Actual:", isPowerOfTwo(2147483647));

// 11. Minimum negative 32-bit integer
console.log("11 | Expected: false | Actual:", isPowerOfTwo(-2147483648));
