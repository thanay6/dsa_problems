/**
 * @param {number[]} prices
 * @return {number}
 */

// this is bruteforce method 
// var maxProfit = function (prices) {
//     let max = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {

//             const profit = prices[j] - prices[i];

//             if (profit > max) max = profit;

//         }
//     }

//     return max;
// };
var maxProfit = function (prices) {
    let maxProfit = 0;
    let min = Infinity;

    for (let num of prices) {


        if (num < min) {
            min = num;
        }

        const profit = num - min;

        if (profit > maxProfit) maxProfit = profit;
    }

    return maxProfit;
};

var maxProfit = function (prices) {

}




// 1. Normal case
console.log("1", maxProfit([7, 1, 5, 3, 6, 4]));
// 5