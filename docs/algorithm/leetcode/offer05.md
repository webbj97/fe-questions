# 剑指Offer-04 二维数组中的查找
> **JavaScript剑指Offer题解**<br>
> 🚀<font color=red>包含数组、对象、链表、堆栈、树等经典题型</font>
> ☕️每天一道，轻松不累
> 💬详细的题目解析，<font color=red>收藏</font>方便阅读

### 在线阅读地址

<a href="https://github.com/webbj97/fe-questions/tree/master/docs/algorithm" target="blank">在线阅读地址</a>

### 题目描述

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。


**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

**限制：**

```
0 <= s 的长度 <= 10000
```

### 题解一：数组方法

**复杂度**

* O(m+n)

**思路：**

* 将字符串拆分，替换，再合并

时间复杂度O(n)
```js
var replaceSpace = function (s) {
    return s.split('').map(v => v === ' ' ? '%20' : v).join('')
};
```

### 题解二：正则

```js
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20')
};
```


## 写在最后

本篇是剑指Offer的第三题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)
 
 <comment-comment/> 
 