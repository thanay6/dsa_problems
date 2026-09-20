
const removeDuplocates = function (arr) {
    const set = new Set();
    const arr1 = [];

    for (let n of arr) {
        if(!set.has(n)){
            set.add(n);
            arr1.push(n)
        }
    }
    return arr1;
}

console.log(removeDuplocates([1,2,1,2,1,2]));