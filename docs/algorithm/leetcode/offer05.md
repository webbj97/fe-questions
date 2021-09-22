# 剑指offer-05 替换空格

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

**代码：数组方法**

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    return s.split('').map(v => v === ' ' ? '%20' : v).join('')
};
```