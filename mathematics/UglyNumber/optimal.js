

// this is optimal solution that is Repeated division 

// Initial value: 60
// 60

// Step 1: Divide by 2
// 60 ÷ 2

// 30

// 30 ÷ 2

// 15


// Step 2: Divide by 3
// 15 ÷ 3

// 5


// Step 3: Divide by 5
// 5 ÷ 5

function isUgly(n) {

    if (n <= 0) return false;

    while (n % 2 === 0) {
        n /= 2;
    }
    console.log("n after prime factor 2", n);

    while (n % 3 === 0) {
        n /= 3;
    }
    console.log("n after prime factor 3", n);
    while (n % 5 === 0) {
        n /= 5;
    }
    console.log("n after prime factor 5", n);
    return n === 1;
}

// 7. Eight
console.log("7 | Expected: true | Actual:", isUgly(26));
