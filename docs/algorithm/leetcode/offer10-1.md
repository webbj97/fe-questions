# 剑指 Offer 10- I. 斐波那契数列

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,F(1)= 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入：n = 2
输出：1
```

**示例 2：**

```
输入：n = 5
输出：5
```

## 题解一：传统递归

**思路：**

1. 根据公式 F(N) = f(N - 1) + f(N - 2) N > 1
2. F(0) = 0, f(1) = 1

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n;
    let dp = [0,1];
    for (let i = 2; i<= n; i++){
        dp[i] = (dp[i-1] + dp[i-2])%1000000007;
    }
    return dp[n] 
};

```

**缓存两个值**

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n;
    let a = 0; // 缓存f(n-2);
    let b = 1; // 缓存f(n-1);
    let sum; // 缓存f(n)
    for(let i = 2; i <= n ;i++){
        sum = ( a + b ) % 1000000007;
        a = b;
        b = sum;
    }
    return sum;
};
```