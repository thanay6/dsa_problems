


function isPrime(n) {

    if (n <= 1) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isUgly(n) {
    if (n <= 0) return false;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i) && n % i === 0) {
            if (!(i === 2 || i === 5 || i === 3)) return false;
        }
    }
    return true;
}
// 1. Zero
console.log("1 | Expected: false | Actual:", isUgly(0));

// 2. One
console.log("2 | Expected: true | Actual:", isUgly(1));

// 3. Two
console.log("3 | Expected: true | Actual:", isUgly(2));

// 4. Three
console.log("4 | Expected: true | Actual:", isUgly(3));

// 5. Five
console.log("5 | Expected: true | Actual:", isUgly(5));

// 6. Six
console.log("6 | Expected: true | Actual:", isUgly(6));

// 7. Eight
console.log("7 | Expected: true | Actual:", isUgly(8));

// 8. Ten
console.log("8 | Expected: true | Actual:", isUgly(10));

// 9. Twelve
console.log("9 | Expected: true | Actual:", isUgly(12));

// 10. Fifteen
console.log("10 | Expected: true | Actual:", isUgly(15));

// 11. Twenty-five
console.log("11 | Expected: true | Actual:", isUgly(25));

// 12. Thirty
console.log("12 | Expected: true | Actual:", isUgly(30));

// 13. Fourteen
console.log("13 | Expected: false | Actual:", isUgly(14));

// 14. Twenty-one
console.log("14 | Expected: false | Actual:", isUgly(21));

// 15. Twenty-two
console.log("15 | Expected: false | Actual:", isUgly(22));

// 16. Forty-nine
console.log("16 | Expected: false | Actual:", isUgly(49));

// 17. Negative number
console.log("17 | Expected: false | Actual:", isUgly(-6));

// 18. Hundred
console.log("18 | Expected: true | Actual:", isUgly(100));

// 19. One hundred twenty-one
console.log("19 | Expected: false | Actual:", isUgly(121));

// 20. Maximum 32-bit integer
console.log("20 | Expected: false | Actual:", isUgly(2147483647));