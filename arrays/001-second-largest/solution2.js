var thirdMax = function (nums) {

    let firstMaxNumber = -Infinity;
    let secondMaxNumber = -Infinity;
    let thirdMaxNumber = -Infinity;

    for (let num of nums) {
        if (num > firstMaxNumber) {
            firstMaxNumber = num;
        }
    }

    console.log(firstMaxNumber);



    for (let num of nums) {
        if (num < firstMaxNumber && num > secondMaxNumber) {
            secondMaxNumber = num;
        }
    }
    console.log(secondMaxNumber);

    for (let num of nums) {
        if (num < secondMaxNumber && num > thirdMaxNumber) {
            thirdMaxNumber = num;
        }
    }
    console.log(thirdMaxNumber);

    return thirdMaxNumber === -Infinity ? -1 : thirdMaxNumber;


};

console.log(thirdMax([3, 2, 1]))