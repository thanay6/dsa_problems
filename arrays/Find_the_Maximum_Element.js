

var maxiElement = function (arr) {
    let max = arr[0];

    for(let n of arr){
        if(n>= max){
            max = n;
        }
    }
    return max;
}

console.log(maxiElement([1,2,3,4,10,2,30,2]))