# padStart

> <b>_repeat([string=''], [n=1])</b>

**注意：**重复 N 次给定字符串。

### 参数

* string： (string): 要重复的字符串。
* n： (number): 重复的次数。

### 返回

* (string): 返回重复的字符串。

### 实现

```js
const _padStart = function(str = "", length = 0, chars = " ") {
    if (!length) return str;
    const { length: strLen } = str;
    const dif = length - strLen;
    if (dif <= 0) return str;

    let start = "";
    for (let i = 0; i < dif; i++) {
        start = start + chars;
    }
    return start.slice(0, dif) + str;
};
```

### 例子

```js
_padStart("abc", 6);
// => '   abc'

_padStart("abc", 6, "_-");
// => '_-_abc'

_padStart("abc", 3);
// => 'abc'
```