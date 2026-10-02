var maxProfit = function (prices) {

    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {

        if(prices[i+1] > prices[i]){
            profit += prices[i+1] - prices[i];
        }
    }

    return profit;

};

console.log("===== Stock II Test Cases =====");

console.log("1", maxProfit([7, 1, 5, 3, 6, 4]));
// Expected: 7

console.log("2", maxProfit([1, 2, 3, 4, 5]));
// Expected: 4

console.log("3", maxProfit([7, 6, 4, 3, 1]));
// Expected: 0

console.log("4", maxProfit([1]));
// Expected: 0

console.log("5", maxProfit([1, 5]));
// Expected: 4

console.log("6", maxProfit([5, 1]));
// Expected: 0

console.log("7", maxProfit([1, 2, 1, 2]));
// Expected: 2

console.log("8", maxProfit([2, 1, 2, 0, 1]));
// Expected: 2

console.log("9", maxProfit([3, 3, 3, 3]));
// Expected: 0

console.log("10", maxProfit([1, 3, 2, 4, 5]));
// Expected: 6

console.log("11", maxProfit([2, 4, 1, 7]));
// Expected: 8

console.log("12", maxProfit([5, 10, 15]));
// Expected: 10

console.log("13", maxProfit([10, 5, 1]));
// Expected: 0

console.log("14", maxProfit([1, 5, 2, 6]));
// Expected: 8

console.log("15", maxProfit([4, 2, 8, 1, 9]));
// Expected: 14

console.log("16", maxProfit([1, 2, 3, 2, 4, 5]));
// Expected: 5

console.log("17", maxProfit([6, 1, 4, 2, 8]));
// Expected: 9

console.log("18", maxProfit([1, 10, 2, 10]));
// Expected: 17

console.log("19", maxProfit([2, 3, 4, 1, 5]));
// Expected: 6

console.log("20", maxProfit([10, 1, 10, 1, 10]));
// Expected: 18