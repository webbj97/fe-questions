# 剑指 Offer56-II. 数组中数字出现的次数 II

> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读
> 🙏[在线star地址](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

## 题目描述

在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。


**示例 1：**

```
输入：nums = [3,4,3,3]
输出：4
```

**示例 2：**

```
输入：nums = [9,1,7,9,7,9,7]
输出：1
```

## 题解一：数学思想

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const compare = [...new Set(nums)].map(v => v * 3).reduce((a, b) => a + b)
    const res = nums.reduce((a, b) => a + b);
    return (compare - res) / 2
};
```


 
 ## 写在最后

本篇是剑指Offer的第25题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)