

var arrangeCoins = function (n) {
    for (let i = 1; i <= n; i++) {

        if ((i * (i + 1)) / 2 > n) return i - 1;
        if ((i * (i + 1)) / 2 === n) return i;
    }
    // return i-1

    // let i = 0;
    // while (i <= n) {

        
    //     if ((i * (i + 1)) / 2 > n) return i - 1;
    //     else if ((i * (i + 1)) / 2 === n) return i;

    //     i++
    // }

};




// 1. Minimum input
console.log("1 | Expected: 1 | Actual:", arrangeCoins(1));

// 2. Normal input
console.log("2 | Expected: 2 | Actual:", arrangeCoins(5));

// 3. Normal input
console.log("3 | Expected: 2 | Actual:", arrangeCoins(8));

// 4. Exact complete rows (1 + 2 + 3)
console.log("4 | Expected: 3 | Actual:", arrangeCoins(6));

// 5. Exact complete rows (1 + 2 + 3 + 4)
console.log("5 | Expected: 4 | Actual:", arrangeCoins(10));

// 6. One coin less than required for 4 rows
console.log("6 | Expected: 3 | Actual:", arrangeCoins(9));

// 7. One coin more than required for 3 rows
console.log("7 | Expected: 3 | Actual:", arrangeCoins(7));

// 8. Larger input
console.log("8 | Expected: 4 | Actual:", arrangeCoins(15));

// 9. Large input
console.log("9 | Expected: 13 | Actual:", arrangeCoins(100));

// 10. Maximum constraint
console.log("10 | Expected: 65535 | Actual:", arrangeCoins(2147483647));
