
function swap(s,i,j){
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}


function reverseString(s){

    let i =0;
    let j = s.length-1;
    
    while(i<=j){
        swap(s,i,j);
        i++;j--;
    }

    return s;

}

// 1. Normal string
let s1 = ["h", "e", "l", "l", "o"];
console.log("1 | Expected: o,l,l,e,h | Actual:", reverseString(s1));

// 2. Even length string
let s2 = ["H", "a", "n", "n", "a", "h"];
console.log("2 | Expected: h,a,n,n,a,H | Actual:", reverseString(s2));

// 3. Single character
let s3 = ["A"];
console.log("3 | Expected: A | Actual:", reverseString(s3));

// 4. Two characters
let s4 = ["a", "b"];
console.log("4 | Expected: b,a | Actual:", reverseString(s4));

// 5. Two identical characters
let s5 = ["a", "a"];
console.log("5 | Expected: a,a | Actual:", reverseString(s5));

// 6. Odd length string
let s6 = ["1", "2", "3", "4", "5"];
console.log("6 | Expected: 5,4,3,2,1 | Actual:", reverseString(s6));