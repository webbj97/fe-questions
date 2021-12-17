# repeat

> <b>_repeat([string=''], [n=1])</b>

**注意：**重复 N 次给定字符串。

### 参数

* string： (string): 要重复的字符串。
* n： (number): 重复的次数。

### 返回

* (string): 返回重复的字符串。

### 实现

```js
const _repeat = (string = "", n = 1) => {
    // 重复0次，则返回空值
    if (n === 0 || !string) return "";
    let result = "";
    while (n) {
        if (n % 2) {
            // 如果取余仍有值，证明是奇数位，需要先加一次
            result += string; // 1倍
        }
        // 降幂
        n = Math.floor(n / 2);
        // 每降一次，则str * 2
        if (n) {
            string += string; // 2倍
        }
    }
    return result;
};
```

### 测试

```js
_repeat("*", 3);
// => '***'

_repeat("abc", 2);
// => 'abcabc'

_repeat("abc", 0);
// => ''
```