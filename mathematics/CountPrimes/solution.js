

function isPrime(n) {
    console.log(n);
    if (n === 0 || n === 1) return false;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(23));

function countPrimes(n) {
    let count = 0;

    let i = 0;
    while (i < n) {
        if (isPrime(i)) count++;
        i++;
    }

    return count;
}

// 1. Zero
console.log("1 | Expected: 0 | Actual:", countPrimes(0));

// 2. One
console.log("2 | Expected: 0 | Actual:", countPrimes(1));

// 3. Two
console.log("3 | Expected: 0 | Actual:", countPrimes(2));

// 4. Three
console.log("4 | Expected: 1 | Actual:", countPrimes(3));

// 5. Four
console.log("5 | Expected: 2 | Actual:", countPrimes(4));

// 6. Five
console.log("6 | Expected: 2 | Actual:", countPrimes(5));

// 7. Ten
console.log("7 | Expected: 4 | Actual:", countPrimes(10));

// 8. Fifteen
console.log("8 | Expected: 6 | Actual:", countPrimes(15));

// 9. Twenty
console.log("9 | Expected: 8 | Actual:", countPrimes(20));

// 10. Twenty-five
console.log("10 | Expected: 9 | Actual:", countPrimes(25));

// 11. Thirty
console.log("11 | Expected: 10 | Actual:", countPrimes(30));

// 12. Fifty
console.log("12 | Expected: 15 | Actual:", countPrimes(50));

// 13. Hundred
console.log("13 | Expected: 25 | Actual:", countPrimes(100));

// 14. Thousand
console.log("14 | Expected: 168 | Actual:", countPrimes(1000));

// 15. Ten thousand
console.log("15 | Expected: 1229 | Actual:", countPrimes(10000));

// 16. Maximum constraint
console.log("16 | Expected: 348513 | Actual:", countPrimes(5000000));