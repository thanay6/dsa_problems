

const reverseWords = function (str) {


    let stack = [];

    let str1 = "";
    for (let char of str) {
        if (char !== ' ') {
            str1 += char;
        }
        else {
            stack.push(str1);
            str1 = "";
        }
    }
    if (str1.length > 0) {
        stack.push(str1);
    }
    let result = "";
    while (stack.length > 0) {

        result += stack.pop();
        if (stack.length > 0) {
            result += ' ';
        }
    }
    return result;

}

console.log("===== Reverse Words Test Cases =====");

// 1. Normal sentence
console.log("1", reverseWords("I love JavaScript"));
// "JavaScript love I"

// 2. Two words
console.log("2", reverseWords("Hello World"));
// "World Hello"

// 3. Single word
console.log("3", reverseWords("JavaScript"));
// "JavaScript"

// 4. Empty string
console.log("4", reverseWords(""));
// ""

// 5. Leading spaces
console.log("5", reverseWords("  I love JavaScript"));
// "JavaScript love I"

// 6. Trailing spaces
console.log("6", reverseWords("I love JavaScript  "));
// "JavaScript love I"

// 7. Leading and trailing spaces
console.log("7", reverseWords("  I love JavaScript  "));
// "JavaScript love I"

// 8. Multiple spaces between words
console.log("8", reverseWords("I  love   JavaScript"));
// "JavaScript love I"

// 9. All spaces
console.log("9", reverseWords("     "));
// ""

// 10. Three words
console.log("10", reverseWords("Hello How Are"));
// "Are How Hello"

// 11. Numbers
console.log("11", reverseWords("I have 2 dogs"));
// "dogs 2 have I"

// 12. Numbers only
console.log("12", reverseWords("1 2 3 4 5"));
// "5 4 3 2 1"

// 13. Special characters
console.log("13", reverseWords("Hello, world!"));
// "world! Hello,"

// 14. Special characters as words
console.log("14", reverseWords("I @ love # coding"));
// "coding # love @ I"

// 15. Mixed uppercase and lowercase
console.log("15", reverseWords("Hello WORLD JavaScript"));
// "JavaScript WORLD Hello"

// 16. Repeated words
console.log("16", reverseWords("hello hello world"));
// "world hello hello"

// 17. Long sentence
console.log("17", reverseWords("I am learning Node JS backend development"));
// "development backend JS Node learning am I"

// 18. Single character words
console.log("18", reverseWords("a b c d"));
// "d c b a"

// 19. Hyphenated words
console.log("19", reverseWords("Node.js is fast-and-powerful"));
// "fast-and-powerful is Node.js"

// 20. Empty words caused by multiple spaces
console.log("20", reverseWords("Node    JS    Backend"));
// "Backend JS Node"