
const removeDuplicateChar = function (str) {

    // const set = new Set(str);

    // return [...set].join("");
    let set = new Set();

    for(let ch of str){
        set.add(ch);
    }

    let res = "";

    for(let ch of set){
        res +=ch
    }

    return res;
}

console.log("===== Remove Duplicate Characters =====");

// 1. Normal case
console.log(removeDuplicateChar("thanay"));
// "thany"

// 2. All characters are unique
console.log(removeDuplicateChar("abcdef"));
// "abcdef"

// 3. All characters are duplicates
console.log(removeDuplicateChar("aaaa"));
// "a"

// 4. Empty string
console.log(removeDuplicateChar(""));
// ""

// 5. Single character
console.log(removeDuplicateChar("a"));
// "a"

// 6. Duplicate at the beginning
console.log(removeDuplicateChar("aabc"));
// "abc"

// 7. Duplicate at the end
console.log(removeDuplicateChar("abca"));
// "abc"

// 8. Duplicate in the middle
console.log(removeDuplicateChar("abbc"));
// "abc"

// 9. Multiple duplicates
console.log(removeDuplicateChar("aabbcc"));
// "abc"

// 10. Non-consecutive duplicates
console.log(removeDuplicateChar("abcadbe"));
// "abcde"

// 11. Uppercase characters
console.log(removeDuplicateChar("AaBbAa"));
// "AaBb"

// 12. Case sensitivity
console.log(removeDuplicateChar("aA"));
// "aA"

// 13. Numbers
console.log(removeDuplicateChar("112233"));
// "123"

// 14. Special characters
console.log(removeDuplicateChar("!!@@##"));
// "!@#"

// 15. Spaces
console.log(removeDuplicateChar("hello world"));
// "helo wrd"

// 16. Repeated spaces
console.log(removeDuplicateChar("a  b  c"));
// "a bc"

// 17. Mixed characters
console.log(removeDuplicateChar("a1b2a1"));
// "a1b2"

// 18. Numbers + symbols
console.log(removeDuplicateChar("1@1#@2"));
// "1@#2"

// 19. Long repeated string
console.log(removeDuplicateChar("abcabcabcabc"));
// "abc"

// 20. Palindrome
console.log(removeDuplicateChar("racecar"));
// "race"

// 21. Case + numbers + symbols
console.log(removeDuplicateChar("Aa1!Aa1!"));
// "Aa1!"