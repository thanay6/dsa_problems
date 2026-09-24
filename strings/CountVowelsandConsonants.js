

const countVowelsConsonants = function (str) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    let vowelsCount = 0;
    let consonantsCount = 0;
    // for (let char of str) {
    //     vowels.includes(char) ? vowelsCount++ : consonantsCount++;
    // }

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= "Z")) {
            consonantsCount++;
        }
    }
    return { vowelsCount, consonantsCount };


}

console.log("===== Vowels & Consonants Test Cases =====");

// 1. Normal word
console.log(countVowelsConsonants("Thanay"));
// { vowelsCount: 2, consonantsCount: 4 }

// 2. All vowels - lowercase
console.log(countVowelsConsonants("aeiou"));
// { vowelsCount: 5, consonantsCount: 0 }

// 3. All vowels - uppercase
console.log(countVowelsConsonants("AEIOU"));
// { vowelsCount: 5, consonantsCount: 0 }

// 4. All consonants - lowercase
console.log(countVowelsConsonants("bcdfg"));
// { vowelsCount: 0, consonantsCount: 5 }

// 5. All consonants - uppercase
console.log(countVowelsConsonants("BCDFG"));
// { vowelsCount: 0, consonantsCount: 5 }

// 6. Mixed uppercase and lowercase
console.log(countVowelsConsonants("ThAnAy"));
// { vowelsCount: 2, consonantsCount: 4 }

// 7. Single vowel
console.log(countVowelsConsonants("a"));
// { vowelsCount: 1, consonantsCount: 0 }

// 8. Single consonant
console.log(countVowelsConsonants("b"));
// { vowelsCount: 0, consonantsCount: 1 }

// 9. Empty string
console.log(countVowelsConsonants(""));
// { vowelsCount: 0, consonantsCount: 0 }

// 10. String with spaces
console.log(countVowelsConsonants("hello world"));
// { vowelsCount: 3, consonantsCount: 7 }

// 11. String with numbers
console.log(countVowelsConsonants("hello123"));
// { vowelsCount: 2, consonantsCount: 3 }

// 12. String with special characters
console.log(countVowelsConsonants("hello!@#"));
// { vowelsCount: 2, consonantsCount: 3 }

// 13. Only numbers
console.log(countVowelsConsonants("123456"));
// { vowelsCount: 0, consonantsCount: 0 }

// 14. Only special characters
console.log(countVowelsConsonants("!@#$%^"));
// { vowelsCount: 0, consonantsCount: 0 }

// 15. Spaces only
console.log(countVowelsConsonants("   "));
// { vowelsCount: 0, consonantsCount: 0 }

// 16. Repeated vowels
console.log(countVowelsConsonants("aaaa"));
// { vowelsCount: 4, consonantsCount: 0 }

// 17. Repeated consonants
console.log(countVowelsConsonants("bbbb"));
// { vowelsCount: 0, consonantsCount: 4 }

// 18. Long mixed string
console.log(countVowelsConsonants("JavaScript Backend Developer"));
// { vowelsCount: 9, consonantsCount: 17 }

// 19. Vowels and consonants with spaces
console.log(countVowelsConsonants("a b c d e"));
// { vowelsCount: 2, consonantsCount: 2 }

// 20. Mixed with numbers and symbols
console.log(countVowelsConsonants("Th4n@y R3ddy!"));
// { vowelsCount: 1, consonantsCount: 5 }