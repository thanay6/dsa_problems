
const checkAnagrams = function (str1, str2) {

    let map1 = new Map();

    let map2 = new Map();

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {

        map1.set(str1[i], (map1.get(str1[i]) || 0) + 1);
        map2.set(str2[i], (map2.get(str2[i]) || 0) + 1);
    }

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true
}

console.log("===== Anagram Test Cases =====");

// 1. Normal anagram
console.log("1", checkAnagrams("listen", "silent"));
// true

// 2. Your example
console.log("2", checkAnagrams("thaany", "thanay"));
// true

// 3. Same string
console.log("3", checkAnagrams("hello", "hello"));
// true

// 4. Different length
console.log("4", checkAnagrams("hello", "hell"));
// false

// 5. Same characters, different order
console.log("5", checkAnagrams("abc", "cba"));
// true

// 6. Not an anagram
console.log("6", checkAnagrams("abc", "abd"));
// false

// 7. Empty strings
console.log("7", checkAnagrams("", ""));
// true

// 8. One character - same
console.log("8", checkAnagrams("a", "a"));
// true

// 9. One character - different
console.log("9", checkAnagrams("a", "b"));
// false

// 10. Repeated characters
console.log("10", checkAnagrams("aabbcc", "abcabc"));
// true

// 11. Different character frequency
console.log("11", checkAnagrams("aabb", "aaab"));
// false

// 12. Same characters but different frequency
console.log("12", checkAnagrams("aabbc", "ababc"));
// false

// 13. Uppercase
console.log("13", checkAnagrams("ABC", "CBA"));
// true

// 14. Case-sensitive
console.log("14", checkAnagrams("abc", "ABC"));
// false

// 15. Mixed uppercase/lowercase
console.log("15", checkAnagrams("aAbB", "BbAa"));
// true

// 16. Numbers
console.log("16", checkAnagrams("12345", "54321"));
// true

// 17. Numbers - different
console.log("17", checkAnagrams("12345", "54326"));
// false

// 18. Special characters
console.log("18", checkAnagrams("!@#$", "$#@!"));
// true

// 19. Spaces
console.log("19", checkAnagrams("a b", "b a"));
// true

// 20. Spaces matter
console.log("20", checkAnagrams("ab", "a b"));
// false

// 21. Repeated single character
console.log("21", checkAnagrams("aaaa", "aaaa"));
// true

// 22. Repeated character mismatch
console.log("22", checkAnagrams("aaaa", "aaab"));
// false

// 23. Long strings
console.log(
    "23",
    checkAnagrams(
        "abcdefghijklmnopqrstuvwxyz",
        "zyxwvutsrqponmlkjihgfedcba"
    )
);
// true

// 24. Same length but completely different
console.log("24", checkAnagrams("abcd", "efgh"));
// false

// 25. Negative-looking strings
console.log("25", checkAnagrams("-12", "21-"));
// true