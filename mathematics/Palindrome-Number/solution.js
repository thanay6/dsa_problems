
function ReverseInteger(n) {

    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;

        n = Math.floor(n / 10);
    }
    return rev;
}

function isPalindrome(x) {


    if (x < 0) return false;

    const rev = ReverseInteger(x);

    return (rev === x) ? true : false;

}

console.log("===== Palindrome Number Test Cases =====");

// 1. Normal palindrome
console.log("1 | Expected: true | Actual:", isPalindrome(121));

// 2. Negative number
console.log("2 | Expected: false | Actual:", isPalindrome(-121));

// 3. Number ending with zero
console.log("3 | Expected: false | Actual:", isPalindrome(10));

// 4. Single digit
console.log("4 | Expected: true | Actual:", isPalindrome(5));

// 5. Zero
console.log("5 | Expected: true | Actual:", isPalindrome(0));

// 6. Two digit palindrome
console.log("6 | Expected: true | Actual:", isPalindrome(11));

// 7. Two digit non-palindrome
console.log("7 | Expected: false | Actual:", isPalindrome(12));

// 8. All digits are same
console.log("8 | Expected: true | Actual:", isPalindrome(1111));

// 9. Multiple zeros at the end
console.log("9 | Expected: false | Actual:", isPalindrome(1000));

// 10. Multiple zeros in the middle
console.log("10 | Expected: true | Actual:", isPalindrome(1001));

// 11. Large palindrome
console.log("11 | Expected: true | Actual:", isPalindrome(1234321));

// 12. Large non-palindrome
console.log("12 | Expected: false | Actual:", isPalindrome(123456));

// 13. Negative palindrome-like number
console.log("13 | Expected: false | Actual:", isPalindrome(-121));

// 14. Even number of digits palindrome
console.log("14 | Expected: true | Actual:", isPalindrome(1221));

// 15. Even number of digits non-palindrome
console.log("15 | Expected: false | Actual:", isPalindrome(1231));

// 16. Odd number of digits palindrome
console.log("16 | Expected: true | Actual:", isPalindrome(12321));

// 17. Odd number of digits non-palindrome
console.log("17 | Expected: false | Actual:", isPalindrome(12345));

// 18. Number with zeros in the middle
console.log("18 | Expected: true | Actual:", isPalindrome(10201));

// 19. Number with multiple repeated digits
console.log("19 | Expected: true | Actual:", isPalindrome(112211));

// 20. Number with leading-like zeros after reversal
console.log("20 | Expected: true | Actual:", isPalindrome(1000000001));

// 21. Maximum 32-bit integer
console.log("21 | Expected: false | Actual:", isPalindrome(2147483647));

// 22. Minimum 32-bit integer
console.log("22 | Expected: false | Actual:", isPalindrome(-2147483648));

// 23. Palindrome with repeated pattern
console.log("23 | Expected: true | Actual:", isPalindrome(123321));

// 24. Number with different first and last digits
console.log("24 | Expected: false | Actual:", isPalindrome(123421));

// 25. Smallest two-digit palindrome
console.log("25 | Expected: true | Actual:", isPalindrome(11));