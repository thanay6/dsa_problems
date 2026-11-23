


function reverseInteger(n) {


    let neg = n < 0;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    if (n < INT_MIN || n > INT_MAX) {
        return 0;
    }

    if (neg) {
        n *= -1;
    }

    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    if (neg) {
        rev *= -1;
    }

    if (rev < INT_MIN || rev > INT_MAX) {
        return 0;
    }

    return rev;

}

console.log("===== Reverse Integer Test Cases =====");


// 1. Normal positive number
console.log("1", reverseInteger(123));
// 321


// 2. Negative number
console.log("2", reverseInteger(-123));
// -321


// 3. Number ending with zero
console.log("3", reverseInteger(120));
// 21


// 4. Single digit
console.log("4", reverseInteger(5));
// 5


// 5. Zero
console.log("5", reverseInteger(0));
// 0


// 6. Negative number ending with zero
console.log("6", reverseInteger(-120));
// -21


// 7. Two digit number
console.log("7", reverseInteger(45));
// 54


// 8. All digits are same
console.log("8", reverseInteger(1111));
// 1111


// 9. Number with multiple trailing zeros
console.log("9", reverseInteger(1000));
// 1


// 10. Negative number with multiple trailing zeros
console.log("10", reverseInteger(-1000));
// -1


// 11. Large positive number
console.log("11", reverseInteger(123456));
// 654321


// 12. Large negative number
console.log("12", reverseInteger(-123456));
// -654321


// 13. Maximum 32-bit integer
console.log("13", reverseInteger(2147483647));
// 0


// 14. Minimum 32-bit integer
console.log("14", reverseInteger(-2147483648));
// 0


// 15. Positive overflow after reversing
console.log("15", reverseInteger(1534236469));
// 0


// 16. Negative overflow after reversing
console.log("16", reverseInteger(-1563847412));
// 0


// 17. Number with internal zeros
console.log("17", reverseInteger(10203));
// 30201


// 18. Negative number with internal zeros
console.log("18", reverseInteger(-10203));
// -30201


// 19. Number with repeated digits
console.log("19", reverseInteger(12221));
// 12221


// 20. Number with alternating digits
console.log("20", reverseInteger(12345));
// 54321


// 21. Smallest positive two-digit number
console.log("21", reverseInteger(10));
// 1


// 22. Smallest negative two-digit number
console.log("22", reverseInteger(-10));
// -1


// 23. Number whose reverse is exactly maximum 32-bit integer
console.log("23", reverseInteger(7463847412));
// 0 (input itself is outside the 32-bit range; not a valid LeetCode input)


// 24. Number with zeros in the middle
console.log("24", reverseInteger(10020));
// 2001


// 25. Negative number with zeros in the middle
console.log("25", reverseInteger(-10020));
// -2001