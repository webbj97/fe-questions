# padStart

> <b>_padStart([string=''], [length=0], [chars=' '])</b>

**注意：**如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。

### 参数

* string： (string): 要填充的字符串。
* length： (number): 填充的长度。
* chars：(string): 填充字符。

### 返回

* (string): 返回填充后的字符串。

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

### 测试

```js
_padStart("abc", 6);
// => '   abc'

_padStart("abc", 6, "_-");
// => '_-_abc'

_padStart("abc", 3);
// => 'abc'
```