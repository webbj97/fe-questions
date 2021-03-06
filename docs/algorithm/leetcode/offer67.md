# 剑指 Offer 67. 把字符串转换成整数

写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。


首先：

1. 该函数会根据需要**丢弃无用的开头空格字符**，直到寻找到第一个非空格的字符为止。
2. 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；
3. 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
4. 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

**注意：**

假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

**说明：**

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

**示例 1:**

```
输入: "42"
输出: 42
```

**示例 2:**
```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

**示例 3:**

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

**示例 4:**

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```
**示例 5:**

```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```

## 题解

**暴力遍历**

1. 已知在去除空格后，首位字符一定是 +、-、数字，才能成立。
2. 首位字符符合条件后，必须紧接这连续数字，即非空，的数字字符串
3. 边界值判断
4. 返回最终结果

```js
var strToInt = function (s) {
    // 1. 剔除空格
    let str = s.trim(); 
    if (!str) return 0;
    // 2. 定义边界值
    const INT_MIN = Math.pow(-2, 31),
        INT_MAX = Math.pow(2, 31) - 1;
    let isNeg = false;
    // 3. 确认首位符号和正负
    if (['-', '+'].includes(str[0])) {
        isNeg = str[0] === '-';
        str = str.slice(1);
    }
    // 4. 确认连续的数字
    let i = 0;
    let p = '';
    while (i < str.length && str[i] !== ' ' && typeof Number(str[i]) === 'number' && !Number.isNaN(Number(str[i]))) {
        p += str[i]; // 增加连续数字
        i++;
    }
    if (!p) return 0;
    const num = Number(p) * (isNeg ? -1 : 1);
    
    return num >= INT_MAX ? INT_MAX : num <= INT_MIN ? INT_MIN : num
};
```

上面的解法是通过缩减边界的方式实现的，在Js里还可以通过正则完成

**正则**

1. 已知在去除空格后，首位字符一定是 +、-、数字，才能成立。
2. 首位字符符合条件后，必须紧接这连续数字，即非空，的数字字符串
3. 边界值判断
4. 返回最终结果

```js
var strToInt = function (s) {
    // 1. 剔除空格
    let str = s.trim();
    if (!str) return 0;
    // 2. 定义边界值
    const INT_MIN = Math.pow(-2, 31),
        INT_MAX = Math.pow(2, 31) - 1;
    // 定义正则，[0-9]数字前，可以存+或-
    const pattern = /^(\-|\+)?[0-9]+/;
    const res = pattern.exec(str) ?  pattern.exec(str)[0] : '';
    if(res){
        return res >= INT_MAX ? INT_MAX : res <= INT_MIN ? INT_MIN : res
    }
    return 0;
};
```