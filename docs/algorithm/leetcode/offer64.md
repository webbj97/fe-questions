
# 剑指 Offer 64. 求1+2+…+n

> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读
> 🙏[在线star地址](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

## 题目描述

求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

**示例 1：**

```
输入: n = 3
输出: 6
```

**示例 2：**

```
输入: n = 9
输出: 45
```

## 题解一：递归


```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if(n){
        n = n + sumNums(n - 1)
    }
    return n;
};
```

 
## 写在最后

本篇是剑指Offer的第24题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)
