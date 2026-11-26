
// finocice series for n numbers


function fib(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


console.log("4 | Expected: 2 | Actual:", fib(0));
console.log("4 | Expected: 2 | Actual:", fib(1));
console.log("4 | Expected: 2 | Actual:", fib(2));
console.log("4 | Expected: 2 | Actual:", fib(3));
