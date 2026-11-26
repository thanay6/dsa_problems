

function reverseString(s){

    let str = [];

    let i = s.length-1;

    while(i>=0){
        console.log(i);
        
        str.push(s[i]);
        i--;
    }
    s=str;
    return s;
}


let s6 = ["h","e","l","l","o"];
console.log("6 | Expected: 5,4,3,2,1 | Actual:", reverseString(s6));