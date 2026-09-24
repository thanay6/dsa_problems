

const nonRepeatingChar = function (str) {
    let map = new Map();


    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let [key, value] of map) {

        if (value === 1) {
            return key;
        }
    }

    return " "
}

console.log(nonRepeatingChar("swiss"));
console.log("===== Non-Repeating Character Test Cases =====");

// 1. Normal case
console.log(nonRepeatingChar("swiss"));
// "w"

// 2. Another normal case
console.log(nonRepeatingChar("leetcode"));
// "l"

// 3. First character is non-repeating
console.log(nonRepeatingChar("abcabcde"));
// "d"

// 4. Last character is non-repeating
console.log(nonRepeatingChar("aabbc"));
// "c"

// 5. Non-repeating character in the middle
console.log(nonRepeatingChar("aabbccdef"));
// "d"

// 6. Only one character
console.log(nonRepeatingChar("a"));
// "a"

// 7. Two different characters
console.log(nonRepeatingChar("ab"));
// "a"

// 8. All characters repeat
console.log(nonRepeatingChar("aabb"));
// -1

// 9. All characters are the same
console.log(nonRepeatingChar("aaaa"));
// -1

// 10. Empty string
console.log(nonRepeatingChar(""));
// -1

// 11. Single character repeated
console.log(nonRepeatingChar("aaaab"));
// "b"

// 12. Uppercase characters
console.log(nonRepeatingChar("aAbA"));
// "b"

// 13. Case-sensitive test
console.log(nonRepeatingChar("aA"));
// "a"

// 14. Numbers as characters
console.log(nonRepeatingChar("1122334"));
// "4"

// 15. Special characters
console.log(nonRepeatingChar("!!@@##$"));
// "$"

// 16. Spaces
console.log(nonRepeatingChar("aabb c"));
// " "

// 17. Space repeated but another character unique
console.log(nonRepeatingChar("a a b"));
// "b"

// 18. Mixed characters
console.log(nonRepeatingChar("a1a2b1"));
// "2"

// 19. Long repeated string
console.log(nonRepeatingChar("aabbccddeeffg"));
// "g"

// 20. Unique character appears early
console.log(nonRepeatingChar("xabcdefa"));
// "x"