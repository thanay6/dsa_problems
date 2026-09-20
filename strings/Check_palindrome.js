const checkPalendrome = function (str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        return true;
    }
    return false
}

const checkPalendrome2 = function (str) {

    let i= 0;
    let j = str.length -1;

    while(i<j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(checkPalendrome2("thanay"));
console.log(checkPalendrome2("abba"));
