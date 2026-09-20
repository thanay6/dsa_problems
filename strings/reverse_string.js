
const reverseOfString = function (str) {
    let str1 = "";

    for (let i = str.length - 1; i >= 0; i--) {
        str1 = str1 + str[i];
    }
    return str1;
}
const swap = function (str, i, j) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}


console.log(reverseOfString("Thanay"));
