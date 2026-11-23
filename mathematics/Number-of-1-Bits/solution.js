


function numberOf1Bits(n) {

    const str = convertToBits(n)

    let sum = 0;
    for (char of str) {

        const val = parseInt(char);

        sum += val;
    }
    return sum;
}

function convertToBits(n) {

    let bits = "";

    while (n > 0) {
        let rem = n % 2;
        bits = rem + bits;
        n = Math.floor(n/2);

    }
    return bits || "0";
}

console.log("11 | Expected: 3 | Actual:", numberOf1Bits(11));
console.log("128 | Expected: 1 | Actual:", numberOf1Bits(128));
console.log("2147483645 | Expected: 30 | Actual:", numberOf1Bits(2147483645));
console.log("1 | Expected: 1 | Actual:", numberOf1Bits(1));
console.log("2 | Expected: 1 | Actual:", numberOf1Bits(2));
console.log("3 | Expected: 2 | Actual:", numberOf1Bits(3));
console.log("4 | Expected: 1 | Actual:", numberOf1Bits(4));
console.log("7 | Expected: 3 | Actual:", numberOf1Bits(7));
console.log("8 | Expected: 1 | Actual:", numberOf1Bits(8));
console.log("15 | Expected: 4 | Actual:", numberOf1Bits(15));
console.log("16 | Expected: 1 | Actual:", numberOf1Bits(16));
console.log("31 | Expected: 5 | Actual:", numberOf1Bits(31));
console.log("32 | Expected: 1 | Actual:", numberOf1Bits(32));
console.log("63 | Expected: 6 | Actual:", numberOf1Bits(63));
console.log("64 | Expected: 1 | Actual:", numberOf1Bits(64));
console.log("100 | Expected: 3 | Actual:", numberOf1Bits(100));
console.log("255 | Expected: 8 | Actual:", numberOf1Bits(255));
console.log("256 | Expected: 1 | Actual:", numberOf1Bits(256));
console.log("1023 | Expected: 10 | Actual:", numberOf1Bits(1023));
console.log("1024 | Expected: 1 | Actual:", numberOf1Bits(1024));