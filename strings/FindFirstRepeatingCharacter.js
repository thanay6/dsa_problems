
const firstRepeatingChar = function (str) {

    let set = new Set();

    for (let ch of str) {

        if (set.has(ch)) {
            return ch;
        }

        set.add(ch);
    }
    return -1;
}

console.log(firstRepeatingChar("tahany"));
console.log("===== First Repeating Character =====");

// 1. Normal case
console.log(firstRepeatingChar("tahany"));
// "a"

// 2. First character repeats
console.log(firstRepeatingChar("aabc"));
// "a"

// 3. Repetition in the middle
console.log(firstRepeatingChar("abccde"));
// "c"

// 4. Repetition at the end
console.log(firstRepeatingChar("abcdde"));
// "d"

// 5. No repeating characters
console.log(firstRepeatingChar("abcdef"));
// -1

// 6. All characters are same
console.log(firstRepeatingChar("aaaa"));
// "a"

// 7. Only one character
console.log(firstRepeatingChar("a"));
// -1

// 8. Empty string
console.log(firstRepeatingChar(""));
// -1

// 9. Two characters, repeated
console.log(firstRepeatingChar("aa"));
// "a"

// 10. Two characters, no repetition
console.log(firstRepeatingChar("ab"));
// -1

// 11. Multiple repeating characters
console.log(firstRepeatingChar("aabbcc"));
// "a"

// 12. First repeated character vs later repeated character
console.log(firstRepeatingChar("abcbd"));
// "b"

// 13. Uppercase and lowercase are different
console.log(firstRepeatingChar("aAbA"));
// "A"

// 14. Numbers
console.log(firstRepeatingChar("123241"));
// "2"

// 15. Special characters
console.log(firstRepeatingChar("!@#$!!"));
// "!"

// 16. Space character
console.log(firstRepeatingChar("ab cda"));
// "a"

// 17. Repeated spaces
console.log(firstRepeatingChar("a b c  d"));
// " "

// 18. Mixed characters
console.log(firstRepeatingChar("a1b2a3"));
// "a"

// 19. Negative-looking string
console.log(firstRepeatingChar("-1-2"));
// "-"

// 20. Long string
console.log(firstRepeatingChar("abcdefghijabcdefghij"));
// "a"