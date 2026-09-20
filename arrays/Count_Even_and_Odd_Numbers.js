

const countEvenOdd = function (arr) {

    let even = 0;
    let odd = 0;

    for (let n of arr) {
        n % 2 === 0 ? even++ : odd++;
    }
    return { even, odd }
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
console.log(countEvenOdd([]));
// { even: 0, odd: 0 }

console.log(countEvenOdd([2]));
// { even: 1, odd: 0 }

console.log(countEvenOdd([3]));
// { even: 0, odd: 1 }

console.log(countEvenOdd([2, 4, 6, 8]));
// { even: 4, odd: 0 }

console.log(countEvenOdd([1, 3, 5, 7]));
// { even: 0, odd: 4 }

console.log(countEvenOdd([0]));
// { even: 1, odd: 0 }

console.log(countEvenOdd([0, 1, 2, 3]));
// { even: 2, odd: 2 }

console.log(countEvenOdd([-1, -2, -3, -4]));
// { even: 2, odd: 2 }

console.log(countEvenOdd([2, 2, 2, 3, 3]));
// { even: 3, odd: 2 }

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
// { even: 3, odd: 3 }