# 剑指Offer（50）第一个只出现一次的字符

在字符串`s`中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s只包含小写字母。

**示例 1:**
```
输入：s = "abaccdeff"
输出：'b'

```
**示例 2:**
```
输入：s = "" 
输出：' '
```

**暴力枚举**

1. 统计每个字母出现的次数
2. 第二次遍历，寻找出现1次的第一个字母

```js
var firstUniqChar = function(s) {
    const obj = {};
    // 首次
    for(let i = 0; i < s.length; i++){
        const key = s[i]; 
        if(!obj[key]){
            res = key; // 暂时的首次
            obj[key] = 1;
        }else{
            obj[key]++;
        }
    }
    const keys = Object.keys(obj);
    const item = keys.find(key => obj[key] === 1)
    return item ? item : ' ';
};
```

**缓存**

1. 遇到第一次出现的字母，就保存起来
2. 如果下一个字母已经被保存过，就剔除