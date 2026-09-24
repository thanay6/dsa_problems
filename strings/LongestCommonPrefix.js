

const checkStr = function (str1, str2) {

    let n = Math.min(str1.length, str2.length)

    while (n > 0) {
        if(str1.slice(0,n) !== str2.slice(0,n)){
            n--;
        }
        else{
            return str1.slice(0,n)
        }
    }
    return ""
}
const longestCommonPrefix = function (arr) {
    if(arr.length === 0){
        return "";
    }

    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefix = checkStr(prefix, arr[i]);
    }
    return prefix;
} 

console.log("===== Longest Common Prefix Test Cases =====");

// 1. Normal case
console.log("1", longestCommonPrefix(["flower", "flow", "flight"]));
// "fl"

// 2. No common prefix
console.log("2", longestCommonPrefix(["dog", "racecar", "car"]));
// ""

// 3. All strings are identical
console.log("3", longestCommonPrefix(["hello", "hello", "hello"]));
// "hello"

// 4. Only one string
console.log("4", longestCommonPrefix(["hello"]));
// "hello"

// 5. Empty array
console.log("5", longestCommonPrefix([]));
// ""

// 6. Empty string in the array
console.log("6", longestCommonPrefix(["", "flower", "flow"]));
// ""

// 7. All empty strings
console.log("7", longestCommonPrefix(["", "", ""]));
// ""

// 8. Two strings with common prefix
console.log("8", longestCommonPrefix(["flower", "flow"]));
// "flow"

// 9. Two strings without common prefix
console.log("9", longestCommonPrefix(["dog", "cat"]));
// ""

// 10. One string is a prefix of another
console.log("10", longestCommonPrefix(["car", "card", "care"]));
// "car"

// 11. Common prefix is one character
console.log("11", longestCommonPrefix(["apple", "ant", "air"]));
// "a"

// 12. Common prefix is the entire shortest string
console.log("12", longestCommonPrefix(["ab", "abc", "abcd"]));
// "ab"

// 13. All strings have one character
console.log("13", longestCommonPrefix(["a", "a", "a"]));
// "a"

// 14. Different single characters
console.log("14", longestCommonPrefix(["a", "b", "c"]));
// ""

// 15. Case-sensitive comparison
console.log("15", longestCommonPrefix(["Apple", "Application", "Apply"]));
// "Appl"

// 16. Uppercase and lowercase differ
console.log("16", longestCommonPrefix(["apple", "Apple"]));
// ""

// 17. Numbers as strings
console.log("17", longestCommonPrefix(["12345", "123", "1239"]));
// "123"

// 18. Special characters
console.log("18", longestCommonPrefix(["!@abc", "!@xyz", "!@123"]));
// "!@"

// 19. Spaces at the beginning
console.log("19", longestCommonPrefix([" hello", " helium", " help"]));
// " he"

// 20. Spaces inside strings
console.log("20", longestCommonPrefix(["a b c", "a b d", "a b e"]));
// "a b "

// 21. Common prefix with numbers and letters
console.log("21", longestCommonPrefix(["abc123", "abc456", "abc789"]));
// "abc"

// 22. One string completely different
console.log("22", longestCommonPrefix(["flower", "flow", "xyz"]));
// ""

// 23. Long common prefix
console.log(
    "23",
    longestCommonPrefix([
        "javascript",
        "java",
        "january"
    ])
);
// "ja"

// 24. Repeated characters
console.log("24", longestCommonPrefix(["aaaa", "aaab", "aaaaa"]));
// "aaa"

// 25. Common prefix is one repeated character
console.log("25", longestCommonPrefix(["bbb", "bbbc", "bbbd"]));
// "bbb"

// 26. Negative-looking strings
console.log("26", longestCommonPrefix(["-123", "-456", "-789"]));
// "-"

// 27. Mixed case and symbols
console.log("27", longestCommonPrefix(["A@123", "A@456", "A@789"]));
// "A@"

// 28. Prefix disappears after comparison
console.log("28", longestCommonPrefix(["abc", "ab", "a"]));
// "a"

// 29. Common prefix between many strings
console.log(
    "29",
    longestCommonPrefix([
        "interview",
        "internet",
        "internal",
        "interval"
    ])
);
// "inter"

// 30. Completely empty and non-empty mix
console.log("30", longestCommonPrefix(["hello", "", "world"]));
// ""