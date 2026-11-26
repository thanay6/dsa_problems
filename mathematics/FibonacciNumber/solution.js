
// finocice series for n numbers


function fib(n) {

    let arr = [];

    if (n === 0) return 0;
    if (n === 1) return 1;

    for (let i = 0; i <= n; i++) {

        if (i === 0) arr.push(0);
        else if (i === 1) arr.push(1);
        else arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr);
    
    return arr[n];
}


console.log("4 | Expected: 2 | Actual:", fib(3));
