function fib(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1) + fib(n-2);
}


console.log("4 | Expected: 2 | Actual:", fib(0));
console.log("4 | Expected: 2 | Actual:", fib(1));
console.log("4 | Expected: 2 | Actual:", fib(2));
console.log("4 | Expected: 2 | Actual:", fib(3));
