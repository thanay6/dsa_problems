

function isPowerOfThree(num){

    if(num <= 0) return false;

    while(num>1){
        num /= 3;

        if(!Number.isInteger(num)) return false;
        
    }

    return true;
}


// 1. Basic power of three
console.log("1 | Expected: true | Actual:", isPowerOfThree(3));

// 2. Power of three
console.log("2 | Expected: true | Actual:", isPowerOfThree(9));

// 3. Larger power of three
console.log("3 | Expected: true | Actual:", isPowerOfThree(27));

// 4. Another power of three
console.log("4 | Expected: true | Actual:", isPowerOfThree(81));

// 5. One (3^0)
console.log("5 | Expected: true | Actual:", isPowerOfThree(1));

// 6. Zero
console.log("6 | Expected: false | Actual:", isPowerOfThree(0));

// 7. Negative number
console.log("7 | Expected: false | Actual:", isPowerOfThree(-3));

// 8. Negative power-like number
console.log("8 | Expected: false | Actual:", isPowerOfThree(-27));

// 9. Not a power of three
console.log("9 | Expected: false | Actual:", isPowerOfThree(10));

// 10. Not a power of three
console.log("10 | Expected: false | Actual:", isPowerOfThree(45));

// 11. Maximum valid power of three within constraints
console.log("11 | Expected: true | Actual:", isPowerOfThree(1162261467));

// 12. Maximum positive 32-bit integer
console.log("12 | Expected: false | Actual:", isPowerOfThree(2147483647));
