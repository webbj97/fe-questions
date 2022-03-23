# 剑指Offer（48）最长不含重复字符的子字符串

请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

## 解法一：暴力搜索

```js
var lengthOfLongestSubstring = function(s) {
    let res = [];
    let i = 0;
    let len = 0;
    while (i < s.length) {
        const cur = s[i];
        const findI = res.findIndex((v) => v === cur);

        if (findI === -1) {
            res.push(cur);
        } else if (findI === 0) {
            res.push(res.shift());
        } else {
            res = res.slice(findI + 1);
            res.push(cur);
        }
        // max
        len = Math.max(len, res.length);
        i++;
    }
    return len;
};
```


## 解法二：动态窗口

```js
var lengthOfLongestSubstring1 = function(s) {
    let i = 0,
        j = 0;
    let ans = 0;
    const map = {};
    while (i < s.length && j < s.length) {
        if (!map[s[j]]) {
            ans = Math.max(j - i + 1, ans);
            map[s[j]] = true;
            ++j;
        } else {
            // 如果char重复，那么缩小滑动窗口，并更新对应的map
            map[s[i]] = false;
            ++i;
        }
    }
    return ans;
};
```