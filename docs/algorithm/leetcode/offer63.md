#剑指 Offer 63. 股票的最大利润

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 

限制：

0 <= 数组长度 <= 10^5


**普通解法**

其实就是从前到后寻找最大的元素差， 遍历，记录最小元素，和最大的元素差。 时间复杂度O(n),空间复杂度O(1)

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minP = prices[0];  // 最小元素
    let maxD = 0; // 最大利润
    for (let i = 0; i<prices.length; i++){
        if(prices[i] < minP)  minP  = prices[i];
        maxD = Math.max(maxD ,  prices[i]- minP);
    }
    return maxD;
};
```


**动态规划**

动态规划： dp[i] = max(dp[i-1] , price[i] - minP);  dp[0] = 0;   minP是最小元素。

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length< 1) return 0;
    let minP = prices[0];  // 最小元素
    let dp = [0];
    for(let i = 1; i<prices.length ;i++){
        if(prices[i] < minP)  minP  = prices[i];
        dp[i] = Math.max( dp[i-1], prices[i] - minP);
    }
    return dp[prices.length-1];
};
```