## 剑指 Offer 58 - II. 左旋转字符串

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

**示例 1：**
```
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

**示例 2：**
```
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```

**截取**

1. 旋转的好处在于从旋转点开始，左右两边是固定的，所以只需要截取两端，并反向拼接即可

```js
var reverseLeftWords = function (s, n) {
    const len = s.length;
    const index = n % len;
    const left = s.slice(0, index);
    const right = s.slice(index, len);
    return right + left;
};
```
 
 <comment-comment/> 
 