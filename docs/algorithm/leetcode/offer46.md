# 剑指 Offer 46. 把数字翻译成字符串
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

**示例1**

```
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

```

动态规划方程：

dp[i] = dp[i-1] + dp[i-2] (if 10< dp[i-1]dp[i] <26)

dp[i] = dp[i-1] (else)


```js
/**
 * @param {number} num
 * @return {number}
 */

var translateNum = function(num) {
    let arr = num.toString().split('');
    let dp = [];
    if(arr.length <= 1) return 1;
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2;i<=arr.length;i++){
        let n = +(arr[i-2]+arr[i-1]);
        if( n < 26 && n >9){
            dp[i] = dp[i-1] + dp[i-2];
        }else{
            dp[i] = dp[i-1];
        }
    }
    return dp[arr.length];
};
```