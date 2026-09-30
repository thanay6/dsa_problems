Problem 4 — Best Time to Buy and Sell Stock
Topic

Arrays / Single Pass / Tracking Minimum

Difficulty

Easy

LeetCode

LeetCode 121 — Best Time to Buy and Sell Stock

LeetCode 121 — Best Time to Buy and Sell Stock

Problem Statement

You are given an array prices where:

prices[i]

represents the price of a stock on day i.

You want to buy the stock on one day and sell it on a later day to maximize your profit.

Return the maximum profit you can achieve.

If you cannot make any profit, return 0.

Important

You must buy before you sell.

For example:

[7, 1, 5, 3, 6, 4]

The best transaction is:

Buy at 1
Sell at 6

Profit = 6 - 1 = 5

Output:

5
Constraints
1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
Target

Try to achieve:

Time:  O(n)
Space: O(1)

Don't use nested loops.

Don't use sorting.

🧪 Test Cases

You can directly paste these into your local JavaScript file.

console.log("===== Best Time to Buy and Sell Stock Test Cases =====");


// 1. Normal case
console.log("1", maxProfit([7, 1, 5, 3, 6, 4]));
// 5


// 2. Prices continuously decreasing
console.log("2", maxProfit([7, 6, 4, 3, 1]));
// 0


// 3. Prices continuously increasing
console.log("3", maxProfit([1, 2, 3, 4, 5]));
// 4


// 4. Single day
console.log("4", maxProfit([5]));
// 0


// 5. Two days - profit
console.log("5", maxProfit([1, 5]));
// 4


// 6. Two days - loss
console.log("6", maxProfit([5, 1]));
// 0


// 7. Buy low, sell high
console.log("7", maxProfit([3, 2, 6, 5, 0, 3]));
// 4


// 8. Lowest price in the middle
console.log("8", maxProfit([7, 6, 4, 3, 1, 5]));
// 4


// 9. Highest price comes before lowest price
console.log("9", maxProfit([10, 1, 2, 3, 4, 5]));
// 4


// 10. All prices same
console.log("10", maxProfit([5, 5, 5, 5, 5]));
// 0


// 11. Multiple possible profits
console.log("11", maxProfit([2, 4, 1, 7]));
// 6


// 12. Profit early but better profit later
console.log("12", maxProfit([1, 4, 2, 10]));
// 9


// 13. Negative-style variation isn't applicable,
// prices are always non-negative
console.log("13", maxProfit([0, 5, 2, 8]));
// 8


// 14. Zero prices
console.log("14", maxProfit([0, 0, 5, 0, 10]));
// 10


// 15. Large prices
console.log("15", maxProfit([10000, 5000, 9000]));
// 4000


// 16. Small fluctuation
console.log("16", maxProfit([5, 4, 6, 3, 7]));
// 4


// 17. Best opportunity near the end
console.log("17", maxProfit([9, 8, 7, 1, 2, 10]));
// 9


// 18. Multiple equal minimums
console.log("18", maxProfit([5, 2, 2, 2, 8]));
// 6


// 19. Multiple equal maximums
console.log("19", maxProfit([1, 5, 5, 5, 2]));
// 4


// 20. Larger mixed array
console.log(
    "20",
    maxProfit([8, 2, 6, 1, 9, 3, 12, 4, 7])
);
// 11
💡 Hint

Don't think about every possible buy/sell combination.

Instead, while scanning from left to right, keep track of:

minimum price seen so far
maximum profit so far

For every current price, ask:

"If I bought at the cheapest price I've seen before,
how much profit could I make by selling today?"

For example:

[7, 1, 5, 3, 6, 4]

Think:

price = 7
minimum = 7
profit = 0

price = 1
minimum = 1
profit = 0

price = 5
minimum = 1
profit = 4

price = 3
minimum = 1
profit = 4

price = 6
minimum = 1
profit = 5

price = 4
minimum = 1
profit = 5

Try implementing the logic yourself rather than directly using the walkthrough.

Don't use
Math.max(...prices)

or nested loops. The goal is to practice the single-pass pattern.