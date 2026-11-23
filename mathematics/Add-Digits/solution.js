

function addNumber(x) {

    let sum = 0;

    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }

    return sum;
}

function addDigits(num) {

    num = addNumber(num);

    while (num > 9) {
        num = addNumber(num);
    }

    return num;

}

console.log("===== Add Digits Test Cases =====");

// 1. Normal two-digit number
console.log("1 | Expected: 2 | Actual:", addDigits(38));

// 2. Zero
console.log("2 | Expected: 0 | Actual:", addDigits(0));

// 3. Single digit
console.log("3 | Expected: 5 | Actual:", addDigits(5));

// 4. Three-digit number
console.log("4 | Expected: 6 | Actual:", addDigits(123));

// 5. All digits are same
console.log("5 | Expected: 9 | Actual:", addDigits(999));

// 6. Number ending with zero
console.log("6 | Expected: 3 | Actual:", addDigits(120));

// 7. Multiple zeros
console.log("7 | Expected: 1 | Actual:", addDigits(1000));

// 8. Large number
console.log("8 | Expected: 9 | Actual:", addDigits(999999));

// 9. Sum requires multiple iterations
console.log("9 | Expected: 3 | Actual:", addDigits(99));

// 10. Number with repeated digits
console.log("10 | Expected: 8 | Actual:", addDigits(888));

// 11. Number with zeros in the middle
console.log("11 | Expected: 6 | Actual:", addDigits(105));

// 12. Already single digit zero
console.log("12 | Expected: 0 | Actual:", addDigits(0));

// 13. Two-digit sum equals nine
console.log("13 | Expected: 9 | Actual:", addDigits(45));

// 14. Two-digit sum exceeds nine
console.log("14 | Expected: 1 | Actual:", addDigits(19));

// 15. Four-digit number
console.log("15 | Expected: 1 | Actual:", addDigits(1234));

// 16. Five-digit number
console.log("16 | Expected: 6 | Actual:", addDigits(12345));

// 17. Number with alternating digits
console.log("17 | Expected: 3 | Actual:", addDigits(90909));

// 18. Number with multiple zeros
console.log("18 | Expected: 5 | Actual:", addDigits(10004));

// 19. Maximum 32-bit integer
console.log("19 | Expected: 1 | Actual:", addDigits(2147483647));

// 20. Number containing only ones
console.log("20 | Expected: 9 | Actual:", addDigits(111111111));

// 21. Number with digits summing to 18
console.log("21 | Expected: 9 | Actual:", addDigits(9999));

// 22. Number with digits summing to 10
console.log("22 | Expected: 1 | Actual:", addDigits(19));

// 23. Number with leading-like zeros
console.log("23 | Expected: 3 | Actual:", addDigits(30000));

// 24. Large number with mixed digits
console.log("24 | Expected: 9 | Actual:", addDigits(987654321));

// 25. Number with digits summing to 27
console.log("25 | Expected: 9 | Actual:", addDigits(999));