

function plusOne(digits) {

    let i = digits.length - 1;
    while (digits[i] === 9 && i >= 0) {
        digits[i] = 0;
        i--;
    }
     if (i < 0) {
        digits.unshift(1);
        return digits;
    }

    digits[i] +=1;
    return digits;
}
console.log("1 | Expected: [1, 2, 4] | Actual:", plusOne([9]));
